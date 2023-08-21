from django.shortcuts import render
from .models import *

# Create your views here.

def index(request):
    post_tag = Post.objects.all()
    context = {
        'post_tag': post_tag
    }
    
    return render (request, 'index.html',context)

    