# Generated by Django 3.0.6 on 2020-05-29 14:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Friendship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('the_date', models.DateTimeField(auto_now_add=True)),
                ('who_follows', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='top', to=settings.AUTH_USER_MODEL)),
                ('who_is_followed', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bot', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['the_date'],
                'unique_together': {('who_follows', 'who_is_followed')},
            },
        ),
    ]
