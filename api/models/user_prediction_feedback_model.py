from api import db

class UserPredictionFeedbackModel(db.Model):
    __tablename__ = 'user_user_prediction_feedback'

    id = db.Column(db.Integer, primary_key=True)
    user_prediction_id = db.Column(db.Integer, nullable=False)
    Comment = db.Column(db.Text, nullable=False)
    Likes = db.Column(db.Boolean, default=False)
