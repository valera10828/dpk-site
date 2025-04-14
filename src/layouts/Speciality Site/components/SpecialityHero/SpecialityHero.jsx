import React from 'react';
import './SpecialityHero.scss';

const SpecialityHero = ({ title, code, codeTitle = "Код специальности", image, description }) => {
  return (
    <section className="speciality-hero">
      <div className="speciality-hero__content">
        <div className="speciality-hero__info">
          <div className="speciality-hero__code">
            <span className="speciality-hero__code-title">{codeTitle}</span>
            <span className="speciality-hero__code-value">{code}</span>
          </div>
          <h1 className="speciality-hero__title">{title}</h1>
          <p className="speciality-hero__description">{description}</p>
        </div>
        <div className="speciality-hero__image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default SpecialityHero;
