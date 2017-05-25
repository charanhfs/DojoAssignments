# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Book

# Create your views here.
def index(request):
  books = Book.objects.all()
  context = {"books": books}
  return render(request, "books/index.html", context)
