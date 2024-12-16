from flask import Flask
from api.database import db

def create_app():
    """Membuat dan menginisialisasi aplikasi Flask."""
    app = Flask(__name__)

    # Konfigurasi database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/pharmafusion'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Inisialisasi database
    db.init_app(app)

    # Register blueprint (contoh)
    from api.routes.example_route import example_bp
    app.register_blueprint(example_bp, url_prefix='/api')

    return app
