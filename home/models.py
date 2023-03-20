from django.conf import settings
from django.db import models
class Creator(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    identity = models.BigIntegerField(max_length=200,)
    age = models.IntegerField()
