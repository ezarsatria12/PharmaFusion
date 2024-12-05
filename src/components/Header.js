import React from "react";
import logo from "../assets/logo.png"; // Sesuaikan jalur file logo
import { Link } from "react-router-dom";
import './Header'; // Jika ada CSS global

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="PharmaFusion Logo" className="logo" />
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Navigasi ke Home */}
            <li><Link to="/pasien">Pasien</Link></li> 
            <li><Link to="/review">Review</Link></li> 
            <li><Link to="/team">Team</Link></li> {/* Navigasi ke Team */}
            
       
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
        <Link to="/signup">
            <button className="btn-signup">
              SignUp
            </button>
          </Link>
          <Link to="/signin">
            <button className="btn-signin">
              SignIn
            </button>
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
