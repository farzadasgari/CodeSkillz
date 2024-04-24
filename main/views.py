from django.shortcuts import render
from .forms import MainForm


def panel_configs(request):
    forms = MainForm()
    return render(request, 'panel/main/configs.html', {'forms': forms})
