import React from 'react';
import './WelcomeSection.scss';
import collegeImage from '../../../assets/img/img/college/collegePhoto.jpg';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">

        <div className="welcome-section__status">
          <span className="welcome-section__status-text">Государственное бюджетное профессиональное образовательное учреждение</span>
          <span className="welcome-section__college-name">«Донецкий политехнический колледж»</span>
        </div>
        <div className="welcome-section__content">
          <div className="welcome-section__image-container">
            <img
              src={collegeImage}
              alt="Здание колледжа"
              className="welcome-section__image"
            />
            <div className="welcome-section__image-overlay"></div>
          </div>
          <div className="welcome-section__text-container">
            <h2 className="welcome-section__title">Миссия</h2>
            <p className="welcome-section__description">
              Создаем такие условия обучения, при которых наши студенты, по окончании колледжа, способны решить любую профессиональную задачу, а также стать неуязвимыми специалистами в своей области.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default WelcomeSection;
