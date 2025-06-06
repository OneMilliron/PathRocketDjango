from django.http import HttpResponse
from rest_framework.exceptions import Throttled

def home(request):
    return HttpResponse("Welcome to the Users app!")

#AI Resume Generator For Basic
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .gpt_resgen_api import generate_resume
from rest_framework.decorators import throttle_classes
from rest_framework.throttling import UserRateThrottle
class ResumeRateThrottle(UserRateThrottle):
    scope = 'resume_generation'


from django.http import FileResponse
from .utils.pdf import generate_resume_pdf

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@throttle_classes([ResumeRateThrottle])
def generate_resume_view(request):
    profile = request.user.userprofile
    job = request.data.get('job')
    is_tailored = request.data.get('is_tailored', False)
    download_pdf = request.data.get('download_pdf', False)

    try:
        resume = generate_resume(profile, job=job, is_tailored=is_tailored)

        if download_pdf:
            pdf_file = generate_resume_pdf(resume)
            return FileResponse(pdf_file, as_attachment=True, filename='resume.pdf')

        return Response({"resume": resume})

    except Throttled:
        return Response(
            {"error": "Rate limit exceeded. You can only generate 3 resumes per day."},
            status=429
        )

