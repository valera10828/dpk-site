import React from 'react';
import ContactsIcon from "../Information/ContactsIcon";
import InfoCollege from "../Information/Info";

const FooterContact = () => {
    const { contacts } = InfoCollege[0];

    return (
        <div className="footer__column footer__contact">
            <h3 className="contact__title">Контакты</h3>
            <div className="contact__details">
                <div className="contact__item">
                    <ContactsIcon IconName="phoneIcon" href="tel:+79493099818" />
                    <div className="contact__text">
                        <a href="tel:+79493099818">{contacts.phone1}</a>
                        <a href="tel:+79496381022">{contacts.phone2}</a>
                    </div>
                </div>
                <div className="contact__item">
                    <ContactsIcon IconName="EmailIcon" href="mailto:dpt1929@mail.ru" />
                    <div className="contact__text">
                        <a href="mailto:dpt1929@mail.ru">{contacts.email}</a>
                    </div>
                </div>
                <div className="contact__item">
                    <ContactsIcon IconName="MapIcon" href={contacts.addressLink} />
                    <div className="contact__text">
                        <a
                            href={contacts.addressLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contacts.address}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContact;