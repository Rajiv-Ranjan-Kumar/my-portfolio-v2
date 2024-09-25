# config/settings/production.py
from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
SECRET_KEY = config('SECRET_KEY')


# Ensure SECRET_KEY is always set
RED = '\033[91m'
RESET = '\033[0m'

if not SECRET_KEY:
    raise ValueError(f"{ RED }The SECRET_KEY setting must not be empty.{ RESET }")


DEBUG = False


ALLOWED_HOSTS = [config('ALLOWED_HOSTS'),'*']


# For static files of admin panel
INSTALLED_APPS = INSTALLED_APPS + [
    "whitenoise.runserver_nostatic",
    'corsheaders',
]


# For static files of admin panel
MIDDLEWARE = MIDDLEWARE + [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]


# Database settings for production (PostgreSQL)
DATABASES = {
    "default": {
        "ENGINE" : 'django.db.backends.postgresql',
        "NAME": config('DB_NAME'),
        "USER": config('DB_USER'),
        "PASSWORD": config('DB_PASSWORD'),
        "HOST": config('DB_HOST'),
        "PORT": config('DB_PORT'),
        'OPTIONS': {
            'sslmode': 'require',
        },
    }
}


# Super User releted work
SUPER_USER_NAME = config('SUPER_USER_NAME')
SUPER_USER_EMAIL = config('SUPER_USER_EMAIL')
SUPER_USER_PASSWORD = config('SUPER_USER_PASSWORD')