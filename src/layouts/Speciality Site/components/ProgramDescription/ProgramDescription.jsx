import React from 'react';
import './ProgramDescription.scss';


const ProgramDescription = ({ title = "О программе", description, keyPoints = [] }) => {
  return (
    <section className="program-description">
      <div className="program-description__inner">
        <h2 className="program-description__title">{title}</h2>
        <div className="program-description__content">
          <p className="program-description__text">{description}</p>
          {keyPoints.length > 0 && (
            <div className="program-description__key-points">
              <h3 className="program-description__subtitle">Ключевые особенности</h3>
              <ul className="program-description__list">
                {keyPoints.map((point, index) => (
                  <li key={index} className="program-description__item">{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramDescription;
