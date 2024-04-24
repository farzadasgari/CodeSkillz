from django.urls import re_path
from .views import panel
from main.views import panel_configs


urlpatterns = [
    re_path(r'^$', panel, name='panel'),
    re_path(r'^basics/configs/$', panel_configs, name='panel_configs'),
]
