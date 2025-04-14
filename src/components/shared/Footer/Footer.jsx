import React from 'react';
import './Footer.scss';
import FooterInfo from './Components/FooterInfo';
import FooterContact from './Components/FooterContact';
import FooterLinks from './Components/FooterLinks';
import FooterMap from './Components/FooterMap';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterInfo />
        <FooterContact />
        <FooterLinks />
        <FooterMap />
        <div className="footer__column footer__copyright">
          <p>© 2025 Донецкий Политехнический Колледж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;