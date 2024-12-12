from api.database import db

class MedicinesModel(db.Model):
    __tablename__ = 'medicine'

    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Symptomps_ID = db.Column(db.Integer, nullable=False)
    Disease = db.Column(db.String(255), nullable=False)
    Medicine_Name = db.Column(db.String(255), nullable=True)
    Medicine_Composition = db.Column(db.String(255), nullable=True)
    Medicine_Description = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {
            "ID": self.ID,
            "Symptomps_ID": self.Symptomps_ID,
            "Disease": self.Disease,
            "Medicine_Name": self.Medicine_Name,
            "Medicine_Composition": self.Medicine_Composition,
            "Medicine_Description": self.Medicine_Description
        }
