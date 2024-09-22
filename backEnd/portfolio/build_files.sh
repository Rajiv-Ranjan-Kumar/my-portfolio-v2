#!/bin/bash

echo "BUILD START"

# Install dependencies
python3.12 -m pip install -r requirements.txt

# Run database migrations
python3.12 manage.py migrate

# Collect static files
python3.12 manage.py collectstatic --noinput --clear

echo "BUILD END"
