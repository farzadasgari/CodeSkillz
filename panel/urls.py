from django.urls import re_path
from .views import panel

urlpatterns = [
    re_path(r'', panel, name='panel')
]
