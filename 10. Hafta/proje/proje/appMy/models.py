from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    title = models.CharField(("Kategori Adı"), max_length=50)
    def __str__(self) -> str:
        return self.title

class Post(models.Model):
    user = models.ForeignKey(User, verbose_name=("Kullanıcı"), on_delete=models.CASCADE,null=True,blank=True)
    title = models.CharField(("Post Başlık"), max_length=50)
    postText = models.TextField(("Post İçerik"))
    postImg = models.ImageField((""), upload_to=None, height_field=None, width_field=None, max_length=None, null=True, blank=True)
    postTime = models.DateTimeField((""), auto_now=False, auto_now_add=True, null=True, blank=True)
    category = models.ForeignKey(Category, verbose_name=("Kategoriler"), on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self) -> str:
        return self.title
    
class Comment(models.Model):
    user = models.ForeignKey(User, verbose_name=("Kullanıcı"), on_delete=models.CASCADE,null=True,blank=True)
    postComment = models.ForeignKey(Post, verbose_name=(""), on_delete=models.CASCADE, null=True, blank=True)
    comment = models.TextField(("Yorum"))
    commentTime = models.DateTimeField((""), auto_now=False, auto_now_add=True, null=True, blank=True)
    
class Profil(models.Model):
    user = models.ForeignKey(User, verbose_name=("Kullanici"), on_delete=models.CASCADE,null=True,blank=True)
    profileImg = models.ImageField(upload_to='profile_images/', height_field=None, width_field=None, max_length=None,default='default-profile-pictures/default-avatar-icon-of-social-media-user-vector.jpg', null=True, blank=True)
