import React, { useEffect } from 'react';
import NavItem from './NavItem';

const Navigation = ({ isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);



  return (
    <div className={`header__nav nav ${isOpen ? 'active' : ''}`}>
      <ul className="nav__list">
        <NavItem title="Главная" href="/" />
        <NavItem title="Новости" href="/news" />
        <NavItem
          title="Абитуриенту"
          href="#"
          dropdownItems={[
            { href: '/opendoorsEvent', label: 'День открытых дверей' },
            { href: '/introductory', label: 'Вступительная компания' },
            { href: '/specialities/test', label: 'Тест на специальность' },
            { href: '/professionalitet', label: 'Профессионалитет' },
            { href: 'https://docs.google.com/spreadsheets/d/1hdcgWcDnuqt1miR-aT8XRB8en0zHNiGJ/pubhtml?gid=1573736310&single=true&widget=true&headers=false', label: 'Список Абитуриентов' },
          ]}
        />
        <NavItem title="Специальности" href="/specialities" />
        <NavItem
          title="Студенту"
          href="#"
          dropdownItems={[
            { href: '/timetable', label: 'Расписание' },
            { href: '/club', label: 'Спортивный клуб' },
            { href: '/distance', label: 'Материалы Дистанционного обучения' },
          ]}
        />
        <NavItem title="Об организации" href="/about" />
      </ul>
    </div>
  );
};

export default Navigation;