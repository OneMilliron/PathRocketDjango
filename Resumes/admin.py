from django.contrib import admin
from .models import Resume

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'job_title', 'company', 'created_at')
    list_filter = ('created_at', 'company')
    search_fields = ('user__username', 'job_title', 'company', 'content')
