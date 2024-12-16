from flask import Blueprint
from api.controllers.example_controller import predict_example


example_bp = Blueprint("example", __name__)

# Endpoint untuk prediksi dan mengambil data relasional
@example_bp.route("/predict", methods=["POST"])
def predict():
    
    return predict_example()
