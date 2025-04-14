import React from 'react'
import Title from "../../components/ui/Title/Title";
import './Distance.scss';

const Distance = () => {
    return (
        <div className='container-distance'>
            <Title title="Дистанционное обучение" />

            <div className="distance-content">
                <div className="distance-text">
                    <p className="distance-text__description">
                        Для получения задания студентам необходимо перейти по ссылке своей специальности
                    </p>

                    <div className="distance-specialties">
                        <ul className="distance-specialties__list">
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1vx0Bqi8QLCSXyzWS9IXg40wiq3i9mKiw"
                                    className="distance-specialties__link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Программирование в компьютерных системах
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1JBNZsy9LoKnJ8zM8J522b3wmQEBfKBOZ"
                                    className="distance-specialties__link"
                                >
                                    Компьютерные системы и комплексы
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1RvaxtM0RRoZ2UhDfJ3pbMTG3MBH4x8Q5"
                                    className="distance-specialties__link"
                                >
                                    Компьютерные сети
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1ManlUGCLb3xmgNh03mStxGOIOL_U17iA"
                                    className="distance-specialties__link"
                                >
                                    Монтаж, наладка и эксплуатация электрооборудования
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1SXyCzDvAYi7OpBgJ3atsy16G3GC-1ZXt"
                                    className="distance-specialties__link"
                                >
                                    Техническая эксплуатация и обслуживание электрического оборудования
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1trq9KbC5PkIg8mUHSdE_JAUD8rvRkJtB"
                                    className="distance-specialties__link"
                                >
                                    Техническая эксплуатация и обслуживание автомобильного транспорта
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1WbXreMLz2xy9X0jAipK-NXEh2Tw1t7kn"
                                    className="distance-specialties__link"
                                >
                                    Физическая культура
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1zYEnGGny7LHFL8aIyuWuwc293WYO-6Od"
                                    className="distance-specialties__link"
                                >
                                    Водоснабжение и водоотведение
                                </a>
                            </li>
                            <li className="distance-specialties__item">
                                <a
                                    href="https://drive.google.com/drive/folders/1MiTtKtrhXYtvqHxJ86YcF9cLsumZwiCU"
                                    className="distance-specialties__link"
                                >
                                    Автоматизация технологических процессов
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="distance-additional">
                        <div className="distance-additional__section">
                            <h3 className="distance-additional__title">ЗАОЧНОЕ ОТДЕЛЕНИЕ</h3>
                            <a
                                href="https://drive.google.com/drive/folders/1zNRkBCzotgFCHlofYxL-Ep3fbCbm7rH2"
                                className="distance-additional__link"
                            >
                                Перейти к заочному отделению
                            </a>
                        </div>

                        <div className="distance-additional__section">
                            <h3 className="distance-additional__title">Расписание</h3>
                            <a
                                href="/timetable"
                                className="distance-additional__link"
                            >
                                Перейти к расписанию
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Distance;
