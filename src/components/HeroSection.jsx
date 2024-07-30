import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="content text-center text-white">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  );
};

export default HeroSection;
