import React from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { FaPhone, FaEnvelope, FaVk, FaTelegram, FaOdnoklassnikiSquare } from 'react-icons/fa';
import './ContactsModal.scss';

const ContactsModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="contacts-modal">
                <h2 className="contacts-modal__title">Наши контакты</h2>

                <div className="contacts-modal__section">
                    <h3 className="contacts-modal__subtitle">Приёмная комиссия</h3>
                    <div className="contacts-modal__item">
                        <FaPhone className="contacts-modal__icon" />
                        <a href="tel:+79493099818" className="contacts-modal__link">+7(949)-309-98-18</a>
                    </div>
                    <div className="contacts-modal__item">
                        <FaEnvelope className="contacts-modal__icon" />
                        <a href="mailto:dpt1929@mail.ru" className="contacts-modal__link">dpt1929@mail.ru</a>
                    </div>
                </div>

                <div className="contacts-modal__section">
                    <h3 className="contacts-modal__subtitle">Социальные сети</h3>
                    <div className="contacts-modal__social-links">
                        <a href="https://vk.com/dpk_fprofessionalitet" target="_blank" rel="noopener noreferrer" className="contacts-modal__social-link">
                            <FaVk />
                        </a>
                        <a href="https://t.me/dpc_news" target="_blank" rel="noopener noreferrer" className="contacts-modal__social-link">
                            <FaTelegram />
                        </a>
                        <a href="https://ok.ru/group/70000001457171/topics" target="_blank" rel="noopener noreferrer" className="contacts-modal__social-link">
                            <FaOdnoklassnikiSquare/>
                        </a>
                    </div>
                </div>

                <div className="contacts-modal__actions">
                    <Button variant="green" onClick={onClose}>Закрыть</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ContactsModal; 