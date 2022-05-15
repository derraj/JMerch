from django.db.models.signals import pre_save
from django.contrib.auth.models import User


# sender = object that sends signal
# instance = actual object being sent
# this signal sets the username to the email
def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email


pre_save.connect(updateUser, sender=User)