from django import forms
from .models import Main


class MainForm(forms.ModelForm):
    class Meta:
        model = Main
        exclude = ['logo_image', 'logo_image_url', 'light_logo', 'light_logo_url', 'dark_logo', 'dark_logo_url',
                   'favicon', 'favicon_url']

    logo_image = forms.ImageField()
    light_logo = forms.ImageField()
    dark_logo = forms.ImageField()
    favicon = forms.ImageField()
