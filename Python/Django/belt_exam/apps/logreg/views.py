# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import User

def log_reg(request):
    if request.method == 'POST':
        if request.POST['foo'] == 'register':
            response = User.objects.check_create(request.POST)
            foo = 'registered'
        elif request.POST['foo'] == 'login':
            response = User.objects.check_log(request.POST)
            foo = 'logged in'
        if not response[0]:
            for message in response[1]:
                messages.error(request, message[1])
            return redirect('belt:index')
        else:
            request.session['user'] = {
            'id': response[1].id,
            'first_name': response[1].first_name,
            'last_name': response[1].last_name
            }
            messages.success(request, 'Successfully ' + foo + '!')
            return redirect('belt:books')
    return redirect('belt:index')

def logout(request):
    request.session.clear()
    return redirect('belt:index')
