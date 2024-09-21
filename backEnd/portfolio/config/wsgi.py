"""
WSGI config for portfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
from dotenv import load_dotenv  # Import load_dotenv to load the .env file

# Load the .env file
load_dotenv()

from django.core.wsgi import get_wsgi_application

# Set environment to 'development' by default
environment = 'development'

# Check if the 'IS_PRODUCTION' environment variable is set to 'True'
if os.getenv('IS_PRODUCTION', 'False') == 'True':
    environment = 'production'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'config.settings.{environment}')

application = get_wsgi_application()
