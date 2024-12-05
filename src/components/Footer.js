import React from "react";
import '../../src/components/Footer'; // Jika ada CSS global

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.row}>
        {/* Bagian Kiri */}
        <div style={styles.leftSection}>
          <h2 style={styles.title}>Butuh Konsultasi..?</h2>
          <p style={styles.subtitle}>Silahkan Kontak Kami Kami Siap Membantu</p>
          <div style={styles.contactInfo}>
            <p>📍 Jl. Pelajar Pejuang 124 Majalengka Bandung Indonesia</p>
            <p>📞 0822-2345-8790</p>
            <p>✉️ pharmafusion@gmail.com</p>
          </div>
          <div style={styles.socialMedia}>
            <p>Social Media</p>
            <div>
              <span>🐦 Twitter</span> | <span>📘 Facebook</span> |{" "}
              <span>📷 Instagram</span> | <span>📺 YouTube</span>
            </div>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div style={styles.rightSection}>
          <h2>ada pertanyaan..?</h2>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Masukkan email anda disini..."
              style={styles.input}
            />
            <textarea
              placeholder="Pertanyaan Anda"
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button}>
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#4AA0CB",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem"
    
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1200px",
    gap: "20px",
    marginTop: "2rem"
  },
  leftSection: {
    flex: 1,
    
    color: "white",
    padding: "20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "44px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "38px",
    margin: "10px 0",
  },
  contactInfo: {
    marginTop: "20px",
  },
  socialMedia: {
    marginTop: "20px",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#e0f7fa",
    padding: "20px",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "80px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#48bfe3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ContactPage;
