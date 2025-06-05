from django.urls import path
from . import views
from .views import generate_resume_view

urlpatterns = [
    path('', views.home, name='home'),
    path('generate-resume/', generate_resume_view),
]
