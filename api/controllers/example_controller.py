from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import tensorflow as tf
import os

app = Flask(__name__)

# Mendapatkan path model yang ada di folder 'models'
model_path = os.path.join(os.path.dirname(__file__), '..', 'models', 'model_penyakit.h5')
loaded_model = tf.keras.models.load_model(model_path)

# Mendapatkan path ke file CSV yang ada di folder 'models'
csv_file_path = os.path.join(os.path.dirname(__file__), '..', 'models', 'Training_ID.csv')

# Fungsi untuk melakukan prediksi menggunakan model
def predict_disease(input_data):
    """Melakukan prediksi dengan model dan mengembalikan hasil."""
    try:
        # Mengubah input menjadi array numpy
        input_array = np.array(input_data)
        if input_array.ndim == 1:  # Tambahkan batch dimension jika perlu
            input_array = np.expand_dims(input_array, axis=0)

        # Melakukan prediksi
        predictions = loaded_model.predict(input_array)
        predicted_class = np.argmax(predictions, axis=1)[0]  # ID kelas
        probability = np.max(predictions, axis=1)[0]  # Probabilitas
        
        # Mengonversi float32 ke float untuk serialisasi JSON
        return predicted_class, float(probability)
    except Exception as e:
        return None, {"error": f"Error in prediction: {str(e)}"}

@app.route('/predict', methods=['POST'])
def predict_example():
    """Endpoint untuk melakukan prediksi dan menampilkan hasil."""
    try:
        # Validasi input JSON
        data = request.get_json()
        input_data = data.get('features')
        if not input_data:
            return jsonify({"error": "Fitur input tidak ditemukan."}), 400

        # Memastikan input_data dalam format yang benar
        input_data = np.array(input_data)

        # Membaca file CSV yang ada di folder 'models'
        train_data = pd.read_csv(csv_file_path)

        # Mendapatkan daftar penyakit dan ID-nya dari CSV
        disease_labels = train_data[['Disease', 'Disease_ID']].drop_duplicates().reset_index(drop=True)

        # Pemetaan langsung Disease_ID ke nama penyakit
        disease_id_mapping = {i: str(disease_labels.loc[i, 'Disease_ID']) 
                              for i in range(len(disease_labels))}
        disease_name_mapping = {i: disease_labels.loc[i, 'Disease'] 
                                for i in range(len(disease_labels))}

        # Melakukan prediksi
        predicted_class, probability = predict_disease(input_data)

        # Jika terjadi error dalam prediksi
        if predicted_class is None:
            return jsonify({"error": "Prediksi gagal."}), 500

        # Memastikan prediksi kelas yang dipetakan ke Disease_ID yang benar
        disease_id = disease_id_mapping.get(predicted_class, "Unknown")  # ID dimulai dari 101
        disease = disease_name_mapping.get(predicted_class, "Unknown")

        # Skala probabilitas ke persentase
        probability_percentage = round(float(probability) * 100, 6)

        # Format output sesuai dengan pengembangan AI
        result = {
            "Disease_ID": disease_id,
            "penyakit": disease,
            "probabilitas": probability_percentage
        }

        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": f"Unexpected server error: {str(e)}"}), 500

# Jalankan aplikasi
if __name__ == '__main__':
    app.run(debug=True)
