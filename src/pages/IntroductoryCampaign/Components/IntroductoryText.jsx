import React from 'react';
import './IntroductoryText.scss';

const IntroductoryText = () => {
  return (
    <div className="introductory-text">
      <h1 className="introductory-text__title">Приемная кампания 2025-2026</h1>
      <h2 className="introductory-text__subtitle">Донецкий политехнический колледж</h2>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">📞</span> Контактная информация
        </h3>
        <p className="introductory-text__paragraph"><strong>Телефоны для справок:</strong></p>
        <ul className="introductory-text__list">
          <li>+7 (949) 638-10-22</li>
          <li>+7 (949) 309-98-18</li>
          <li>+7 (856) 338-11-53</li>
        </ul>
        <p className="introductory-text__paragraph">
          <strong>Ответственный секретарь приемной комиссии:</strong> Александр Валерьевич Логвинов
        </p>
      </div>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">📅</span> Сроки приема документов
        </h3>
        <p className="introductory-text__paragraph">
          <strong>Период приема:</strong> с 20 июня по 15 августа 2025 года
        </p>
      </div>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">🕒</span> График работы приемной комиссии
        </h3>
        <ul className="introductory-text__list">
          <li><strong>Понедельник – Четверг:</strong> 9:00 – 16:30</li>
          <li><strong>Пятница:</strong> 9:00 – 15:30</li>
          <li><strong>Суббота:</strong> 9:00 – 13:00</li>
        </ul>
      </div>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">📋</span> Условия поступления
        </h3>
        <p className="introductory-text__paragraph"><strong>Форма обучения:</strong></p>
        <ul className="introductory-text__list">
          <li>Бюджетная (за счет республиканского бюджета)</li>
          <li>Платная (по договорам)</li>
        </ul>
        <p className="introductory-text__paragraph">
          <strong>Порядок зачисления:</strong> При превышении количества абитуриентов над бюджетными местами
          зачисление осуществляется на основе результатов освоения образовательной программы (оценок в аттестате)
        </p>
      </div>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">📄</span> Необходимые документы для абитуриента
        </h3>
        <p className="introductory-text__paragraph"><strong>Комплект документов:</strong></p>
        <ul className="introductory-text__list">
          <li>Ксерокопия паспорта</li>
          <li>Оригинал и ксерокопия аттестата</li>
          <li>9 фотографий 3х4 см</li>
          <li>Медицинская форма № ОЗО-ПО/у-17</li>
          <li>Ксерокопии СНИЛС (3 шт.)</li>
          <li>Ксерокопии ИНН (3 шт.)</li>
          <li>Копия полиса медицинского страхования</li>
          <li>Приписное свидетельство/военный билет (при наличии)</li>
        </ul>

        <p className="introductory-text__paragraph"><strong>Для родителей:</strong></p>
        <ul className="introductory-text__list">
          <li>Ксерокопия паспорта</li>
          <li>Ксерокопия СНИЛС</li>
          <li>Ксерокопия ИНН</li>
          <li>Контактные телефоны</li>
        </ul>
      </div>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">🎓</span> Вступительные испытания
        </h3>
        <p className="introductory-text__paragraph">
          <strong>Общее правило:</strong> Вступительные экзамены НЕ СДАЮТСЯ
        </p>
        <p className="introductory-text__paragraph">
          <strong>Исключение:</strong> Физические испытания для специальности 49.02.01 "Физическая культура"
        </p>
      </div>

      <div className="introductory-text__section">
        <h3 className="introductory-text__section-title">
          <span className="introductory-text__icon">📚</span> Нормативная документация
        </h3>
        <ul className="introductory-text__list introductory-text__list--documents">
          <li><a href="https://cloud.mail.ru/public/HBLU/zu9pskuRc" className="introductory-text__document-link">Правила приема на 2025-2026 учебный год</a></li>
          <li><a href="https://cloud.mail.ru/public/HBLU/zu9pskuRc" className="introductory-text__document-link">Положение о Приемной комиссии</a></li>
          <li><a href="https://cloud.mail.ru/public/BupL/ChxhhLidM" className="introductory-text__document-link">Лицензия колледжа</a></li>
          <li><a href="https://cloud.mail.ru/public/ZDU9/HCqJSj4ji" className="introductory-text__document-link">Свидетельство об аккредитации</a></li>
          <li><a href="https://cloud.mail.ru/public/xMrF/MPKgLarr8" className="introductory-text__document-link">Устав колледжа</a></li>
          <li><a href="https://cloud.mail.ru/public/KYNe/vZNhVDD87" className="introductory-text__document-link">Выписка из реестра образовательных организаций</a></li>
        </ul>
      </div>

      <div className="introductory-text__footer">
        <p className="introductory-text__wish">Желаем успешного поступления!</p>
      </div>
    </div>
  );
};

export default IntroductoryText;
