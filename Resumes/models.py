from django.db import models
from django.contrib.auth.models import User

class Resume(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='resumes')
    job_title = models.CharField(max_length=255, blank=True, null=True)
    company = models.CharField(max_length=255, blank=True, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Resume for {self.user.username} ({self.job_title or 'Untitled'})"

