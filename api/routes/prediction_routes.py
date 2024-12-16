from flask import Blueprint, request, jsonify
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd
import tensorflow as tf
import os
from sqlalchemy.sql import text
from api.models.symptomps_model import SymptompsModel
from api.models.medicines_model import MedicinesModel
from api.models.precautions_model import PrecautionsModel
from api.models.description_model import DescriptionModel
from api import db

# Blueprint
prediction_bp = Blueprint('prediction', __name__)

# Path untuk model dan dataset
model_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'model_penyakit.h5')
csv_file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'Training_ID.csv')

# Load model
loaded_model = tf.keras.models.load_model(model_path)

# Load dataset
train_data = pd.read_csv(csv_file_path)
train_data['Combined_Label'] = train_data['Disease'] + '_' + train_data['Disease_ID'].astype(str)

# Label encoder
X = train_data.drop(columns=['Disease', 'Disease_ID', 'Combined_Label'])
y = train_data['Combined_Label']
label_encoder = LabelEncoder()
label_encoder.fit(y)
label_mapping = dict(zip(label_encoder.transform(label_encoder.classes_), label_encoder.classes_))

# Fungsi prediksi
def predict_disease(input_data):
    try:
        input_array = np.array(input_data)
        if input_array.ndim == 1:
            input_array = np.expand_dims(input_array, axis=0)
        predictions = loaded_model.predict(input_array)
        predicted_class = np.argmax(predictions, axis=1)[0]
        probability = np.max(predictions, axis=1)[0] * 100
        return predicted_class, probability
    except Exception as e:
        return None, f"Error in prediction: {str(e)}"

@prediction_bp.route('/predict', methods=['POST'])
def predict_example():
    try:
        data = request.get_json()
        input_data = data.get('features')
        if not input_data:
            return jsonify({"error": "Fitur input tidak ditemukan."}), 400

        db.session.execute(
            text("INSERT INTO Symptoms_input (features) VALUES (:features)"),
            {"features": str(input_data)}
        )
        db.session.commit()
        input_id = db.session.execute(text("SELECT LAST_INSERT_ID() as id")).fetchone().id

        predicted_class, probability = predict_disease(input_data)
        if predicted_class is None:
            return jsonify({"error": "Prediksi gagal."}), 500

        predicted_label = label_mapping.get(predicted_class, None)
        if not predicted_label:
            return jsonify({"error": "Label prediksi tidak ditemukan."}), 500

        disease, disease_id = predicted_label.split('_')
        db.session.execute(
            text("""
                INSERT INTO user_prediction (Disease_ID, Disease, Symptoms_input, Probabilitas)
                VALUES (:disease_id, :disease, :symptoms_input, :probabilitas)
            """),
            {
                "disease_id": int(disease_id),
                "disease": disease,
                "symptoms_input": input_id,
                "probabilitas": float(probability)
            }
        )
        db.session.commit()
        prediction_id = db.session.execute(text("SELECT LAST_INSERT_ID() as id")).fetchone().id

        result = {
            "user_prediction_id": prediction_id,
            "Disease_ID": disease_id,
            "penyakit": disease,
            "probabilitas": float(probability)
        }
        return jsonify(result), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500
