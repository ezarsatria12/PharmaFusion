from api.database import db


class DescriptionModel(db.Model):
    __tablename__ = 'description'

    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Symptomps_ID = db.Column(db.Integer, nullable=False)
    Disease = db.Column(db.String(255), nullable=False)
    Description = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {
            "ID": self.ID,
            "Symptomps_ID": self.Symptomps_ID,
            "Disease": self.Disease,
            "Description": self.Description
        }
