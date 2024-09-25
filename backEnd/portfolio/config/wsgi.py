"""
WSGI config for portfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
from decouple import config
from django.core.wsgi import get_wsgi_application

# Set environment to 'development' by default
environment = 'development'

# Check if the 'IS_PRODUCTION' environment variable is set to 'True'
if config('IS_PRODUCTION', 'False') == 'True':
    environment = 'production'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'config.settings.{environment}')

application = get_wsgi_application()

app = application