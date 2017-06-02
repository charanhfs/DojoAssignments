# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Book

# Create your views here.
def index(request):
    books = Book.objects.all()
    context = {
        'books': books,
    }
    return render(request, 'books/index.html', context)

def insert(request):
    if request.method == "POST":
        response = Book.objects.create(request.POST)
    if not response[0]:
        for error in response[1]:
            messages.error(request, error[1])
    return redirect('books:index')
