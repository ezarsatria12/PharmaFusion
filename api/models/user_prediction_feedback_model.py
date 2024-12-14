from api import db

class UserPredictionFeedbackModel(db.Model):
    __tablename__ = 'user_user_prediction_feedback'

    ID = db.Column(db.Integer, primary_key=True)
    user_prediction_id = db.Column(db.Integer, nullable=False)
    Comment = db.Column(db.String(255), nullable=False)
    Likes = db.Column(db.Boolean, nullable=True)
