# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..logreg.models import User

class BookManager(models.Manager):
    def check_create(self, data, id):
        errors = []
        user = User.objects.get(id=id)
        book_exists = Book.objects.filter(title=data['title'])
        if len(data['title']) < 2:
            errors.append(['book', 'Title must be at least two characters.'])
        if len(data['review']) < 8:
            errors.append(['review', 'Review must be at least eight characters.'])
        if book_exists:
            errors.append(['book', 'Book already exists.'])
        if data['author_select'] == 'select':
            if len(data['author_name_input']) < 2:
                errors.append(['author', 'Please enter an author name.'])
            else:
                newAuthor = Author(name=data['author_name_input'])
                newAuthor.save()
                author=Author.objects.get(name=data['author_name_input'])
        else:
            author = Author.objects.get(name=data['author_select'])
        if errors:
            return [False, errors]
        else:
            newBook = Book(title=data['title'], author=author)
            newBook.save()
            newReview = Review(review=data['review'], stars=data['stars'], user=user, book_id=Book.objects.get(title=data['title']))
            newReview.save()
            return [True, newBook]

class Book(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    author = models.ForeignKey('Author', related_name='book_author')
    def get_book_reviewers(self):
        return User.objects.filter(review_user__book_id=self)

    objects = BookManager()

class Author(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class ReviewManager(models.Manager):
    def check_create(self, data, user):
        errors = []
        if len(data['review']) < 8:
            errors.append(['review', 'Review must be at least eight characters.'])
        if errors:
            return [False, errors]
        else:
            newReview = Review(review=data['review'], stars=data['stars'], user=user, book_id=Book.objects.get(id=data['book_id']))
            newReview.save()
            return [True]

class Review(models.Model):
    review = models.TextField(max_length=1000)
    stars = models.IntegerField()
    user = models.ForeignKey('logreg.User', related_name='review_user')
    book_id = models.ForeignKey('Book', related_name='review_book')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = ReviewManager()
