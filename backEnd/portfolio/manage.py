#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from dotenv import load_dotenv

# Load the .env file
load_dotenv()


def main():
    """Run administrative tasks."""
    # Set environment to 'development' by default
    environment = 'development'

    # Check if the 'IS_PRODUCTION' environment variable is set to 'True'
    if os.getenv('IS_PRODUCTION', 'False') == 'True':
        environment = 'production'

    # Set the DJANGO_SETTINGS_MODULE based on the environment
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'config.settings.{environment}')

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    

    # Check if the first argument is 'runserver'
    if len(sys.argv) > 1 and sys.argv[1] == 'runserver':
        # Import the custom task script and run it
        from task.manage_tasks import run_migrations_and_collect_static
        run_migrations_and_collect_static()


    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
