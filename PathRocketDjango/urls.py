from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('users/', include('Users.urls')),
    path('jobs/', include('Jobs.urls')),
    path('resumes/', include('Resumes.urls')),
    path('coverletters/', include('Coverletters.urls')),
    #path('chatbot/', include('ChatBot.urls')),
]
