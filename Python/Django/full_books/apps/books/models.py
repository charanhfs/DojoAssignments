# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class BookManager(models.Manager):
    def create(self, data):
        errors = []
        if len(data['title']) < 2:
            errors.append(['title', "title must be longer than 1 letter"])
        if len(data['author']) < 2:
            errors.append(['author', "author must be longer than 1 letter"])
        if len(data['category']) < 2:
            errors.append(['category', "category must be longer than 1 letter"])
        if errors:
            return [False, errors]
        else:
            newBook = Book(title=data['title'], author=data['author'], category=data['category'])
            newBook.save()
            return [True, newBook]

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=80)
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = BookManager()
