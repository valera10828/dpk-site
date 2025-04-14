import React from 'react';
import Title from "../../components/ui/Title/Title";
import './Timetable.scss';
import StarCard from '../../components/ui/StarCard/StarCard';
import { FaCalendarAlt, FaClock, FaBell } from 'react-icons/fa';

const Timetable = () => {
  const courseLinks = [
    { course: "I", stars: 1, url: "https://cloud.mail.ru/public/Mkvs/wrSB7hKbF" },
    { course: "II", stars: 2, url: "https://cloud.mail.ru/public/1ynZ/RzgM3pqPP" },
    { course: "III", stars: 3, url: "https://cloud.mail.ru/public/NXBQ/FvLd6CS8o" },
    { course: "IV", stars: 4, url: "/" }
  ];

  const bellSchedule = [
    { num: "I Пара", time: "8:30-9:30" },
    { num: "II Пара", time: "9:40-10:40" },
    { num: "III Пара", time: "11:00-12:00" },
    { num: "IV Пара", time: "12:10-13:10" }
  ];

  return (
    <div className="timetable-page">
      <Title title="Расписание" />

      <div className="timetable-container">
        <div className="timetable-header">
          <div className="timetable-icon">
            <FaCalendarAlt />
          </div>
          <div className="timetable-info">
            <h2 className="timetable-info__title">Расписание занятий</h2>
            <p className="timetable-info__subtitle">2 семестр 2024-2025 учебного года</p>
          </div>
        </div>

        <div className="timetable-announcement">
          <FaClock className="timetable-announcement__icon" />
          <p className="timetable-announcement__text">
            Каждый понедельник в <strong>8:30</strong> — «Разговоры о важном»
          </p>
        </div>

        <div className="timetable-courses">
          <h3 className="timetable-section-title">Выберите курс</h3>
          <div className="timetable-courses__grid">
            {courseLinks.map((item, index) => (
              <div className="timetable-courses__item" key={index}>
                <a href={item.url} className="timetable-courses__link" target="_blank" rel="noopener noreferrer">
                  <StarCard courseNumber={item.course} starsCount={item.stars} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="timetable-bells">
          <div className="timetable-bells__header">
            <FaBell className="timetable-bells__icon" />
            <h3 className="timetable-section-title">Расписание звонков</h3>
          </div>

          <div className="timetable-bells__grid">
            {bellSchedule.map((item, index) => (
              <div className="timetable-bells__item" key={index}>
                <div className="timetable-bells__number">{item.num}</div>
                <div className="timetable-bells__time">{item.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="timetable-note">
          <p>Для просмотра расписания нажмите на соответствующий курс</p>
        </div>
      </div>
    </div>
  );
};

export default Timetable;