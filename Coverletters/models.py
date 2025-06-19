from django.db import models
from django.contrib.auth.models import User

class CoverLetter(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    job_title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.job_title} at {self.company} ({self.user.username})"
