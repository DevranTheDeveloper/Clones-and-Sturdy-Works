from django.shortcuts import render, redirect
from .models import *

# Create your views here.

def index(request):
    post_tag = Post.objects.all()
    category = Category.objects.all()
    
    context = {
        'post_tag': post_tag,
        'category': category
    }
    return render (request, 'index.html',context)

def category(request, id):
    category = Category.objects.all()
    post_tag = Post.objects.filter(category=id)
    
    context = {
        'post_tag': post_tag,
        'category': category
    }
    return render(request,'category.html',context)
    
def detail(request, id):
    post_tag = Post.objects.get(id=id)
    category = Category.objects.all()
    comment = Comment.objects.filter(postComment=id)
    
    if request.method == "POST":
        comment = request.POST['comment'] #.get('comment') diye de kullanılır
        comn = Comment(comment=comment, postComment=post_tag)

        return redirect('detay' + id + '/')
    context = {
        'post_tag' : post_tag,
        'category' : category
    }
    
    return render(request, 'detail.html', context)

    