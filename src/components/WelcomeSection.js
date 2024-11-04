import React from 'react';
import './WelcomeSection.css';
import welcomeImage from '../assets/bg1.png'; // Pastikan ini adalah path yang benar

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <h2>
        <span className="highlight">PharmaFusion</span> - <span className="bold-text">Comprehensive AI</span><br />
        <span className="bold-text">Medication Recommendation System</span><br />
        <span className="bold-text">Designed for You</span>
      </h2>
      <div className="content">
        <img src={welcomeImage} alt="AI healthcare" className="welcome-image" />
        <div className="welcome-text">
          <h3 className="extra-bold">Selamat datang di PharmaFusion</h3>
          <p className="normal-text">
            PharmaFusion — Platform terpercaya yang menyediakan rekomendasi obat terbaik
            untuk kebutuhan kesehatan Anda. Di sini, Anda dapat menemukan informasi tentang
            berbagai jenis obat, serta panduan penggunaan yang aman dan efektif. Temukan solusi
            pengobatan yang tepat dan nyaman, semua dalam genggaman tangan Anda.
          </p>
          <p> ini coba tambahan</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
