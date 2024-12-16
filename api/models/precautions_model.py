from api.database import db

class PrecautionsModel(db.Model):
    __tablename__ = 'precaution'

    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Symptomps_ID = db.Column(db.Integer, nullable=False)
    Disease = db.Column(db.String(255), nullable=False)
    Precaution_1 = db.Column(db.String(255), nullable=True)
    Precaution_2 = db.Column(db.String(255), nullable=True)
    Precaution_3 = db.Column(db.String(255), nullable=True)
    Precaution_4 = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {
            "ID": self.ID,
            "Symptomps_ID": self.Symptomps_ID,
            "Disease": self.Disease,
            "Precaution_1": self.Precaution_1,
            "Precaution_2": self.Precaution_2,
            "Precaution_3": self.Precaution_3,
            "Precaution_4": self.Precaution_4
        }
