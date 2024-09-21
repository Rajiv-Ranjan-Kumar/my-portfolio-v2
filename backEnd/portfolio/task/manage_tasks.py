#!/usr/bin/env python
"""Utility for running migrations and collecting static files."""
import os
from django.core.management import call_command
from django import setup

# Color codes for terminal output
GREEN = '\033[92m'
RED = '\033[91m'
RESET = '\033[0m'


def run_migrations_and_collect_static():
    """Run migrations and collect static files."""
    try:
        # Initialize Django setup
        setup()

        # Call the makemigrations and migrate commands
        call_command('makemigrations')
        call_command('migrate')

        # Collect static files, useful in production environment
        print(f"{GREEN}Collecting static files...{RESET}")
        call_command('collectstatic', '--noinput')

        print(f"{GREEN}Migrations and static file collection complete.{RESET}")

    except Exception as e:
        print(f"{RED}Error during migrations or static file collection: {e}{RESET}")

if __name__ == '__main__':
    run_migrations_and_collect_static()
