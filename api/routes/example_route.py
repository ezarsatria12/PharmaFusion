from flask import Blueprint
from api.controllers.example_controller import predict_example
from flask_cors import CORS

example_bp = Blueprint("example", __name__)
CORS(example_bp)
# Endpoint untuk prediksi dan mengambil data relasional
@example_bp.route("/predict", methods=["POST"])
def predict():
    
    return predict_example()
