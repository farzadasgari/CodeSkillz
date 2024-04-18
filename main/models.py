from __future__ import unicode_literals
from django.db import models


class Main(models.Model):
    class Meta:
        verbose_name_plural = 'main_detail'

    website_title = models.CharField(max_length=30, blank=True)
    browser_title = models.CharField(max_length=30, blank=True)
    panel_title = models.CharField(max_length=30, blank=True)
    logo_image = models.CharField(max_length=30, blank=True)
    logo_image_url = models.TextField(blank=True)
    favicon = models.CharField(max_length=30, blank=True)
    favicon_url = models.TextField(blank=True)
    copyright = models.TextField(blank=True)

    def __str__(self):
        return self.website_title
