from django.shortcuts import render, redirect
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate

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
        comn.save()

        return redirect('detay' + id + '/')
    context = {
        'post_tag' : post_tag,
        'category' : category,
        'comment' : comment
    }
    
    return render(request, 'detail.html', context)

def register(request):
    
    if request.method == 'POST':
        name = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']
        
        if password == password2:
            if User.objects.filter(username = name).exists(): #? exist veri tabanında sorgu yaparak gelen bilgileri name ile usernameyi karşılaştımasını yapar.
                context = {
                    'information' : 'Bu kullanıcı adı kullanılmaktadır, Farklı bir kullanıcı adı giriniz.'
                }
                
                return render (request, 'register.html', context)
            if User.objects.filter(email = email).exists():
                context = {
                    'information' : 'Bu email zaten kullanılıyor, farklı bir email giriniz'
                }
            else:
                user = User.objects.create_user(username=name, email=email, first_name=name, last_name=lastname, password=password)
                user.save()
                return redirect('/')
        else:
            context = {
                'information' : 'Parolalar uyuşmuyor tekrar deneyin'
            }
            return render (request, 'register.html', context)
                
    
    return render(request,'register.html') 


def loginn(request):
    
    if request.method == "POST":
        name = request.POST['firstname']
        password = request.POST['password']
    
        user = authenticate(request, username=name, password=password)
        
        if user is not None:
            login(request,user)
            return redirect('anasayfa')
        else:
            context = {
                'information' : 'Girniş olduğunuz email veya parola hatalı.'
            }
            
            return render(request, 'login.html', context) 
    
    return render(request,'login.html')   

def logoutt(request):
    logout(request)
    
    return redirect('anasayfa')

def profile(request):
    
    context = {
    'categories' : Category.objects.all()
        
    }
    
    if request.method == "POST" and 'kaydet' in request.POST:
        user = request.user
        user.first_name = request.POST['firstname']
        user.last_name = request.POST['lastname']
        user.email = request.POST['email']
        
        user.save()
        
    if request.method == "POST" and 'post' in request.POST:
        title = request.POST['title']
        postText = request.POST['postText']
        postImg = request.FILES['postImg']
        category_id = request.POST['category']
        
        post = Post(title=title,postText=postText,postImg=postImg,category=category_id)
        post.save()
        
        return redirect('/')
    
    return render(request, 'profile.html', context)
