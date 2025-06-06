# payments/urls.py
from django.urls import path
from .views import stripe_webhook, create_checkout_session, payment_success

urlpatterns = [
    path('webhook/', stripe_webhook, name='stripe-webhook'),
    path('create-checkout-session/', create_checkout_session, name='checkout-session'),
    path('success/', payment_success, name='payment-success'),  # 👈 add this
]
