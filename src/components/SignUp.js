import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  // Handler for social login buttons
  const handleGoogleSignUp = () => {
    console.log("Google Sign Up button clicked");
    alert("Redirecting to Google Sign Up...");
  };

  const handleFacebookSignUp = () => {
    console.log("Facebook Sign Up button clicked");
    alert("Redirecting to Facebook Sign Up...");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log("Form submitted");
    alert("Account created successfully!");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Username" required />
          <input
            type="password"
            placeholder="Password"
            minLength="8"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Sudah punya akun? <Link to="/signin">Sign In</Link>
        </p>
        <div className="social-login">
          <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
          <button onClick={handleFacebookSignUp}>Sign Up with Facebook</button>
        </div>
      </div>
      <div className="welcome-banner">
        <h2>Halo! Selamat datang di Pharmafusion</h2>
        <p>Jika Anda sudah memiliki akun</p>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
