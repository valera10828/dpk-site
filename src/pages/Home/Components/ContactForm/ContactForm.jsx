import React, { useState } from 'react';
import { Building2, CheckCircle } from 'lucide-react';
import './ContactForm.scss';
import { Link } from 'react-router-dom';
import Modal from '../../../../components/ui/Modal/Modal';

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь может быть код для отправки данных на сервер
    console.debug('Форма отправлена:', formData);

    setIsModalOpen(true);
    setFormData({
      name: '',
      phone: '',
      email: ''
    });
    setIsChecked(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-section__container">
        <div className="contact-section__info">
          <div className="contact-section__logo">
            <Building2 size={48} className="contact-section__logo-icon" />
          </div>
          <h2 className="contact-section__title">Оставьте заявку</h2>
          <p className="contact-section__description">
            И мы поможем подобрать специальность и профессию, расскажем о трудоустройстве
            и студенческой жизни
          </p>
        </div>

        <form className="contact-section__form" onSubmit={handleSubmit}>
          <div className="contact-section__form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="contact-section__input"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="contact-section__form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="contact-section__input"
              placeholder="Номер телефона"
              required
            />
          </div>
          <div className="contact-section__form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="contact-section__input"
              placeholder="Email"
              required
            />
          </div>

          <div className="contact-section__checkbox-group">
            <label className="contact-section__checkbox-label">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="contact-section__checkbox"
              />
              <span className="contact-section__checkbox-custom"></span>
              <span className="contact-section__checkbox-text">
                Даю согласие на {' '}
                <Link to="/privacy" className="contact-section__link">обработку персональных данных</Link>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="contact-section__submit"
            disabled={!isChecked}
          >
            Отправить заявку
            <span className="contact-section__submit-arrow">→</span>
          </button>
        </form>
      </div>

      {/* Используем готовый компонент Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Спасибо за заявку!"
      >
        <div className="contact-form-success">
          <div className="contact-form-success__icon">
            <CheckCircle size={64} className="contact-form-success__check" />
          </div>
          <p className="contact-form-success__message">
            Мы получили вашу заявку и свяжемся с вами в ближайшее время.
          </p>
          <button
            className="contact-form-success__button"
            onClick={closeModal}
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default ContactForm;
