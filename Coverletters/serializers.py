# serializers.py
from rest_framework import serializers
from .models import CoverLetter

class CoverLetterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoverLetter
        fields = ['id', 'user', 'job_title', 'company', 'content', 'created_at']
        read_only_fields = ['id', 'created_at', 'user']
