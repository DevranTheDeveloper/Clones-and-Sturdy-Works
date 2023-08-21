from django.db import models

# Create your models here.

class Category(models.Model):
    title = models.CharField(("Kategori Adı"), max_length=50)
    def __str__(self) -> str:
        return self.title

class Post(models.Model):
    title = models.CharField(("Post Başlık"), max_length=50)
    postText = models.TextField(("Post İçerik"))
    postImg = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None, null=True, blank=True)
    postTime = models.DateTimeField((""), auto_now=False, auto_now_add=False, null=True, blank=True)
    category = models.ForeignKey(Category, verbose_name=("Kategoriler"), on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self) -> str:
        return self.title
    