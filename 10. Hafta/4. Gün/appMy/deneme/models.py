from typing import Any
from django.db import models

# Create your models here.

class asd(models.Model):
    title = models.CharField(("Başlık"), max_length=50)
    text = models.TextField(("Ayrıntılar"))
    def __str__(self) -> str:
        return self.title