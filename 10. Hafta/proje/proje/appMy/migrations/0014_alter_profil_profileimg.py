# Generated by Django 3.2.20 on 2023-08-24 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appMy', '0013_alter_profil_profileimg'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profil',
            name='profileImg',
            field=models.ImageField(blank=True, default='default-profile-pictures/default-avatar-icon-of-social-media-user-vector.jpg', null=True, upload_to='profile_images/'),
        ),
    ]