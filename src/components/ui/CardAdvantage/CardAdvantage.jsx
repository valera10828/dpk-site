import React from 'react';
import './CardAdvantage.scss';

const AdvantageCard = ({
    icon,
    title,
    description,
    ...props
}) => {
    return (
        <div className="advantage-card" {...props}>
            <div className="advantage-card__icon-wrapper">
                <img src={icon} alt={title} className="advantage-card__icon" loading="lazy"/>
            </div>
            <div className="advantage-card__content">
                <h3 className="advantage-card__title">{title}</h3>
                <p className="advantage-card__description">{description}</p>
            </div>
        </div>
    );
};

export default AdvantageCard;
