import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h1 className="title">Step Up, Stand Out</h1>
        <p className="subtitle">Unlock your potential today with impactful strategies that drive results.</p>
        <div className="buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="background-image"></div>
    </section>
  );
};

export default HeroSection;
