from django.shortcuts import render


def panel_configs(request):
    return render(request, 'panel/main/configs.html')

