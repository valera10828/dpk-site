import React, { useState } from 'react';
import Button from '../../../components/ui/Button/Button';
import SubmitDocumentsModal from '../../../components/ui/SubmitDocumentsModal/SubmitDocumentsModal';
import ContactsModal from '../../../components/ui/ContactsModal/ContactsModal';
import './CallToAction.scss';

const CallToAction = () => {
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);

  const openDocumentsModal = () => {
    setIsDocumentsModalOpen(true);
  };

  const closeDocumentsModal = () => {
    setIsDocumentsModalOpen(false);
  };

  const openContactsModal = () => {
    setIsContactsModalOpen(true);
  };

  const closeContactsModal = () => {
    setIsContactsModalOpen(false);
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="call-to-action__content">
          <h2 className="call-to-action__title">Готовы стать частью нашего колледжа?</h2>
          <p className="call-to-action__description">
            Присоединяйтесь к нам и получите качественное образование, которое станет надежной основой для вашей будущей карьеры!
          </p>
          <div className="call-to-action__buttons">
            <Button
              variant="green"
              className="call-to-action__button"
              onClick={openDocumentsModal}
            >
              Подать документы
            </Button>
            <Button
              variant="border-main"
              className="call-to-action__button call-to-action__button-contacts"
              onClick={openContactsModal}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      <SubmitDocumentsModal
        isOpen={isDocumentsModalOpen}
        onClose={closeDocumentsModal}
      />

      <ContactsModal
        isOpen={isContactsModalOpen}
        onClose={closeContactsModal}
      />
    </section>
  );
};

export default CallToAction;
