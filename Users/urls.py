from django.urls import path
from . import views
from .views import user_profile_view, register_user, activate_user, CustomTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', register_user),
    path('me/', user_profile_view, name='user-profile'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('activate/<uidb64>/<token>/', activate_user),
]
