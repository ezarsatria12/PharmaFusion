from flask import Blueprint, request, jsonify
from api.models.user_prediction_feedback_model import UserPredictionFeedbackModel
from api import db

feedback_bp = Blueprint('feedback', __name__)

@feedback_bp.route('/api/feedback', methods=['POST'])
def add_feedback():
    try:
        data = request.get_json()
        print("Received data:", data)  # Debug log untuk data input
        user_prediction_id = data.get('user_prediction_id')
        comment = data.get('comment')
        likes = data.get('likes')

        if not user_prediction_id or not comment:
            return jsonify({"error": "User prediction ID dan komentar harus diisi."}), 400

        # Simpan feedback ke tabel user_prediction_feedback
        feedback = UserPredictionFeedbackModel(
            user_prediction_id=user_prediction_id,
            Comment=comment,
            Likes=likes
        )
        db.session.add(feedback)
        db.session.commit()

        print("Feedback saved successfully.")  # Debug log untuk konfirmasi
        return jsonify({"message": "Feedback berhasil disimpan."}), 201

    except Exception as e:
        db.session.rollback()
        print(f"Error: {str(e)}")  # Debug log untuk error
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500
