# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
import string
import random

def index(request):
    request.session['random_word'] = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
    return render(request, 'index.html')
