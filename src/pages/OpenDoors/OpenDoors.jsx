import React, { useState } from 'react'
import './OpenDoors.scss'
import Button from "../../components/ui/Button/Button";
import { Link } from 'react-router-dom';
import TextOpenDoors from "./TextOpenDoors";
import RegOpenDoorsForm from "./Modal/ModalRegOpenDoors";
import Title from "../../components/ui/Title/Title";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

const OpenDoors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='open-doors-page'>
      <Title title="День открытых дверей" />

      <div className='open-doors'>
        <aside className='open-doors__aside'>
          <div className="open-doors__sticky-container">
            <div className="open-doors__link-container">
              <Link to="/news" className='open-doors__link'>Все Новости</Link>
            </div>

            <div className="open-doors__event-card">
              <div className="open-doors__date">
                <div className="open-doors__date-number">15</div>
                <div className="open-doors__date-month">Февраль</div>
              </div>

              <div className="open-doors__details">
                <div className="open-doors__detail-item">
                  <FaCalendarAlt className="open-doors__detail-icon" />
                  <span>Суббота</span>
                </div>

                <div className="open-doors__detail-item">
                  <FaClock className="open-doors__detail-icon" />
                  <span><strong>12:00</strong></span>
                </div>

                <div className="open-doors__detail-item">
                  <FaMapMarkerAlt className="open-doors__detail-icon" />
                  <span>Главный корпус ДПК</span>
                </div>

                <div className="open-doors__detail-item">
                  <FaVideo className="open-doors__detail-icon" />
                  <span>Очно / Онлайн</span>
                </div>
              </div>

              <Button
                variant="green"
                className="open-doors__button"
                onClick={openModal}
              >
                Записаться на мероприятие
              </Button>

              <div className="open-doors__counter">
                <div className="open-doors__counter-item">
                  <span className="open-doors__counter-number">56</span>
                  <span className="open-doors__counter-label">Уже записались</span>
                </div>
                <div className="open-doors__counter-item">
                  <span className="open-doors__counter-number">23</span>
                  <span className="open-doors__counter-label">Дня до события</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="open-doors__content">
          <TextOpenDoors />

          <div className="open-doors__cta">
            <h3 className="open-doors__cta-title">Не упустите возможность узнать больше о колледже!</h3>
            <p className="open-doors__cta-text">
              Зарегистрируйтесь сейчас, чтобы получить приглашение и дополнительные материалы.
              Мы ждем вас на Дне открытых дверей ДПК!
            </p>
            <Button
              variant="green"
              className="open-doors__cta-button"
              onClick={openModal}
            >
              Зарегистрироваться
            </Button>
          </div>
        </main>
      </div>

      <RegOpenDoorsForm
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

export default OpenDoors;