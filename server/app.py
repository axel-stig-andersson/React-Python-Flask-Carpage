from flask import Flask
from flask import jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String)
    model = db.Column(db.String)
    description = db.Column(db.String)


def __repr__(self):
    return "<Car {}: {} {} {}".format(self.id, self.brand, self.model, self.description)


def serialize_car(self):
    return dict(
        id=self.id, brand=self.brand, model=self.model, description=self.description
    )


@app.route("/cars", methods=["GET", "POST"])
def test():
    if request.method == "GET":
        returned = []
        fetched = Car.query.all()
        for car in fetched:
            sc = serialize_car(car)
            returned.append(sc)
        return jsonify(returned)
    elif request.method == "POST":
        data = request.get_json()
        newCar = Car(
            brand=data["brand"], model=data["model"], description=data["description"]
        )
        db.session.add(newCar)
        db.session.commit()
        return jsonify(serialize_car(newCar))


if __name__ == "__main__":
    app.run(debug=True)
