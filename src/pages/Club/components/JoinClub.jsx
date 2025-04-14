import React, { useState } from 'react';
import Modal from '../../../components/ui/Modal/Modal';
import './JoinClub.scss';

const JoinClub = () => {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        experience: 'Нет опыта'
    });

    const handleJoinClick = () => {
        setIsFormModalOpen(true);
    };

    const handleCloseFormModal = () => {
        setIsFormModalOpen(false);
    };

    const handleCloseConfirmModal = () => {
        setIsConfirmModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена:', formData);
        setIsFormModalOpen(false);
        setIsConfirmModalOpen(true);
        setFormData({
            name: '',
            phone: '',
            email: '',
            age: '',
            experience: 'Нет опыта'
        });
    };

    return (
        <section className="club__join">
            <div className="club__container">
                <div className="club__join-content">
                    <h2 className="club__join-title">Присоединяйся к нам!</h2>
                    <p className="club__join-text">
                        Хочешь стать частью нашей спортивной семьи? Приходи на тренировки, участвуй в соревнованиях,
                        развивайся и побеждай вместе с нами! Спорт – это здоровье, дисциплина и характер.
                    </p>
                    <button
                        className="club__join-button"
                        onClick={handleJoinClick}
                    >
                        Записаться на тренировку
                    </button>
                </div>
            </div>

            <Modal isOpen={isFormModalOpen} onClose={handleCloseFormModal}>
                <div className="join-form-modal">
                    <h2 className="join-form-modal__title">Запись на тренировку</h2>
                    <form className="join-form" onSubmit={handleSubmit}>
                        <div className="join-form__group">
                            <label className="join-form__label" htmlFor="name">ФИО</label>
                            <input
                                className="join-form__input"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="join-form__group">
                            <label className="join-form__label" htmlFor="phone">Телефон</label>
                            <input
                                className="join-form__input"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="join-form__group">
                            <label className="join-form__label" htmlFor="email">Email</label>
                            <input
                                className="join-form__input"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="join-form__group">
                            <label className="join-form__label" htmlFor="age">Возраст</label>
                            <input
                                className="join-form__input"
                                type="number"
                                id="age"
                                name="age"
                                min="5"
                                max="100"
                                value={formData.age}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="join-form__group">
                            <label className="join-form__label" htmlFor="experience">Опыт занятий спортом</label>
                            <select
                                className="join-form__select"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                            >
                                <option value="Нет опыта">Нет опыта</option>
                                <option value="Начинающий">Начинающий</option>
                                <option value="Средний">Средний</option>
                                <option value="Продвинутый">Продвинутый</option>
                            </select>
                        </div>
                        <button className="join-form__submit" type="submit">Отправить заявку</button>
                    </form>
                </div>
            </Modal>

            <Modal isOpen={isConfirmModalOpen} onClose={handleCloseConfirmModal}>
                <div className="confirm-modal">
                    <div className="confirm-modal__icon">✓</div>
                    <h2 className="confirm-modal__title">Спасибо за запись!</h2>
                    <p className="confirm-modal__text">
                        Ваша заявка успешно отправлена. Наш тренер свяжется с вами в ближайшее время для уточнения деталей.
                    </p>
                    <button className="confirm-modal__button" onClick={handleCloseConfirmModal}>
                        Закрыть
                    </button>
                </div>
            </Modal>
        </section>
    );
};

export default JoinClub;
