import React from "react";
import ImageOpenDoors from "../../assets/img/img/News/OpenDoorsDay-2.jpg";
import { FaGraduationCap, FaUsers, FaQuestion, FaMapMarkerAlt, FaSignInAlt, FaComments } from 'react-icons/fa';
import './TextOpenDoors.scss';

const TextOpenDoors = () => {
  const sections = [
    {
      id: 'experts',
      icon: <FaUsers />,
      title: 'Кто выступит экспертом?',
      content: (
        <>
          <p className="contentDoors__description">Первые лица Донецкого политехнического колледжа:</p>
          <ul className="contentDoors__list">
            <li>представители администрации</li>
            <li>руководители направлений обучения</li>
            <li>специалисты Приемной комиссии</li>
            <li>партнеры-работодатели сферы услуг региона</li>
          </ul>
        </>
      )
    },
    {
      id: 'topics',
      icon: <FaGraduationCap />,
      title: 'О чем расскажем?',
      content: (
        <ul className="contentDoors__list">
          <li>Презентация специальностей и рабочих профессий на 2025–2026 учебный год</li>
          <li>Правила приема в 2025–2026 учебном году</li>
          <li>Система обучения и перспективы</li>
          <li>Условия проживания и питания</li>
          <li>Преимущества обучения в колледже</li>
          <li>И многое другое!</li>
        </ul>
      )
    },
    {
      id: 'audience',
      icon: <FaUsers />,
      title: 'Для кого будет полезно данное мероприятие?',
      content: (
        <ul className="contentDoors__list">
          <li>Абитуриентам и их родителям</li>
          <li>Школьникам, планирующим получить профессиональное образование</li>
          <li>Тем, кто интересуется специальностями направления «Профессионалитет»</li>
        </ul>
      )
    },
    {
      id: 'opportunities',
      icon: <FaComments />,
      title: 'Какие возможности будут у участников?',
      content: (
        <p className="contentDoors__description">
          Специалисты помогут разобраться в будущей профессии и ответят на все интересующие вопросы.
          После мероприятия можно будет задать личные вопросы на бесплатные подробные консультации.
        </p>
      )
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt />,
      title: 'Где пройдет мероприятие?',
      content: (
        <div className="contentDoors__location">
          <div className="contentDoors__location-item">
            <span className="contentDoors__location-label">Очно:</span>
            <span className="contentDoors__location-value">г. Донецк, ул. Челюскинцев, д. 159</span>
          </div>
          <div className="contentDoors__location-item">
            <span className="contentDoors__location-label">Онлайн:</span>
            <span className="contentDoors__location-value">платформа Яндекс.Телемост</span>
          </div>
        </div>
      )
    },
    {
      id: 'howtoregister',
      icon: <FaSignInAlt />,
      title: 'Как попасть на день открытых дверей?',
      content: (
        <p className="contentDoors__description">
          Заполните форму регистрации, нажав на кнопку "Записаться" на этой странице,
          после чего мы направим всю необходимую информацию на указанную вами почту.
        </p>
      )
    }
  ];

  return (
    <div className='contentDoors'>
      <div className="contentDoors__header">
        <h1 className="contentDoors__main-title">День открытых дверей</h1>
        <div className="contentDoors__highlight">
          <span className="contentDoors__highlight-text">2025-2026 учебный год</span>
        </div>
      </div>

      <div className="contentDoors__hero">
        <img src={ImageOpenDoors} alt="День открытых дверей в ДПК" className="contentDoors__img" />
      </div>

      <div className="contentDoors__intro">
        <p className="contentDoors__description">
          Донецкий политехнический колледж приглашает абитуриентов и родителей на день открытых дверей, который состоится <strong>15 февраля 2025 г.</strong> по адресу ДНР, г. Донецк, ул. Челюскинцев, д. 159.
        </p>
        <p className="contentDoors__description">
          В этот день мы будем работать для вас, чтобы вы узнали больше о нашем колледже, познакомились с нашими преподавателями и студентами, а также получили ответы на все интересующие вопросы.
          <strong> День открытых дверей – это возможность получить полезный опыт, который поможет вам сделать правильный выбор в отношении своего будущего образования.</strong>
        </p>
      </div>

      <div className="contentDoors__sections">
        {sections.map((section, index) => (
          <section key={section.id} className="contentDoors__section">
            <div className="contentDoors__section-header">
              <div className="contentDoors__section-icon">{section.icon}</div>
              <h3 className="contentDoors__section-title">{section.title}</h3>
            </div>
            <div className="contentDoors__section-content">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      <div className="contentDoors__faq">
        <div className="contentDoors__faq-header">
          <FaQuestion className="contentDoors__faq-icon" />
          <h3 className="contentDoors__faq-title">Остались вопросы?</h3>
        </div>
        <p className="contentDoors__faq-text">
          Если у вас остались вопросы, вы можете связаться с приемной комиссией по телефону <strong>+7 (949) 638-10-22</strong> или отправить электронное письмо на адрес <a href="mailto:dpt1929@mail.ru" className="contentDoors__link">dpt1929@mail.ru</a>
        </p>
      </div>
    </div>
  );
};

export default TextOpenDoors;