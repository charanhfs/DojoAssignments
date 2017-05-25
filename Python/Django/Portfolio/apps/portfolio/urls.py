from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^test$', views.test),
    url(r'^about_me$', views.about_me),
    url(r'^projects$', views.projects)

]
