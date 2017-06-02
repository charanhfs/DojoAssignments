from django.conf.urls import url
from . import views


app_name = "books"

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^insert$', views.insert, name = 'insert'),
]
