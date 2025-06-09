from django.contrib import admin
from django.urls import path, include

#def trigger_error(request):
    #division_by_zero = 1 / 0

urlpatterns = [
    path('admin/', admin.site.urls),

    path('users/', include('Users.urls')),
    path('jobs/', include('Jobs.urls')),
    path('resumes/', include('Resumes.urls')),
    path('coverletters/', include('Coverletters.urls')),
    #path('chatbot/', include('ChatBot.urls')),
    path('payments/', include('Payments.urls')),
    #path('sentry-debug/', trigger_error),

]
