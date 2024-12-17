from api import create_app
from api.routes.patients_routes import patients_bp  # Import blueprint
from api.routes.feedback_routes import feedback_bp  # Import blueprint
from flask_cors import CORS

app = create_app()
CORS(app)
# Registrasi blueprint
app.register_blueprint(patients_bp, url_prefix='/api')
app.register_blueprint(feedback_bp, url_prefix='/api/feedback')

if __name__ == "__main__":
    app.run(debug=True)
