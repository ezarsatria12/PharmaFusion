from flask import Flask, request, jsonify
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd
import tensorflow as tf
import os
from api.models.symptomps_model import SymptompsModel  # Model Symptomps
from api.models.medicines_model import MedicinesModel  # Model Medicine
from api.models.precautions_model import PrecautionsModel  # Model Precaution
from api.models.description_model import DescriptionModel
from api import db  # Instance database

app = Flask(__name__)

# Path untuk model dan dataset
model_path = os.path.join(os.path.dirname(
    __file__), '..', 'models', 'model_penyakit.h5')
csv_file_path = os.path.join(os.path.dirname(
    __file__), '..', 'models', 'Training_ID.csv')

# Load model
loaded_model = tf.keras.models.load_model(model_path)

# Load dataset
train_data = pd.read_csv(csv_file_path)

# Membuat label mapping
train_data['Combined_Label'] = train_data['Disease'] + \
    '_' + train_data['Disease_ID'].astype(str)
# Pisahkan fitur dan label gabungan
X = train_data.drop(columns=['Disease', 'Disease_ID', 'Combined_Label'])
y = train_data['Combined_Label']

label_encoder = LabelEncoder()
label_encoder.fit(y)

# Membuat mapping label
label_mapping = dict(zip(label_encoder.transform(label_encoder.classes_), label_encoder.classes_))

# Fungsi untuk prediksi
def predict_disease(input_data):
    try:
        input_array = np.array(input_data)
        if input_array.ndim == 1:
            input_array = np.expand_dims(input_array, axis=0)

        predictions = loaded_model.predict(input_array)
        predicted_class = np.argmax(predictions, axis=1)[0]  # ID kelas yang diprediksi
        probability = np.max(predictions, axis=1)[0] * 100  # Skala 0-100

        return predicted_class, probability
    except Exception as e:
        return None, f"Error in prediction: {str(e)}"

@app.route('/predict', methods=['POST'])
def predict_example():
    try:
        data = request.get_json()
        input_data = data.get('features')
        if not input_data:
            return jsonify({"error": "Fitur input tidak ditemukan."}), 400

        predicted_class, probability = predict_disease(input_data)

        if predicted_class is None:
            return jsonify({"error": "Prediksi gagal."}), 500

        # Mendekode ID kelas ke label yang sesuai
        predicted_label = label_mapping.get(predicted_class, "Unknown")
        disease, disease_id = predicted_label.split('_')

        # Query menggunakan SQLAlchemy
        symptomps_data = SymptompsModel.query.get(int(disease_id))
        description_data = DescriptionModel.query.filter_by(Symptomps_ID=int(disease_id)).first()

        # Jika symptomps_data ditemukan
        if symptomps_data:
            symptoms = [
                getattr(symptomps_data, f"Symptomps_{i}")
                for i in range(1, 18) if getattr(symptomps_data, f"Symptomps_{i}")
            ]

            medicines = MedicinesModel.query.filter_by(Symptomps_ID=int(disease_id)).all()
            medicines_data = [
                {"name": med.Medicine_Name, "description": med.Medicine_Description}
                for med in medicines
            ]

            precautions = PrecautionsModel.query.filter_by(Symptomps_ID=int(disease_id)).first()
            precautions_data = [
                getattr(precautions, f"Precaution_{i}")
                for i in range(1, 5) if getattr(precautions, f"Precaution_{i}")
            ] if precautions else []

            # Ambil deskripsi jika tersedia
            description_text = description_data.Description if description_data else "Tidak tersedia"

            result = {
                "Disease_ID": disease_id,
                "penyakit": disease,
                "probabilitas": float(probability),
                "description": description_text,
                "symptoms": symptoms,
                "medicines": medicines_data,
                "precautions": precautions_data
            }
        else:
            result = {
                "Disease_ID": disease_id,
                "penyakit": disease,
                "probabilitas": float(probability),
                "description": "Data tidak ditemukan di database.",
                "symptoms": [],
                "medicines": [],
                "precautions": []
            }

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500
