import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
    return (
        <div className="footer__column footer__links">
            <h3 className="links__title">Полезные ссылки</h3>
            <ul className="links__list">
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/opendoorsEvent">День открытых дверей</Link></li>
                <li><Link to="/news">Новости</Link></li>
                <li><Link to="/timetable">Расписание</Link></li>
                <li><Link to="/specialities">Специальности</Link></li>
            </ul>
        </div>
    );
};

export default FooterLinks;