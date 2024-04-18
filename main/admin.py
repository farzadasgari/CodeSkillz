from django.contrib import admin
from .models import *


class NoDeleteAdminmixin:
    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(Main)
class MainAdmin(NoDeleteAdminmixin, admin.ModelAdmin):
    def has_add_permission(self, request):
        return not Main.objects.exists()
