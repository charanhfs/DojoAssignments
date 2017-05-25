# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

def index(request):
    return render(request, 'vinmyMVC/index.html')

def show(request):
    print(request.method)
    return render(request, 'vinmyMVC/show_users.html')

def create(request):
    if request.method == "POST":
    	print request.POST
    	print "*"*20
        request.session['name'] = request.POST['first_name']
    	return redirect("/")
    else:
    	return redirect("/")
