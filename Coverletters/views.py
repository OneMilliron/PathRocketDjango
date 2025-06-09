from django.http import HttpResponse, FileResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from openai import OpenAI
from sentry_sdk import capture_exception
from io import BytesIO
from reportlab.pdfgen import canvas
import os

from .models import CoverLetter
from .serializers import CoverLetterSerializer


def home(request):
    return HttpResponse("Welcome to the CoverLetters app!")


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


from sentry_sdk import capture_exception, capture_message

class CoverLetterGeneratorView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        name = request.data.get("name")
        experience = request.data.get("experience")
        resume = request.data.get("resume_text")
        job_description = request.data.get("job_description")
        company = request.data.get("company", "the company")
        job_title = request.data.get("job_title", "the position")

        if not all([name, experience, resume, job_description]):
            return Response({"error": "Missing fields"}, status=400)

        prompt = f"""
Write a professional, enthusiastic cover letter from {name} applying for a {job_title} role at {company}.
They have this experience:\n{experience}
Their resume is:\n{resume}
The job description is:\n{job_description}
Make it compelling, customized, and concise.
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
                user=request.user,
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
            capture_message(
                f"GPT failure for user {request.user.username} applying for '{job_title}' at '{company}'"
            )
            return Response(
                {"error": "An error occurred while generating your cover letter."},
                status=500
            )



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def download_cover_letter_pdf(request, letter_id):
    try:
        letter = CoverLetter.objects.get(id=letter_id, user=request.user)
    except CoverLetter.DoesNotExist:
        # Optional: capture_exception(e)
        return Response({'error': 'Cover letter not found'}, status=404)

    try:
        buffer = BytesIO()
        p = canvas.Canvas(buffer)

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
        filename = f"{letter.job_title}_{letter.company}_cover_letter.pdf".replace(" ", "_")

        return FileResponse(buffer, as_attachment=True, filename=filename)
    except Exception as e:
        capture_exception(e)
        return Response({'error': 'Failed to generate PDF.'}, status=500)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
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


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_cover_letter(request, letter_id):
    try:
        letter = CoverLetter.objects.get(id=letter_id, user=request.user)
        serializer = CoverLetterSerializer(letter)
        return Response(serializer.data)
    except CoverLetter.DoesNotExist:
        return Response({'error': 'Cover letter not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_cover_letters(request):
    letters = CoverLetter.objects.filter(user=request.user).order_by('-created_at')
    serializer = CoverLetterSerializer(letters, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_cover_letter(request, letter_id):
    try:
        letter = CoverLetter.objects.get(id=letter_id, user=request.user)
        letter.delete()
        return Response(status=204)
    except CoverLetter.DoesNotExist:
        return Response({'error': 'Not found'}, status=404)
