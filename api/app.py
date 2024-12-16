from api import create_app
from api.routes.patients_routes import patients_bp  # Import blueprint
from api.routes.feedback_routes import feedback_bp  # Import blueprint

app = create_app()

# Registrasi blueprint
app.register_blueprint(patients_bp, url_prefix='/api')
app.register_blueprint(feedback_bp, url_prefix='/api/feedback')

if __name__ == "__main__":
    app.run(debug=True)
