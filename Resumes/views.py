from django.http import HttpResponse, FileResponse
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.exceptions import Throttled
from .utils.pdf import generate_resume_pdf
from .models import Resume
from .serializers import ResumeSerializer
from rest_framework.parsers import MultiPartParser, FormParser
import PyPDF2
from django.views.decorators.csrf import csrf_exempt
from .gpt_resgen_api import generate_resume

# Throttle class (3 per day or your custom setting)
class ResumeRateThrottle(UserRateThrottle):
    scope = 'resume_generation'

def home(request):
    return HttpResponse("Welcome to the Users app!")

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([ResumeRateThrottle])
def generate_resume_view(request):
    # Extract form fields
    name = request.data.get('name', 'Your Name')
    email = request.data.get('email', '')
    phone = request.data.get('phone', '')
    linkedin = request.data.get('linkedin', '')
    education = request.data.get('education', '')
    experience = request.data.get('experience', '')
    skills = request.data.get('skills', '')
    summary = request.data.get('summary', '')
    additional_info = request.data.get('additional_info', '')
    languages = request.data.get('languages', '')
    job = request.data.get('job', {})
    is_tailored = request.data.get('is_tailored', False)

    try:
        resume_content = generate_resume(
            name=name,
            email=email,
            phone=phone,
            linkedin=linkedin,
            education=education,
            experience=experience,
            skills=skills,
            summary=summary,
            additional_info=additional_info,
            languages=languages,
            job=job,
            is_tailored=is_tailored
        )

        saved_resume = Resume.objects.create(
            user=None,
            job_title=job.get("title") if job else None,
            company=job.get("company") if job else None,
            content=resume_content
        )

        return Response({
            "resume": resume_content,
            "resume_id": saved_resume.id
        })

    except Throttled:
        return Response(
            {"error": "Rate limit exceeded. Please try again later."},
            status=429
        )



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_resume(request, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id, user=request.user)
    except Resume.DoesNotExist:
        return Response({'error': 'Resume not found'}, status=404)

    serializer = ResumeSerializer(resume)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])  # <-- allow public access
def download_resume_pdf(request, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id)  # <-- no user filtering
    except Resume.DoesNotExist:
        return Response({'error': 'Resume not found'}, status=404)

    pdf_file = generate_resume_pdf(resume.content)
    filename = f"{resume.job_title or 'resume'}_{resume.company or 'general'}.pdf".replace(" ", "_")

    return FileResponse(pdf_file, as_attachment=True, filename=filename)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_resumes(request):
    resumes = Resume.objects.filter(user=request.user).order_by('-created_at')
    serializer = ResumeSerializer(resumes, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_resume(request, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id, user=request.user)
        resume.delete()
        return Response(status=204)
    except Resume.DoesNotExist:
        return Response({'error': 'Resume not found'}, status=404)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_resumes(request):
    query = Resume.objects.filter(user=request.user)

    company = request.GET.get('company')
    if company:
        query = query.filter(company__icontains=company)

    serializer = ResumeSerializer(query.order_by('-created_at'), many=True)
    return Response(serializer.data)

@api_view(['GET'])
@throttle_classes([ResumeRateThrottle])
def check_resume_quota(request):
    return Response({"message": "You still have quota available."})

@api_view(['POST'])
@permission_classes([AllowAny])
@throttle_classes([ResumeRateThrottle])
@csrf_exempt  # optional for MVP
def submit_resume_form(request):
    name = request.data.get('name')
    email = request.data.get('email')  # optional use
    experience = request.data.get('experience')
    skills = request.data.get('skills', '')
    job = request.data.get('job', {})
    is_tailored = request.data.get('is_tailored', False)

    if not all([name, experience]):
        return Response({"error": "Name and experience are required."}, status=400)

    try:
        resume_content = generate_resume(
            name=name,
            experience=experience,
            skills=skills,
            job=job,
            is_tailored=is_tailored
        )

        saved_resume = Resume.objects.create(
            user=None,  # anonymous
            job_title=job.get("title") if job else None,
            company=job.get("company") if job else None,
            content=resume_content
        )

        return Response({
            "resume": resume_content,
            "resume_id": saved_resume.id
        })

    except Throttled:
        return Response(
            {"error": "Rate limit exceeded. Please try again later."},
            status=429
        )


from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import parser_classes
import PyPDF2

@api_view(['POST'])
@permission_classes([AllowAny])
@parser_classes([MultiPartParser, FormParser])
def improve_resume(request):
    uploaded_file = request.FILES.get('file')
    if not uploaded_file:
        return Response({"error": "No file uploaded."}, status=400)

    if uploaded_file.content_type != "application/pdf":
        return Response({"error": "Only PDF files are supported."}, status=400)

    try:
        reader = PyPDF2.PdfReader(uploaded_file)
        raw_text = " ".join([page.extract_text() or "" for page in reader.pages])
    except Exception as e:
        return Response({"error": f"Failed to read PDF: {str(e)}"}, status=400)

    # ✨ Call GPT to improve the resume
    from .gpt_resgen_api import improve_existing_resume
    improved = improve_existing_resume(raw_text)

    # Save improved version (optional)
    resume = Resume.objects.create(user=None, job_title=None, company=None, content=improved)

    return Response({
        "resume": improved,
        "resume_id": resume.id,
    })



from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from PyPDF2 import PdfReader

@csrf_exempt
@api_view(["POST"])
@permission_classes([AllowAny])
def grade_pdf(request):
    file = request.FILES.get("file")
    if not file:
        return Response({"error": "No file uploaded."}, status=400)

    try:
        reader = PdfReader(file)
        text = "\n".join(page.extract_text() for page in reader.pages if page.extract_text())

        # You can now analyze `text` or send it to OpenAI for feedback
        # For now we'll just echo a sample grade
        return Response({
            "grade": "B+",
            "feedback": "Well-structured, but try to be more concise and quantify your achievements.",
            "word_count": len(text.split())
        })
    except Exception as e:
        return Response({"error": str(e)}, status=500)
