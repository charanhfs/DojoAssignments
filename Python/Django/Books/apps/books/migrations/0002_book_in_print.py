# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-24 14:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='in_print',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
