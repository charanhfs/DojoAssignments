from __future__ import unicode_literals
from django.contrib import messages
from django.db.models import Count
from django.shortcuts import render, redirect
from .models import Book, Author, Review
from ..logreg.models import User

def index(request):
    return render(request, 'belt/index.html')

def books(request):
    context = {
    'books': Book.objects.all(),
    'reviews': Review.objects.all()
    }
    return render(request, 'belt/books.html', context)

def addbook(request):
    context = {
    'authors': Author.objects.all()
    }
    return render(request, 'belt/addbook.html', context)

def newbook(request):
    if request.method == 'POST':
        response = Book.objects.check_create(request.POST, request.session['user']['id'])
        if not response[0]:
            for message in response[1]:
                messages.error(request, message[1])
            return redirect('belt:addbook')
        else:
            return redirect('belt:book', id=response[1].id)
    return redirect('belt:addbook')

def newreview(request):
    page = request.META['HTTP_REFERER']
    print page
    if request.method == 'POST':
        response = Review.objects.check_create(request.POST, user=User.objects.get(id=request.session['user']['id']))
        if not response[0]:
            for message in response[1]:
                messages.error(request, message[1])
                return redirect(page)
    return redirect(page)

def book(request, id):
    context = {
    'id': id,
    'book': Book.objects.get(id=id),
    'userObj': User.objects.get(id=request.session['user']['id'])
    }
    return render(request, 'belt/book.html', context)

def user(request, id):
    context = {
    'id': id,
    'user': User.objects.get(id=id)
    }
    return render(request, 'belt/user.html', context)

def delete(request, id):
    Review.objects.filter(id=id).delete()
    return redirect('belt:books')
