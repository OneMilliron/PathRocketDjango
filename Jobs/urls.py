from django.urls import path
from . import views
from .views import JobListView

urlpatterns = [
    path('', views.home, name='home'),
    path('all/', JobListView.as_view(), name='job-list'),
]
