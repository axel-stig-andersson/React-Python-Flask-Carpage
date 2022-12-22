from app import app, db, Car

app.app_context().push()
db.drop_all()
db.create_all()

car1 = Car(
    brand="BMW",
    model="X6",
    description="Amazing this one, great space and good looking!",
)
car2 = Car(
    brand="Volvo", model="740", description="Classic! Gets the job done, not much else"
)
car3 = Car(
    brand="Dodge",
    model="RAM",
    description="Huge and badass, but we hope you are prepared for the gas bill...",
)
car4 = Car(
    brand="Audi",
    model="A7",
    description="One of the finest, clean design and great interior.",
)
db.session.add(car1)
db.session.add(car2)
db.session.add(car3)
db.session.add(car4)
db.session.commit()
