from django.shortcuts import render
from myapp.models import student
from rest_framework.viewsets import ModelViewSet
from .serializers import StudentSerializer
# Create your views here.
from django.http import HttpResponse
def sayhello(request):
    return HttpResponse("Hello Django!")

def djget(request):
    name=request.GET['name']
    city=request.GET['city']
    return render(request,'djget.html',locals())

def djpost(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        if username=='david' and password=='1234':
            return HttpResponse('歡迎光臨本網站')
        else:
            return HttpResponse('帳號或密碼錯誤')
    else:
        return render(request,"djpost.html",locals())


def list(request):
    students=student.objects.all().order_by('id')
    return render(request,'list.html',locals())


class StudentViewSet(ModelViewSet):
    queryset = student.objects.all().order_by("id")
    serializer_class = StudentSerializer