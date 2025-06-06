from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    url = models.URLField()
    description = models.TextField()
    date_posted = models.DateField()
    remote = models.BooleanField(default=False)
    source = models.CharField(max_length=100)  # e.g. "Remotive"
    priority_score = models.IntegerField(null=True, blank=True)  # Later use AI here
