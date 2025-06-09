# coverletters/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # basic home route

    # Generate and auto-save a new letter
    path('generate/', views.CoverLetterGeneratorView.as_view(), name='generate_cover_letter'),

    # Save a letter manually (if needed separately)
    path('save/', views.save_cover_letter, name='save_cover_letter'),

    # Get one saved letter
    path('<int:letter_id>/', views.get_cover_letter, name='get_cover_letter'),

    # Download PDF of one saved letter
    path('<int:letter_id>/download/', views.download_cover_letter_pdf, name='download_cover_letter_pdf'),

    # List all saved letters for the logged-in user
    path('my/', views.list_cover_letters, name='list_cover_letters'),
]
