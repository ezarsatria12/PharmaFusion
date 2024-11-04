import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="title">Kesehatan Anda</h1>
      <h1 className="title">adalah prioritas</h1>
      <h1 className="title">kami</h1>
      <p className="paragraph">PharmaFusion mendukung kesehatan Anda dengan</p>
      <p className="paragraph">memberikan rekomendasi obat yang disesuaikan untuk</p>
      <p className="paragraph">mengatasi rasa sakit dan memenuhi kebutuhan kesehatan Anda.</p>
      <div className="illustration">
        {/* Anda bisa memasukkan gambar ilustrasi di sini jika diperlukan */}
      </div>
    </section>
  );
};

export default HeroSection;
