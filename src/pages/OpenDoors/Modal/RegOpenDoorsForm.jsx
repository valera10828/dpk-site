import React, { useState } from 'react';
import './RegOpenDoorsForm.scss';
import Button from "../../../components/ui/Button/Button";
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID || 'service_a87s7dr';
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID || 'template_dmbzv2k';
const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY || 'cR2bRw1z9xHz8EA5G';
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_ADMIN_EMAIL_TEMPLATE_ID || 'template_lru9709';
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'gabensimeb@gmail.com';

const RegOpenDoorsForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        event: 'День открытых дверей',
        date: '15.02.2025 12:00:00',
        participation: 'Очное',
        agreement: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [registrationId, setRegistrationId] = useState('');
    const [successData, setSuccessData] = useState({
        email: '',
        participation: '',
        date: '',
        event: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const formatPhone = (value) => {
        const phoneNumber = value.replace(/\D/g, '');
        if (phoneNumber.length < 4) return phoneNumber;
        if (phoneNumber.length < 7) return `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4)}`;
        if (phoneNumber.length < 10) return `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
        return `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    };

    const handlePhoneChange = (e) => {
        const formattedPhone = formatPhone(e.target.value);
        setFormData({
            ...formData,
            phone: formattedPhone
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phonePattern = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        if (!phonePattern.test(formData.phone)) {
            alert('Пожалуйста, введите корректный номер телефона в формате +7(XXX)XXX-XX-XX');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('pending');

        try {
            const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2);
            setRegistrationId(uniqueId);

            const templateParams = {
                to_email: formData.email,
                to_name: formData.name,
                event_name: formData.event,
                event_date: formData.date,
                participation_type: formData.participation,
                phone: formData.phone,
                registration_id: uniqueId
            };

            await emailjs.send(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                templateParams,
                EMAIL_PUBLIC_KEY
            );

            await emailjs.send(
                EMAIL_SERVICE_ID,
                ADMIN_TEMPLATE_ID,
                {
                    ...templateParams,
                    recipient_email: ADMIN_EMAIL,
                    user_email: formData.email,
                    to_email: ADMIN_EMAIL
                },
                EMAIL_PUBLIC_KEY
            );

            setSubmitStatus('success');

            const email = formData.email;
            const participation = formData.participation;
            const date = formData.date;
            const event = formData.event;

            setFormData({
                name: '',
                email: '',
                phone: '',
                event: 'День открытых дверей',
                date: '15.02.2025 12:00:00',
                participation: 'Очное',
                agreement: false
            });

            setSuccessData({
                email: email,
                participation: participation,
                date: date,
                event: event
            });

            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 5000);

        } catch (error) {
            console.error('Ошибка при отправке:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h2 className="modal-title">
                {submitStatus === 'success' ? 'Заявка отправлена!' : 'Подать заявку'}
            </h2>

            {submitStatus === 'success' ? (
                <div className="success-message">
                    <p>Спасибо за регистрацию на событие "{successData.event}"!</p>
                    <p>На вашу почту {successData.email} отправлено письмо с подтверждением.</p>
                    <p>Формат участия: {successData.participation}</p>
                    <p>Дата события: {successData.date}</p>
                    <p>Номер вашей регистрации: <strong>{registrationId}</strong></p>
                    <Button variant="green" onClick={onClose} className="form-submit">
                        Закрыть
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="application-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Иван Иванов"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+7(XXX)XXX-XX-XX"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className="form-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="event" className="form-label">Событие</label>
                        <input
                            type="text"
                            id="event"
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                            className="form-input"
                            readOnly
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date" className="form-label">Дата события</label>
                        <input
                            type="text"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="form-input"
                            readOnly
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Участие</label>
                        <div className="radio-group">
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="participation"
                                    value="Очное"
                                    checked={formData.participation === 'Очное'}
                                    onChange={handleChange}
                                    className="radio-input"
                                    disabled={isSubmitting}
                                />
                                <span className="radio-text">Очное</span>
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="participation"
                                    value="Онлайн"
                                    checked={formData.participation === 'Онлайн'}
                                    onChange={handleChange}
                                    className="radio-input"
                                    disabled={isSubmitting}
                                />
                                <span className="radio-text">Онлайн</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="agreement"
                                checked={formData.agreement}
                                onChange={handleChange}
                                className="checkbox-input"
                                required
                                disabled={isSubmitting}
                            />
                            <span className="checkbox-text">
                                Нажимая кнопку «Отправить» я подтверждаю, что ввожу свои данные добровольно и ознакомился с
                                <a href="/privacy" className="form-link">Политикой конфиденциальности</a> и
                                <a href="/terms/data-processing" className="form-link">Правилами обработки персональных данных</a>
                            </span>
                        </label>
                    </div>

                    {submitStatus === 'error' && (
                        <div className="error-message">
                            Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.
                        </div>
                    )}

                    <Button
                        variant="green"
                        type="submit"
                        className="form-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </Button>
                </form>
            )}
        </>
    );
};

export default RegOpenDoorsForm;