from api.database import db

class SymptompsModel(db.Model):
    __tablename__ = 'symptomps'

    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Disease = db.Column(db.String(255), nullable=False)
    Symptomps_1 = db.Column(db.String(255), nullable=True)
    Symptomps_2 = db.Column(db.String(255), nullable=True)
    Symptomps_3 = db.Column(db.String(255), nullable=True)
    Symptomps_4 = db.Column(db.String(255), nullable=True)
    Symptomps_5 = db.Column(db.String(255), nullable=True)
    Symptomps_6 = db.Column(db.String(255), nullable=True)
    Symptomps_7 = db.Column(db.String(255), nullable=True)
    Symptomps_8 = db.Column(db.String(255), nullable=True)
    Symptomps_9 = db.Column(db.String(255), nullable=True)
    Symptomps_10 = db.Column(db.String(255), nullable=True)
    Symptomps_11 = db.Column(db.String(255), nullable=True)
    Symptomps_12 = db.Column(db.String(255), nullable=True)
    Symptomps_13 = db.Column(db.String(255), nullable=True)
    Symptomps_14 = db.Column(db.String(255), nullable=True)
    Symptomps_15 = db.Column(db.String(255), nullable=True)
    Symptomps_16 = db.Column(db.String(255), nullable=True)
    Symptomps_17 = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {
            "ID": self.ID,
            "Disease": self.Disease,
            "Symptomps_1": self.Symptomps_1,
            "Symptomps_2": self.Symptomps_2,
            "Symptomps_3": self.Symptomps_3,
            "Symptomps_4": self.Symptomps_4,
            "Symptomps_5": self.Symptomps_5,
            "Symptomps_6": self.Symptomps_6,
            "Symptomps_7": self.Symptomps_7,
            "Symptomps_8": self.Symptomps_8,
            "Symptomps_9": self.Symptomps_9,
            "Symptomps_10": self.Symptomps_10,
            "Symptomps_11": self.Symptomps_11,
            "Symptomps_12": self.Symptomps_12,
            "Symptomps_13": self.Symptomps_13,
            "Symptomps_14": self.Symptomps_14,
            "Symptomps_15": self.Symptomps_15,
            "Symptomps_16": self.Symptomps_16,
            "Symptomps_17": self.Symptomps_17
        }
