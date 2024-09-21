from django.urls import path
from .api.routers import api

urlpatterns = [
    path('api/', api.urls),
]
