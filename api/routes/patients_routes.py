from flask import Blueprint, request, jsonify
from sqlalchemy import text
from api.models.patients_model import PatientsModel
from api import db

patients_bp = Blueprint('patients', __name__)

@patients_bp.route('/patients', methods=['POST'])
def create_patient():
    try:
        # Ambil data dari request
        data = request.get_json()
        full_name = data.get('full_name')
        age = data.get('age')
        birth_date = data.get('birth_date')
        gender = data.get('gender')
        address = data.get('address')
        phone = data.get('phone')
        email = data.get('email')
        allergies = data.get('allergies')
        medical_history = data.get('medical_history')
        surgery_history = data.get('surgery_history')
        weight = data.get('weight')
        height = data.get('height')
        blood_pressure = data.get('blood_pressure')

        # Validasi input (field wajib diisi)
        required_fields = [
            full_name, age, birth_date, gender, address,
            phone, email, weight, height, blood_pressure
        ]
        if not all(required_fields):
            return jsonify({"error": "Semua field wajib diisi."}), 400

        # Simpan data ke database
        new_patient = PatientsModel(
            full_name=full_name,
            age=age,
            birth_date=birth_date,
            gender=gender,
            address=address,
            phone=phone,
            email=email,
            allergies=allergies,
            medical_history=medical_history,
            surgery_history=surgery_history,
            weight=weight,
            height=height,
            blood_pressure=blood_pressure
        )
        db.session.add(new_patient)
        db.session.commit()

        return jsonify({"message": "Data pasien berhasil disimpan."}), 201

    except Exception as e:
        return jsonify({"error": f"Terjadi kesalahan: {str(e)}"}), 500
