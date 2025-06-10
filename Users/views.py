from django.http import JsonResponse
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.models import User
from django.core.mail import send_mail

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .serializers import RegisterSerializer, UserProfileSerializer
from .utils import generate_confirmation_link


@api_view(['GET'])
def home(request):
    return JsonResponse({"message": "Welcome to Users API"})


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()

        # Generate activation link
        domain = request.get_host()
        activation_link = generate_confirmation_link(user, domain)

        # Send email
        send_mail(
            subject="Activate Your PathRocket Account",
            message=f"Click the link to activate your account:\n\n{activation_link}",
            from_email="info@yourdomain.com",  # replace with your verified email
            recipient_list=[user.email],
            fail_silently=False,
        )

        return Response({'message': 'User created. Please check your email to activate your account.'}, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_profile_view(request):
    profile = request.user.userprofile

    if request.method == 'GET':
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


@api_view(['GET'])
@permission_classes([AllowAny])
def activate_user(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)
    except (User.DoesNotExist, ValueError, TypeError):
        return Response({"error": "Invalid activation link."}, status=400)

    if default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return Response({"message": "Account activated successfully."})
    else:
        return Response({"error": "Invalid or expired token."}, status=400)


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['user_id'] = self.user.id
        data['email'] = self.user.email
        return data


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
