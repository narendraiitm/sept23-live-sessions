from time import sleep
from celery import Celery, Task

def celery_init_app(app):
    class FlaskTask(Task):
        def __call__(self, *args: object, **kwargs: object) -> object:
            with app.app_context():
                return self.run(*args, **kwargs)

    celery_app = Celery(app.name, task_cls=FlaskTask)
    celery_app.config_from_object("celeryconfig")
    return celery_app


# @cel.task
# def say_hello():
#     sleep(30)
#     return "hello"

# @cel.task
# def sum(a, b):
#     return a+b
