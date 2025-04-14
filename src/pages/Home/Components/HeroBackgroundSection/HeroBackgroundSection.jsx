import React from 'react';
import './HeroBackgroundSection.scss';


const HeroBackgroundSection = () => {
  return (
    <section className="hero-background">
      <div className="hero-background__overlay"></div>
      <div className="hero-background__content">
        <h1 className="hero-background__title">
          Ваш путь начинается здесь
        </h1>
        <p className="hero-background__subtitle">
          <span className="hero-background__accent">——  вместе</span> с ДОНЕЦКИМ ПОЛИТЕХНИЧЕСКИМ КОЛЛЕДЖЕМ!
        </p>
      </div>
    </section>
  );
};

export default HeroBackgroundSection;
