from django.http import HttpResponse, FileResponse
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle
from rest_framework.exceptions import Throttled
from .gpt_resgen_api import generate_resume
from .utils.pdf import generate_resume_pdf
from .models import Resume
from .serializers import ResumeSerializer

# Throttle class (3 per day or your custom setting)
class ResumeRateThrottle(UserRateThrottle):
    scope = 'resume_generation'


def home(request):
    return HttpResponse("Welcome to the Users app!")


@api_view(['POST'])
@permission_classes([IsAuthenticated])
@throttle_classes([ResumeRateThrottle])
def generate_resume_view(request):
    profile = request.user.userprofile
    job = request.data.get('job')
    is_tailored = request.data.get('is_tailored', False)
    download_pdf = request.data.get('download_pdf', False)

    try:
        resume_content = generate_resume(profile, job=job, is_tailored=is_tailored)

        job_title = job.get('title') if job else None
        company = job.get('company') if job else None

        saved_resume = Resume.objects.create(
            user=request.user,
            job_title=job_title,
            company=company,
            content=resume_content
        )

        if download_pdf:
            pdf_file = generate_resume_pdf(resume_content)
            return FileResponse(pdf_file, as_attachment=True, filename='resume.pdf')

        return Response({
            "resume": resume_content,
            "resume_id": saved_resume.id
        })

    except Throttled:
        return Response(
            {"error": "Rate limit exceeded. You can only generate 3 resumes per day."},
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
@permission_classes([IsAuthenticated])
def download_resume_pdf(request, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id, user=request.user)
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
@permission_classes([IsAuthenticated])
@throttle_classes([ResumeRateThrottle])
def check_resume_quota(request):
    return Response({"message": "You still have quota available."})
