#!/bin/bash

echo "BUILD START"

# Install dependencies
python3.12 -m pip install -r requirements.txt

# Run database migrations
python3.12 manage.py migrate

# Call custom command to create superuser
python3.12 manage.py create_superuser

# Collect static files
python3.12 manage.py collectstatic --noinput --clear

echo "BUILD END"
