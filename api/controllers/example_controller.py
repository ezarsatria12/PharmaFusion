from flask import Flask, request, jsonify
from sklearn.preprocessing import LabelEncoder
import numpy as np
import pandas as pd
import tensorflow as tf
import os
from sqlalchemy.sql import text
from api.models.description_model import DescriptionModel  # Model database
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

        # Query data dari tabel symptomps berdasarkan Disease_ID
        query = text("SELECT * FROM symptomps WHERE ID = :id")
        symptomps_data = db.session.execute(query, {"id": int(disease_id)}).fetchone()

        if symptomps_data:
            # Cek jika symptomps_data memiliki kolom (keys) dan buat dictionary
            symptomps_data_dict = {col: val for col, val in zip(symptomps_data.keys(), symptomps_data)}

            symptoms = [
                symptomps_data_dict[column]
                for column in symptomps_data_dict if column.startswith('Symptomps_') and symptomps_data_dict[column]
            ]

            medicines = ["Obat A", "Obat B"]

            result = {
                "Disease_ID": disease_id,
                "penyakit": disease,
                "probabilitas": float(probability),
                "description": symptomps_data_dict.get('Disease', "Tidak tersedia"),
                "symptoms": symptoms,
                "medicines": medicines,
                "additional_info": {
                    "treatment": symptomps_data_dict.get('Treatment', "Tidak tersedia"),
                    "precautions": symptomps_data_dict.get('Precautions', "Tidak tersedia"),
                    "severity": symptomps_data_dict.get('Severity', "Tidak tersedia"),
                }
            }
        else:
            result = {
                "Disease_ID": disease_id,
                "penyakit": disease,
                "probabilitas": float(probability),
                "description": "Data tidak ditemukan di database.",
                "symptoms": [],
                "medicines": []
            }

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500
