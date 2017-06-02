# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Course
# Create your views here.
def index(request):
    context = {
        "courses": Course.objects.all().order_by('name'),
    }
    return render(request, 'course/index.html', context)

def add_course(request):
    if request.method == "POST":
        response = Course.objects.check_create(request.POST)
    if not response[0]:
        for error in response[1]:
            messages.error(request, error[1])
    return redirect('course:index')

def destroy(request, id):
    context = {
        "course": Course.objects.get(id=id),
    }
    return render(request, 'course/destroy.html', context)

def course_delete(request, id):
    Course.objects.get(id=id).delete()
    return redirect('course:index')
