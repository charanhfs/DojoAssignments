# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def test(request):
    return render(request,"testimonials.html")

def about_me(request):
    return render(request,"aboutMe.html")

def projects(request):
    return render(request,"projects.html")
