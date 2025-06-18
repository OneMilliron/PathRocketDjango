from django.urls import path
from .views import (
    home,
    get_resume,
    download_resume_pdf,
    submit_resume_form,
    generate_resume_view,  # ✅ use the view, not the text generator
    list_resumes,
    delete_resume,
    check_resume_quota
)

urlpatterns = [
    path('', home, name='home'),
    path('api/generate-resume/', generate_resume_view, name='generate_resume_view'),  # ✅ fixed
    path('api/submit-resume-form/', submit_resume_form, name='submit_resume_form'),
    path('resume/<int:resume_id>/', get_resume, name='get_resume'),
    path('resume/<int:resume_id>/download/', download_resume_pdf, name='download_resume_pdf'),
    path('resumes/my/', list_resumes, name='list_resumes'),
    path('resume/<int:resume_id>/delete/', delete_resume, name='delete_resume'),
    path('api/check-quota/', check_resume_quota, name='check_resume_quota'),
]

