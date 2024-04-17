from django.shortcuts import render


def panel(request):
    return render(request, 'panel/index.html')
