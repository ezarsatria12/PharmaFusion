import React from "react";
import doctor1 from "../assets/doctor1.jpg"; // Sesuaikan jalur file gambar
import doctorr from "../assets/doctorr.png";
 // Sesuaikan jalur file gambar

const WelcomeSection = () => {
  return (
    <>
      <section className="welcome">
        <div className="lefts">
          <h1>PharmaFusion – Comprehensive AI Medication Recommendation System</h1>
          <h2>Designed for You</h2>
        </div>
        <div className="rights">
          <img width="150px" src={doctorr} alt="Doctor Illustration" />
        </div>
      </section>

      <div className="hero">
        <div className="left">
          <img width="350px" src={doctor1} alt="Doctor" />
        </div>
        <div className="right">
          <h1>Selamat datang di PharmaFusion</h1>
          <p>
            PharmaFusion — Platform terpercaya yang menyediakan rekomendasi obat terbaik untuk kebutuhan kesehatan Anda. 
            Di sini, Anda dapat menemukan informasi tentang berbagai jenis obat, serta panduan penggunaan yang aman dan efektif. 
            Temukan solusi pengobatan yang tepat dan nyaman, semua dalam genggaman tangan Anda.
          </p>
        </div>
      </div>

    </>
  );
};

export default WelcomeSection;