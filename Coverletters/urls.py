from django.urls import path
from .views import download_cover_letter_pdf
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('generate/', views.CoverLetterGeneratorView.as_view(), name='generate_cover_letter'),
    path('save/', views.save_cover_letter, name='save_cover_letter'),
    path('<int:letter_id>/', views.get_cover_letter, name='get_cover_letter'),
    path('<int:letter_id>/download/', download_cover_letter_pdf, name='download_cover_letter_pdf'),
    path('my/', views.list_cover_letters, name='list_cover_letters'),
    path('grade/', views.grade_uploaded_file, name='grade_uploaded_file'),  # ✅ New route
]
