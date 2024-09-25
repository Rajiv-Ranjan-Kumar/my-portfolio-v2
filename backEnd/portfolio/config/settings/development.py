from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
SECRET_KEY ='django-insecure-tl&&jtx7ark7vuf4zk7b2_hox%zr1im)_+cs!hdjc%glcy#_r3'


DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Development-specific static file settings
STATICFILES_DIRS = BASE_DIR / 'static'