from django.shortcuts import render
from .models import *

# Create your views here.

def index(request):
    Asd = asd.objects.all()
    context = {
        'Asd': Asd
    }
    return render(request, 'index.html',context)