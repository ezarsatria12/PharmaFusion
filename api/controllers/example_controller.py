from flask import Flask, request, jsonify
from sklearn.preprocessing import LabelEncoder, StandardScaler
import numpy as np
import pandas as pd
import tensorflow as tf
import os

app = Flask(__name__)

# Path untuk model dan dataset
model_path = os.path.join(os.path.dirname(__file__), '..', 'models', 'model_penyakit.h5')
csv_file_path = os.path.join(os.path.dirname(__file__), '..', 'models', 'Training_ID.csv')

# Load model
loaded_model = tf.keras.models.load_model(model_path)

# Load dataset
train_data = pd.read_csv(csv_file_path)

# Membuat label mapping
if 'Combined_Label' not in train_data.columns:
    train_data['Combined_Label'] = train_data['Disease'] + '_' + train_data['Disease_ID'].astype(str)

disease_labels = train_data[['Disease', 'Disease_ID']].drop_duplicates()
label_mapping = {int(row['Disease_ID']): row['Disease'] for _, row in disease_labels.iterrows()}

# Fungsi untuk prediksi
def predict_disease(input_data):
    try:
        input_array = np.array(input_data)
        if input_array.ndim == 1:
            input_array = np.expand_dims(input_array, axis=0)

        predictions = loaded_model.predict(input_array)
        predicted_class = int(np.argmax(predictions, axis=1)[0])  # ID kelas sebagai integer
        probability = float(np.max(predictions, axis=1)[0] * 100)  # Skala 0-100 sebagai float

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

        # Tambahkan offset untuk mendapatkan Disease_ID yang benar
        disease_id = predicted_class + 101
        
        # Debugging untuk memastikan hasil prediksi
        print(f"Predicted Class: {predicted_class}")
        print(f"Disease ID: {disease_id}")
        print(f"Probability: {probability}")

        disease = label_mapping.get(disease_id, "Unknown")

        result = {
            "Disease_ID": str(disease_id),
            "penyakit": disease,
            "probabilitas": round(probability, 6)  # Membulatkan hingga 6 desimal
        }

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500
