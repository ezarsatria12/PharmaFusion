import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import './index.css'; // Jika ada CSS global

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WelcomeSection />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
