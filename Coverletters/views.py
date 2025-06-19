from django.http import HttpResponse, FileResponse
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from sentry_sdk import capture_exception
from io import BytesIO
from reportlab.pdfgen import canvas
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

import os

from .models import CoverLetter
from .serializers import CoverLetterSerializer


def home(request):
    return HttpResponse("Welcome to the CoverLetters app!")


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


@method_decorator(csrf_exempt, name='dispatch')
class CoverLetterGeneratorView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        name = request.data.get("name")
        experience = request.data.get("experience")
        resume = request.data.get("resume_text")
        job_description = request.data.get("job_description")
        company = request.data.get("company", "the company")
        job_title = request.data.get("job_title", "the position")

        if not all([name, experience, resume, job_description]):
            return Response({"error": "Missing fields"}, status=400)
        print("Name:", request.data.get("name"))
        print("Experience:", request.data.get("experience"))
        print("Resume Summary:", request.data.get("resume_text"))
        print("Job Title:", request.data.get("job_title"))
        print("Job Description:", request.data.get("job_description"))
        print("Company:", request.data.get("company"))


        prompt = f"""
Write a modern, professional cover letter (body only — no addresses or header) for {name}, applying for the position of {job_title} at {company}.
Use the following:
- Work experience: {experience}
- Resume summary: {resume}
- Job description: {job_description}

Avoid using any placeholders or template formatting. Write it naturally as if it’s ready to send. Focus on enthusiasm, fit for the role, and clarity.
"""

        try:
            response = client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": "You are an expert career coach and cover letter writer."},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=600,
            )

            letter = response.choices[0].message.content

            cover_letter = CoverLetter.objects.create(
                user=request.user if request.user.is_authenticated else None,
                job_title=job_title,
                company=company,
                content=letter
            )

            return Response({
                "cover_letter": letter,
                "letter_id": cover_letter.id
            })

        except Exception as e:
            capture_exception(e)
            print("Cover letter generation error:", e)
            return Response(
                {"error": "An error occurred while generating your cover letter."},
                status=500
            )


@csrf_exempt
@api_view(['GET'])
@permission_classes([AllowAny])  # Public access allowed
def download_cover_letter_pdf(request, letter_id):
    try:
        letter = CoverLetter.objects.get(id=letter_id)
    except CoverLetter.DoesNotExist:
        return Response({'error': 'Cover letter not found'}, status=404)

    buffer = BytesIO()
    p = canvas.Canvas(buffer)

    # Write content line by line
    y = 800
    for line in letter.content.strip().split('\n'):
        p.drawString(50, y, line)
        y -= 20
        if y < 50:
            p.showPage()
            y = 800

    p.showPage()
    p.save()
    buffer.seek(0)

    filename = f"{letter.job_title or 'cover'}_{letter.company or 'general'}_letter.pdf".replace(" ", "_")

    return FileResponse(buffer, as_attachment=True, filename=filename)



@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def save_cover_letter(request):
    try:
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = CoverLetterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        capture_exception(e)
        return Response({'error': 'Failed to save cover letter.'}, status=500)


@csrf_exempt
@api_view(['GET'])
@permission_classes([AllowAny])
def get_cover_letter(request, letter_id):
    try:
        letter = CoverLetter.objects.get(id=letter_id)
        serializer = CoverLetterSerializer(letter)
        return Response(serializer.data)
    except CoverLetter.DoesNotExist:
        return Response({'error': 'Cover letter not found'}, status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
@api_view(['GET'])
@permission_classes([AllowAny])
def list_cover_letters(request):
    letters = CoverLetter.objects.filter(user=request.user).order_by('-created_at')
    serializer = CoverLetterSerializer(letters, many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_cover_letter(request, letter_id):
    try:
        letter = CoverLetter.objects.get(id=letter_id, user=request.user)
        letter.delete()
        return Response(status=204)
    except CoverLetter.DoesNotExist:
        return Response({'error': 'Not found'}, status=404)


# coverletters/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

import fitz  # PyMuPDF
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .grading import grade_uploaded_pdf

@api_view(["POST"])
def grade_uploaded_file(request):
    file = request.FILES.get("file")
    if not file or file.content_type != "application/pdf":
        return Response({"error": "Please upload a valid PDF file."}, status=400)

    try:
        # Extract text from uploaded PDF
        with fitz.open(stream=file.read(), filetype="pdf") as doc:
            text = ""
            for page in doc:
                text += page.get_text()

        if len(text.strip()) < 30:
            return Response({
                "grade": "F",
                "feedback": "The uploaded PDF doesn't contain readable text. Please upload a proper resume or cover letter with actual text.",
                "word_count": 0,
            })

        result = grade_uploaded_pdf(text)
        return Response(result)
    except Exception as e:
        return Response({"error": str(e)}, status=500)
