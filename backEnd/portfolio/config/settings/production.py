# config/settings/production.py
from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
SECRET_KEY = os.getenv('SECRET_KEY')


# Ensure SECRET_KEY is always set
RED = '\033[91m'
RESET = '\033[0m'

if not SECRET_KEY:
    raise ValueError(f"{ RED }The SECRET_KEY setting must not be empty.{ RESET }")


DEBUG = True


ALLOWED_HOSTS = [os.getenv('ALLOWED_HOSTS')]


# For static files of admin panel
INSTALLED_APPS = INSTALLED_APPS + [
    "whitenoise.runserver_nostatic",
]


# For static files of admin panel
MIDDLEWARE = MIDDLEWARE + [
    "whitenoise.middleware.WhiteNoiseMiddleware",
]


# Database settings for production (PostgreSQL)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.getenv('DB_NAME'),
        "USER": os.getenv('DB_USER'),
        "PASSWORD": os.getenv('DB_PASSWORD'),
        "HOST": os.getenv('DB_HOST'),
        "PORT": os.getenv('DB_PORT'),
    }
}


# Static and media files for production
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


# For static files of admin panel
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CSRF_TRUSTED_ORIGINS = ['https://my-portfolio-v2-production.up.railway.app']