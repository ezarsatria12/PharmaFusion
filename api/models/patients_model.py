from api import db

class PatientsModel(db.Model):
    __tablename__ = 'patients'

    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    birth_date = db.Column(db.Date, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    allergies = db.Column(db.String(200))
    medical_history = db.Column(db.Text)
    surgery_history = db.Column(db.Text)
    weight = db.Column(db.Float, nullable=False)
    height = db.Column(db.Float, nullable=False)
    blood_pressure = db.Column(db.String(20), nullable=False)
