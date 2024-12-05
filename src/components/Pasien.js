import React from 'react';
import './Pasien.css';  // Assuming your CSS file is named App.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCogs, faSignOut } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"; // Sesuaikan jalur file logo
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <nav id="sidebar">
        <div className="custom-menu">
          {/* You can add a button here if needed */}
        </div>
        <div className="p-4 pt-5">
          {/* Logo Image */}
          <h1>
            <a href="index.html" className="logo">
              <img src={logo} alt="Logo" style={{ height: '100px', width: '150px' }} />
            </a>
          </h1>

          <ul className="ulpasien">
          <li>                
              <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faUser} /> Pasien
              </a> {/* Person Icon */}
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCogs} /> Setting
              </a> {/* Gear Icon */}
            </li>
            <li className="logout-item">
              <a href="#">
                <FontAwesomeIcon icon={faSignOut} /> Keluar
              </a> {/* Logout Icon */}
            </li>
          </ul>

          <div className="footer">
            {/* Footer content here, if needed */}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div id="content" className="p-4 p-md-5 pt-5">
        <h2>dhiiiiiiiiiiiiiiiiiiiiiii</h2>
        {/* Your content here */}
      </div>
    </div>
  );
};

export default Sidebar;
