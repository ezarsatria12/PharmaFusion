from flask import Flask, request, jsonify
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

app = Flask(__name__)

# Konfigurasi database
DATABASE_URL = "mysql+mysqlconnector://username:password@localhost/pharmafusion"
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)

@app.route('/patients', methods=['POST'])
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

        # Validasi input
        required_fields = [
            full_name, age, birth_date, gender, address,
            phone, email, weight, height, blood_pressure
        ]
        if not all(required_fields):
            return jsonify({"error": "Semua field wajib diisi."}), 400

        # Simpan data ke database
        with Session() as session:
            query = text("""
                INSERT INTO patients (full_name, age, birth_date, gender, address, phone, email, allergies, medical_history, surgery_history, weight, height, blood_pressure)
                VALUES (:full_name, :age, :birth_date, :gender, :address, :phone, :email, :allergies, :medical_history, :surgery_history, :weight, :height, :blood_pressure)
            """)
            session.execute(query, {
                "full_name": full_name,
                "age": age,
                "birth_date": birth_date,
                "gender": gender,
                "address": address,
                "phone": phone,
                "email": email,
                "allergies": allergies,
                "medical_history": medical_history,
                "surgery_history": surgery_history,
                "weight": weight,
                "height": height,
                "blood_pressure": blood_pressure
            })
            session.commit()

        return jsonify({"message": "Data pasien berhasil disimpan."}), 201

    except SQLAlchemyError as e:
        return jsonify({"error": f"Database error: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"Terjadi kesalahan: {str(e)}"}), 500
