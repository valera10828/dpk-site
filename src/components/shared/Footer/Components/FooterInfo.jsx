import React from 'react';
import logo from "../../../../assets/img/logo/logo3.png";
import SocialIcons from "../Information/SocialIcon";

const FooterInfo = () => (
    <div className="footer__column footer__info">
        <div className="info__logo">
            <a href='/'>
                <img src={logo} alt="Лого Колледжа" className="info__logo-img" />
            </a>
            <p className="info__text">
                Государственное бюджетное профессиональное образовательное учреждение
                Донецкий политехнический колледж
            </p>
        </div>
        <div className="info__social social">
            <h3 className="social__title">Социальные сети</h3>
            <div className="social__icons">
                <SocialIcons IconName="telegramIcon" href="telegram" />
                <SocialIcons IconName="vkIcon" href="vk" />
                <SocialIcons IconName="odnoclassnikiIcon" href="odnoclassniki" />
            </div>
        </div>
    </div>
);

export default FooterInfo;