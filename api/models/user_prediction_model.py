from api.database import db

class MedicinesModel(db.Model):
    __tablename__ = 'user_prediction'

    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Disease_ID = db.Column(db.Integer, nullable=False)
    Disease = db.Column(db.String(255), nullable=False)
    Symptoms_input = db.Column(db.String(255), nullable=True)
    Probabilitas = db.Column(db.String(255), nullable=True)
