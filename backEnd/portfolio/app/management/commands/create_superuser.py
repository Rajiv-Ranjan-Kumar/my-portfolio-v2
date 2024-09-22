from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from config.settings.production import SUPER_USER_NAME, SUPER_USER_EMAIL, SUPER_USER_PASSWORD

class Command(BaseCommand):
    help = 'Create a superuser with predefined credentials'

    def handle(self, *args, **options):
        User = get_user_model()
        username = SUPER_USER_NAME
        email = SUPER_USER_EMAIL
        password = SUPER_USER_PASSWORD

        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS('Superuser created successfully'))
        else:
            self.stdout.write(self.style.WARNING('Superuser already exists'))
