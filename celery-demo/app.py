from flask import Flask, jsonify
import models
from celery.result import AsyncResult
from worker import celery_init_app
from tasks import sum, get_first_user

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///test.sqlite3"
models.db.init_app(app)
celery_app = celery_init_app(app)

with app.app_context():
    models.db.create_all()
    u1 = models.User(name="user1")
    models.db.session.add(u1)
    models.db.session.commit()

@app.get('/num1/<int:a>/num2/<int:b>')
def start_sum(a, b):
    t = sum.delay(a, b)
    return str(t.id)

@app.get('/result/<id>')
def get_result(id):
    res = AsyncResult(id)
    return jsonify({"is_ready": res.ready(), "result": res.result})

@app.get('/user')
def get_user():
    u = get_first_user.delay()
    return u.id




if __name__ == '__main__':
    app.run(debug=True)