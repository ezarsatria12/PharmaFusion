import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PHARMAFUSION</div>
      <nav className="nav-links">
        <a href="#home">HOME</a> {/* Tambahkan tautan Home di sini */}
        <a href="#pasien">PASIEN</a>
        <a href="#review">REVIEW</a>
        <a href="#team">TEAM</a>
        <div className="auth-buttons">
          <button className="signup-button">Sign Up</button>
          <button className="login-button">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
