# Generated by Django 3.0.6 on 2020-05-29 14:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message_text', models.CharField(blank=True, default='', max_length=100)),
                ('date_sent', models.DateTimeField(auto_now_add=True)),
                ('message_sender', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('target_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.Group', to_field='groupid')),
            ],
            options={
                'ordering': ['-date_sent'],
            },
        ),
        migrations.CreateModel(
            name='OnlineUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_joined', models.DateTimeField(auto_now_add=True)),
                ('joined_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='groups.Group', to_field='groupid')),
                ('online_user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['data_joined'],
                'unique_together': {('joined_group', 'online_user')},
            },
        ),
    ]
