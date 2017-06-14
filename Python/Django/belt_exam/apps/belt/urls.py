from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'), # login or register
    url(r'^books/', views.books, name='books'), # home page
    url(r'^addbook/', views.addbook, name='addbook'), # page with 'add book' form
    url(r'^newbook/', views.newbook, name='newbook'), # add book and review
    url(r'^newreview/', views.newreview, name='newreview'), # add review to existing book
    url(r'^book/(?P<id>\d+)*$', views.book, name='book'), # book detail page
    url(r'^user/(?P<id>\d+)*$', views.user, name='user'), # user detail page
    url(r'^delete/(?P<id>\d+)*$', views.delete, name='delete'), # delete a review
]
