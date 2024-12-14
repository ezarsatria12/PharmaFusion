from flask import Blueprint, request, jsonify
from api.models.user_prediction_feedback_model import UserPredictionFeedbackModel
from api import db

feedback_bp = Blueprint('feedback', __name__)

@feedback_bp.route('/feedback', methods=['POST'])
def add_feedback():
    try:
        data = request.get_json()
        print("Received data:", data) 
        user_prediction_id = data.get('user_prediction_id')
        comment = data.get('comment')
        likes = data.get('likes')

        if not user_prediction_id or not comment:
            return jsonify({"error": "User prediction ID dan komentar harus diisi."}), 400

        # Simpan feedback ke tabel user_user_prediction_feedback
        feedback = UserPredictionFeedbackModel(
            user_prediction_id=user_prediction_id,
            Comment=comment,
            Likes=likes
        )
        db.session.add(feedback)
        db.session.commit()

        return jsonify({"message": "Feedback berhasil disimpan."}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500
