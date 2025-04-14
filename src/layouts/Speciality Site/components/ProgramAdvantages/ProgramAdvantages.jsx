import React, { useState } from 'react';
import './ProgramAdvantages.scss';
import { FaCheckCircle } from 'react-icons/fa';

const ProgramAdvantages = ({ title = "ПРЕИМУЩЕСТВА ПРОГРАММЫ", advantages = [] }) => {
  const [activeAdvantage, setActiveAdvantage] = useState(null);
  
  const toggleAdvantage = (index) => {
    setActiveAdvantage(activeAdvantage === index ? null : index);
  };
  
  return (
    <section className="program-advantages">
      <h2 className="program-advantages__title">{title}</h2>
      
      <div className="program-advantages__grid">
        {advantages.map((advantage, index) => (
          <div 
            key={index}
            className={`program-advantages__item ${activeAdvantage === index ? 'program-advantages__item--active' : ''}`}
            onClick={() => toggleAdvantage(index)}
          >
            <div className="program-advantages__item-inner">
              <div className="program-advantages__text">
                {advantage.text}
              </div>
              <div className="program-advantages__icon">
                <span></span>
              </div>
            </div>
            {advantage.details && (
              <div className="program-advantages__details">
                {typeof advantage.details === 'string' ? (
                  <p>{advantage.details}</p>
                ) : Array.isArray(advantage.details) ? (
                  <ul className="program-advantages__details-list">
                    {advantage.details.map((detail, i) => (
                      <li key={i} className="program-advantages__details-item">
                        <FaCheckCircle className="program-advantages__check-icon" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramAdvantages;
