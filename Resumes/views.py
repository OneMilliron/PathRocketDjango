from django.http import HttpResponse
from rest_framework.exceptions import Throttled

def home(request):
    return HttpResponse("Welcome to the Users app!")

#AI Resume Generator For Basic
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .gpt_resgen_api import generate_resume

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_resume_view(request):
    profile = request.user.userprofile
    job_data = request.data.get('job', {})

    try:
        resume = generate_resume(profile, job=job_data)
        return Response({'resume': resume})
    except Throttled as e:
        return Response(
            {"error": "Rate limit exceeded. You can only generate 3 resumes per day."},
            status=429
        )
