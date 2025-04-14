import React, { useState, useEffect } from 'react';
import './SpecialtyCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SpecialtyCard = ({ specialties = [], ...props }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [exitingCards, setExitingCards] = useState([]);

  useEffect(() => {
    setExitingCards([]);

    const timeout = setTimeout(() => {
      setVisibleCards(specialties);
    }, 100);

    return () => clearTimeout(timeout);
  }, [specialties]);

  return (
    <div className="specialties-grid" {...props}>
      {specialties.length > 0 ? (
        <>
          {exitingCards.map((specialty, index) => (
            <div key={`exiting-${specialty.title}-${index}`} className="specialty-card exit">
              <div className="specialty-card__image-container">
                <Link to={specialty.url || '#'} >
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="specialty-card__image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://steamuserimages-a.akamaihd.net/ugc/1868430939526246725/6559D7CAB294C66D291540F95B7C7BA7179FF067/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true';
                    }}
                  />
                </Link>
              </div>
              <div className="specialty-card__content-container">
                <Link to={specialty.url || '#'} className="specialty-card__title">
                  <h3>{specialty.title}</h3>
                </Link>
                <div className="specialty-card__info-container">
                  <p className="specialty-card__code">
                    Код специальности {specialty.codeSpecialty}
                  </p>
                  <div className="specialty-card__footer">
                    <Link to={specialty.url || '#'} className="specialty-card__button specialty-card__button--kind">
                      очная
                    </Link>
                    <Link to={specialty.url || '#'} className="specialty-card__button specialty-card__button--kind">
                      онлайн
                    </Link>
                    <Link to={specialty.url || '#'} className="specialty-card__button specialty-card__button--group">
                      {specialty.Group}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="specialty-card__info">
                <p>{specialty.educationType || 'Среднее профессиональное образование'}</p>
              </div>
            </div>
          ))}
          {visibleCards.map((specialty, index) => (
            <div key={`visible-${specialty.title}-${index}`} className="specialty-card">
              <div className="specialty-card__image-container">
                <Link to={specialty.url || '#'} >
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="specialty-card__image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://steamuserimages-a.akamaihd.net/ugc/1868430939526246725/6559D7CAB294C66D291540F95B7C7BA7179FF067/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true';
                    }}
                  />
                </Link>
              </div>
              <div className="specialty-card__content-container">
                <Link to={specialty.url || '#'} className="specialty-card__title">
                  <h3>{specialty.title}</h3>
                </Link>
                <div className="specialty-card__info-container">
                  <p className="specialty-card__code">
                    Код специальности {specialty.codeSpecialty}
                  </p>
                  <div className="specialty-card__footer">
                    <Link to={specialty.url || '#'} className="specialty-card__button specialty-card__button--kind">
                      очная
                    </Link>
                    <Link to={specialty.url || '#'} className="specialty-card__button specialty-card__button--kind">
                      онлайн
                    </Link>
                    <Link to={specialty.url || '#'} className="specialty-card__button specialty-card__button--group">
                      {specialty.Group}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="specialty-card__info">
                <p>{specialty.educationType || 'Среднее профессиональное образование'}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="specialty-cards-container__empty">Специальности не найдены.</p>
      )}
    </div>
  );
};

SpecialtyCard.propTypes = {
  specialties: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      codeSpecialty: PropTypes.string.isRequired,
      Group: PropTypes.string.isRequired,
      url: PropTypes.string,
      image: PropTypes.string.isRequired,
      educationType: PropTypes.string
    })
  )
};

export default SpecialtyCard;