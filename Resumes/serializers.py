from rest_framework import serializers
from .models import Resume

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['id', 'user', 'job_title', 'company', 'content', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']
