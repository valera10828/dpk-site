import React from 'react';
import './Professional.scss';
import { FaGraduationCap, FaIndustry, FaUsers, FaChalkboardTeacher, FaHandshake, FaChartLine } from 'react-icons/fa';
import professionalImage from '../../assets/img/img/college/professionality.jpg';
import Button from '../../components/ui/Button/Button';

const Professional = () => {
    return (
        <div className="professional">
            <section className="professional__hero">
                <div className="professional__hero-image">
                    <img src={professionalImage} alt="Профессионалитет" />
                </div>
                <div className="professional__hero-content">
                    <h1 className="professional__title">Профессионалитет</h1>
                    <p className="professional__subtitle">Федеральный проект развития до 2030 года</p>
                </div>
            </section>

            <section className="professional__intro">
                <div className="professional__container">
                    <div className="professional__intro-content">
                        <h2 className="professional__intro-title">Новый подход к образованию</h2>
                        <p className="professional__intro-text">
                            Интеграция колледжей и организаций реального сектора экономики для подготовки востребованных специалистов.
                        </p>
                    </div>
                </div>
            </section>

            <section className="professional__features">
                <div className="professional__container">
                    <div className="professional__features-grid">
                        <div className="professional__feature-card">
                            <div className="professional__feature-icon">
                                <FaIndustry />
                            </div>
                            <h3 className="professional__feature-title">Образовательно-производственные центры</h3>
                        </div>

                        <div className="professional__feature-card">
                            <div className="professional__feature-icon">
                                <FaGraduationCap />
                            </div>
                            <h3 className="professional__feature-title">Интенсивные образовательные программы</h3>
                        </div>

                        <div className="professional__feature-card">
                            <div className="professional__feature-icon">
                                <FaChalkboardTeacher />
                            </div>
                            <h3 className="professional__feature-title">Обучение кадрового состава</h3>
                        </div>

                        <div className="professional__feature-card">
                            <div className="professional__feature-icon">
                                <FaHandshake />
                            </div>
                            <h3 className="professional__feature-title">Участие работодателей</h3>
                        </div>

                        <div className="professional__feature-card">
                            <div className="professional__feature-icon">
                                <FaUsers />
                            </div>
                            <h3 className="professional__feature-title">Новая управленческая структура</h3>
                        </div>

                        <div className="professional__feature-card">
                            <div className="professional__feature-icon">
                                <FaChartLine />
                            </div>
                            <h3 className="professional__feature-title">Перезагрузка системы образования</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="professional__benefits">
                <div className="professional__container">
                    <div className="professional__benefits-wrapper">
                        <div className="professional__benefits-content">
                            <h2 className="professional__benefits-title">Преимущества проекта</h2>
                            <div className="professional__benefits-items">
                                <div className="professional__benefits-item">
                                    <span className="professional__benefits-number">01</span>
                                    <p>Обучение по востребованным специальностям</p>
                                </div>
                                <div className="professional__benefits-item">
                                    <span className="professional__benefits-number">02</span>
                                    <p>Практика на современном оборудовании</p>
                                </div>
                                <div className="professional__benefits-item">
                                    <span className="professional__benefits-number">03</span>
                                    <p>Гарантированное трудоустройство</p>
                                </div>
                                <div className="professional__benefits-item">
                                    <span className="professional__benefits-number">04</span>
                                    <p>Сокращенные сроки обучения</p>
                                </div>
                            </div>
                        </div>
                        <div className="professional__benefits-image">
                            <div className="professional__benefits-shape"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="professional__cta">
                <div className="professional__container">
                    <div className="professional__cta-content">
                        <h2 className="professional__cta-title">Стань частью будущего</h2>
                        <p className="professional__cta-text">
                            Присоединяйтесь к проекту «Профессионалитет» и получите востребованную профессию
                        </p>

                        <div className="professional__cta-buttons">
                            <a href="https://япроф.рф/" target='_blank'><Button variant="accent">Узнать подробнее</Button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Professional;