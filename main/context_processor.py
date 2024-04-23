from .models import Main


def main_details(request):
    main = Main.objects.reverse()[0]
    context = {
        'main': main,
    }
    return context
