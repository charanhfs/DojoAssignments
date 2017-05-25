# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
from datetime import datetime


def index(request):
  current_time = {
        'date_time': datetime.now(),
    }
  return render(request, 'index.html', current_time)
