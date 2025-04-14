import React from 'react';
import './CardInfo.scss';

const FoundationYearCard = ({ title, value, ...props }) => {

    return (
        <div
            className={`foundation-card`}
            {...props}
        >
            <h3 className="foundation-card__title">{title}</h3>
            <div className="foundation-card__year">{value}</div>
        </div>
    );
};

export default FoundationYearCard;
