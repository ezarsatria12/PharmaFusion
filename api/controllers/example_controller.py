from flask import Flask, request, jsonify
from api import db
from api.models.description_model import DescriptionModel
from tensorflow.keras.models import load_model
import numpy as np
import os
import pandas as pd

app = Flask(__name__)

# Mendapatkan path model secara absolut
model_path = r'C:\Users\LENOVO\Documents\Project Pharmafusion\PharmaFusion\api\models\model_penyakit.h5'

# Memuat model
model = load_model(model_path)

# Label mapping (sesuaikan dengan output model Anda)
label_mapping = {
    0: "Flu_001",
    1: "Covid-19_002",
    2: "Dengue_003"
}

def predict_disease(input_data):
    """Melakukan prediksi dengan model dan mengembalikan hasil."""
    try:
        # Mengubah input menjadi array numpy
        input_array = np.array(input_data)
        if input_array.ndim == 1:  # Tambahkan batch dimension jika perlu
            input_array = np.expand_dims(input_array, axis=0)
        
        # Melakukan prediksi
        predictions = model.predict(input_array)
        disease_class_id = int(np.argmax(predictions, axis=1)[0])  # ID kelas
        probability = float(np.max(predictions, axis=1)[0])  # Probabilitas
        
        return disease_class_id, probability
    except Exception as e:
        return None, {"error": f"Error in prediction: {str(e)}"}

def get_example_and_prediction(disease_class_id, probability):
    """Mengambil data yang berelasi berdasarkan ID penyakit dari database."""
    try:
        # Mengambil data dari database berdasarkan ID penyakit
        example = DescriptionModel.query.filter_by(Symptomps_ID=disease_class_id).first()
        
        if example:
            label = label_mapping.get(disease_class_id, "Unknown_000")
            disease, disease_id = label.split('_')  # Pisahkan penyakit dan ID
            
            return {
                "id": example.Symptomps_ID,
                "disease": disease,
                "description": example.Description,
                "predicted_class_id": disease_class_id,
                "probability": probability * 100  # Skala ke 0-100
            }
        else:
            return {"error": "Data tidak ditemukan untuk ID penyakit."}
    except Exception as e:
        return {"error": f"Database query error: {str(e)}"}

@app.route('/predict', methods=['POST'])
def predict_example():
    """Endpoint untuk melakukan prediksi dan mengambil data terkait."""
    try:
        # Validasi input JSON
        if 'file' in request.files:
            file = request.files['file']
            try:
                # Membaca CSV dan mengubahnya menjadi DataFrame
                df = pd.read_csv(file)
                input_data = df.to_numpy()
            except Exception as e:
                return jsonify({"error": f"Failed to process CSV file: {str(e)}"}), 400
        else:
            data = request.get_json()
            input_data = data.get('features')
            if not input_data:
                return jsonify({"error": "Fitur input tidak ditemukan."}), 400

        # Melakukan prediksi
        disease_class_id, probability = predict_disease(input_data)

        # Jika terjadi error dalam prediksi
        if disease_class_id is None:
            return jsonify(probability), 500

        # Mengambil data terkait dari database
        result = get_example_and_prediction(disease_class_id, probability)

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500

# Jalankan aplikasi
if __name__ == '__main__':
    app.run(debug=True)
