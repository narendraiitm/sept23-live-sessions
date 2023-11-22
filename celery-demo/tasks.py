from celery import shared_task
from models import User


@shared_task(ignore_result=False)
def sum(a,b):
    return a+b

@shared_task(gnore_result=False)
def get_first_user():
    user = User.query.get(1)
    return user.name