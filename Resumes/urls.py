# users/urls.py
from django.urls import path
from .views import generate_resume_view, get_resume, download_resume_pdf
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('generate-resume/', generate_resume_view),
    path('resume/<int:resume_id>/', get_resume, name='get_resume'),
    path('resume/<int:resume_id>/download/', download_resume_pdf, name='download_resume_pdf'),
    path('resumes/my/', views.list_resumes, name='list_resumes'),
    path('resume/<int:resume_id>/delete/', views.delete_resume, name='delete_resume'),


]
