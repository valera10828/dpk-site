import React from 'react';
import { FaTrophy, FaRunning, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const AboutClub = () => {
    const features = [
        {
            icon: <FaTrophy />,
            title: "Достижения",
            text: "Наши спортсмены регулярно занимают призовые места в городских и республиканских соревнованиях"
        },
        {
            icon: <FaRunning />,
            title: "Виды спорта",
            text: "Лёгкая атлетика, волейбол, баскетбол, футбол и другие командные и индивидуальные дисциплины"
        },
        {
            icon: <FaUsers />,
            title: "Тренеры",
            text: "Профессиональные тренеры с многолетним опытом подготовки спортсменов"
        },
        {
            icon: <FaCalendarAlt />,
            title: "Мероприятия",
            text: "Регулярные спортивные события, соревнования и товарищеские встречи"
        }
    ];

    return (
        <section className="club__about">
            <div className="club__container">
                <h2 className="club__section-title">О нашем клубе</h2>
                <p className="club__description">
                    Спортивный клуб «СОКОЛ» – это центр спортивной жизни Донецкого политехнического колледжа.
                    Наша миссия – развивать физические и моральные качества студентов, прививать любовь к
                    спорту и здоровому образу жизни. Клуб предоставляет возможности для тренировок,
                    участия в соревнованиях и достижения высоких спортивных результатов.
                </p>

                <div className="club__features">
                    {features.map((feature, index) => (
                        <div key={index} className="club__feature">
                            <div className="club__feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="club__feature-title">{feature.title}</h3>
                            <p className="club__feature-text">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutClub;
