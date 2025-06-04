# users/apps.py

from django.apps import AppConfig

class UsersConfig(AppConfig):  # match your app name
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Users'  # lowercase name as in your folder/app

    def ready(self):
        import Users.signals  # import inside the method, no 