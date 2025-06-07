from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['title', 'company', 'location', 'description', 'salary_min', 'salary_max', 'redirect_url', 'created_at']
