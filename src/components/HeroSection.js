import React from "react";
import doctorr from "../assets/doctorr.png"; // Sesuaikan jalur file logo
import './HeroSection'; // Jika ada CSS global


const HeroSection = () => {
  return (
    <div className="background">
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-heading">
          {/* <span className="line">Kesehatan Anda</span> */}
          <h3> Kesehatan Anda</h3>
          <span className="line">adalah Prioritas</span>
          <br />
          <span className="line highlight">Kami</span>
        </h1>
        
      </div>
      <div className="hero-image">
        <img src={doctorr} alt="Doctor Illustration" />
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
