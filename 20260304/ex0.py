from django.http import HttpResponse
def home(request):
    return HttpResponse("Hello CGU")


from django.contrib import admin
from django.urls import path
from hello_harriet import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home),
]
