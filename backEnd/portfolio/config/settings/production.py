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


# ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS').split(',')
# ALLOWED_HOSTS = ['127.0.0.1']
ALLOWED_HOSTS = ['my-portfolio-v2-pi.vercel.app']


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
        "NAME": os.getenv('DB_NAME'),
        "USER": os.getenv('DB_USER'),
        "PASSWORD": os.getenv('DB_PASSWORD'),
        "HOST": os.getenv('DB_HOST'),
        "PORT": os.getenv('DB_PORT'),
    }
}


# Ensure static files are collected in production
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')


# Super User releted work
SUPER_USER_NAME = os.getenv('SUPER_USER_NAME')
SUPER_USER_EMAIL = os.getenv('SUPER_USER_EMAIL')
SUPER_USER_PASSWORD = os.getenv('SUPER_USER_PASSWORD')


CORS_ORIGIN_ALLOW_ALL = True