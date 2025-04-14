import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import emailjs from '@emailjs/browser';
import './SubmitDocumentsModal.scss';

const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID || 'service_wbo2hx8';
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID || 'template_8bgmdzf';
const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY || '50kKcGP9MNtfwLNU0';
const ADMIN_TEMPLATE_ID = process.env.REACT_APP_ADMIN_DOCUMENTS_TEMPLATE_ID || 'template_c8hj8do';
const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'gabensimeb@gmail.com';

const SubmitDocumentsModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        specialty: '',
        educationType: '9 классов',
        requiredDocuments: {
            passport: true,
            certificate: true,
            photos: true,
            snils: true,
            medicalCertificate: true
        },
        additionalInfo: '',
        agreement: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [applicationId, setApplicationId] = useState('');
    const [successData, setSuccessData] = useState({
        fullName: '',
        email: '',
        specialty: '',
        educationType: ''
    });

    const specialties = [
        { id: 'software', name: 'Разработка программного обеспечения (09.02.07)' },
        { id: 'infosystems', name: 'Информационные системы и программирование (09.02.07)' },
        { id: 'networks', name: 'Компьютерные сети (09.02.02)' },
        { id: 'computerSystems', name: 'Компьютерные системы и комплексы (09.02.01)' },
        { id: 'networkAdmin', name: 'Сетевое и системное администрирование (09.02.06)' },
        { id: 'carMaintenance', name: 'Техническое обслуживание и ремонт автомобильного транспорта (23.02.03)' },
        { id: 'engineSystems', name: 'Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей (23.02.07)' },
        { id: 'electrical', name: 'Монтаж, наладка и эксплуатация электрооборудования (08.02.09)' },
        { id: 'electricalEquipment', name: 'Техническая эксплуатация электрического оборудования (13.02.11)' },
        { id: 'waterSupply', name: 'Водоснабжение и водоотведение (08.02.04)' },
        { id: 'mechatronics', name: 'Мехатроника и мобильная робототехника (15.02.10)' },
        { id: 'physicalEdu', name: 'Физическая культура (49.02.01)' }
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith('doc-')) {
            const docName = name.replace('doc-', '');
            setFormData({
                ...formData,
                requiredDocuments: {
                    ...formData.requiredDocuments,
                    [docName]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
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

    const getDocumentsText = () => {
        const docs = [];
        if (formData.requiredDocuments.passport) docs.push('Паспорт');
        if (formData.requiredDocuments.certificate) docs.push('Аттестат');
        if (formData.requiredDocuments.photos) docs.push('Фотографии 3х4');
        if (formData.requiredDocuments.snils) docs.push('СНИЛС');
        if (formData.requiredDocuments.medicalCertificate) docs.push('Медицинская справка');

        return docs.join(', ');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const phonePattern = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        if (!phonePattern.test(formData.phone)) {
            alert('Пожалуйста, введите корректный номер телефона в формате +7(XXX)XXX-XX-XX');
            return;
        }

        if (!formData.specialty) {
            alert('Пожалуйста, выберите специальность');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('pending');

        try {
            const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2);
            setApplicationId(uniqueId);

            const selectedSpecialty = specialties.find(s => s.id === formData.specialty)?.name || formData.specialty;
            const documentsText = getDocumentsText();

            const templateParams = {
                to_email: formData.email,
                to_name: formData.fullName,
                specialty: selectedSpecialty,
                education_type: formData.educationType,
                phone: formData.phone,
                documents: documentsText,
                additional_info: formData.additionalInfo || 'Не указано',
                application_id: uniqueId
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

            setSuccessData({
                fullName: formData.fullName,
                email: formData.email,
                specialty: selectedSpecialty,
                educationType: formData.educationType
            });

            setFormData({
                fullName: '',
                email: '',
                phone: '',
                specialty: '',
                educationType: '9 классов',
                requiredDocuments: {
                    passport: true,
                    certificate: true,
                    photos: true,
                    snils: true,
                    medicalCertificate: true
                },
                additionalInfo: '',
                agreement: false
            });

            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 7000);

        } catch (error) {
            console.error('Ошибка при отправке:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="documents-modal-title">
                {submitStatus === 'success' ? 'Заявка отправлена!' : 'Подать документы'}
            </h2>

            {submitStatus === 'success' ? (
                <div className="documents-success-message">
                    <p>Спасибо за подачу заявления!</p>
                    <p>На почту {successData.email} отправлено письмо с подтверждением.</p>
                    <p><strong>ФИО:</strong> {successData.fullName}</p>
                    <p><strong>Специальность:</strong> {successData.specialty}</p>
                    <p><strong>Образование:</strong> {successData.educationType}</p>
                    <p><strong>Номер заявки:</strong> {applicationId}</p>
                    <p className="documents-notification">Наш сотрудник свяжется с вами в ближайшее время для уточнения информации о подаче документов.</p>
                    <Button variant="green" onClick={onClose} className="documents-form-submit">
                        Закрыть
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="documents-application-form">
                    <div className="documents-form-group">
                        <label htmlFor="fullName" className="documents-form-label">ФИО полностью</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Иванов Иван Иванович"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="documents-form-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="documents-form-group">
                        <label htmlFor="email" className="documents-form-label">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="documents-form-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="documents-form-group">
                        <label htmlFor="phone" className="documents-form-label">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+7(XXX)XXX-XX-XX"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className="documents-form-input"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="documents-form-group">
                        <label htmlFor="specialty" className="documents-form-label">Специальность</label>
                        <select
                            id="specialty"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            className="documents-form-select"
                            required
                            disabled={isSubmitting}
                        >
                            <option value="">Выберите специальность</option>
                            {specialties.map(specialty => (
                                <option key={specialty.id} value={specialty.id}>
                                    {specialty.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="documents-form-group">
                        <label className="documents-form-label">Тип образования</label>
                        <div className="documents-radio-group">
                            <label className="documents-radio-label">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="9 классов"
                                    checked={formData.educationType === '9 классов'}
                                    onChange={handleChange}
                                    className="documents-radio-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-radio-text">9 классов</span>
                            </label>
                            <label className="documents-radio-label">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="11 классов"
                                    checked={formData.educationType === '11 классов'}
                                    onChange={handleChange}
                                    className="documents-radio-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-radio-text">11 классов</span>
                            </label>
                        </div>
                    </div>

                    <div className="documents-form-group">
                        <label className="documents-form-label">Документы для подачи</label>
                        <div className="documents-checkbox-list">
                            <label className="documents-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="doc-passport"
                                    checked={formData.requiredDocuments.passport}
                                    onChange={handleChange}
                                    className="documents-checkbox-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-checkbox-text">Паспорт (оригинал и копия)</span>
                            </label>
                            <label className="documents-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="doc-certificate"
                                    checked={formData.requiredDocuments.certificate}
                                    onChange={handleChange}
                                    className="documents-checkbox-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-checkbox-text">Аттестат (оригинал и копия)</span>
                            </label>
                            <label className="documents-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="doc-photos"
                                    checked={formData.requiredDocuments.photos}
                                    onChange={handleChange}
                                    className="documents-checkbox-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-checkbox-text">Фотографии 3х4 (6 шт.)</span>
                            </label>
                            <label className="documents-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="doc-snils"
                                    checked={formData.requiredDocuments.snils}
                                    onChange={handleChange}
                                    className="documents-checkbox-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-checkbox-text">СНИЛС (оригинал и копия)</span>
                            </label>
                            <label className="documents-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="doc-medicalCertificate"
                                    checked={formData.requiredDocuments.medicalCertificate}
                                    onChange={handleChange}
                                    className="documents-checkbox-input"
                                    disabled={isSubmitting}
                                />
                                <span className="documents-checkbox-text">Медицинская справка по форме 086/у</span>
                            </label>
                        </div>
                    </div>

                    <div className="documents-form-group">
                        <label htmlFor="additionalInfo" className="documents-form-label">Дополнительная информация</label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            placeholder="Укажите дополнительную информацию, если необходимо"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="documents-form-textarea"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="documents-form-group documents-checkbox-group">
                        <label className="documents-checkbox-label">
                            <input
                                type="checkbox"
                                name="agreement"
                                checked={formData.agreement}
                                onChange={handleChange}
                                className="documents-checkbox-input"
                                required
                                disabled={isSubmitting}
                            />
                            <span className="documents-checkbox-text">
                                Я подтверждаю, что ввожу свои данные добровольно и ознакомился с
                                <a href="/privacy" className="documents-form-link"> Политикой конфиденциальности</a> и
                                <a href="/terms/data-processing" className="documents-form-link"> Правилами обработки персональных данных</a>
                            </span>
                        </label>
                    </div>

                    {submitStatus === 'error' && (
                        <div className="documents-error-message">
                            Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.
                        </div>
                    )}

                    <Button
                        variant="green"
                        type="submit"
                        className="documents-form-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </Button>
                </form>
            )}
        </Modal>
    );
};

export default SubmitDocumentsModal; 