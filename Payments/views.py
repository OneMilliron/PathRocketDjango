# payments/views.py
import stripe
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_checkout_session(request):
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'usd',
                'unit_amount': 499,  # $4.99
                'product_data': {
                    'name': 'Tailored Resume PDF',
                },
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url='http://localhost:8000/payments/success',
        cancel_url='http://localhost:5173/cancel',
        customer_email=request.user.email,
    )
    return Response({'checkout_url': session.url})


from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import stripe
import os
import json

@csrf_exempt
def stripe_webhook(request):
    print("👀 Webhook view called")
    payload = request.body
    sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
    from django.conf import settings
    endpoint_secret = settings.STRIPE_WEBHOOK_SECRET

    print("💡 Using secret:", endpoint_secret)


    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError:
        print("⚠️ Invalid payload")
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError:
        print("⚠️ Invalid signature")
        return HttpResponse(status=400)

    # ✅ Now this works:
    print(f"🎯 Received event: {event['type']}")

    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        print(f"✅ Checkout session completed for: {session['id']}")

    return HttpResponse(status=200)

from django.http import HttpResponse

def payment_success(request):
    return HttpResponse("<h1>✅ Payment Successful!</h1><p>Your resume will be emailed shortly.</p>")
