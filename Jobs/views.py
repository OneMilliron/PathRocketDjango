from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Jobs app!")

from rest_framework.generics import ListAPIView
from .models import Job
from .serializers import JobSerializer

class JobListView(ListAPIView):
    queryset = Job.objects.all().order_by("-date_posted")
    serializer_class = JobSerializer
