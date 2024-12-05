import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import Footer from "./Footer";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <Footer />
    </div>
  );
};

export default Dashboard;
