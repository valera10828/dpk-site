import React from 'react';
import { Link } from 'react-router-dom';
import './CardSpecials.scss';

const SpecialtyCard = ({
    image,
    title,
    code,
    url,
    ...props
}) => {
    return (
        <div className="specialty--card" {...props}>
            <Link to={url} className="specialty--card__image-container">
                <img src={image} alt={title} className="specialty--card__image"  loading="lazy"/>
            </Link>

            <div className="specialty--card__content">
                <Link to={url} className="specialty--card__title-link">
                    <h3 className="specialty--card__title">{title}</h3>
                </Link>

                <p className="specialty--card__code">Код специальности {code}</p>

                <div className="specialty--card__footer">
                    <Link to={`${url}/`} className="specialty--card__button specialty--card__button--full-time">
                        очная
                    </Link>
                    <Link to={`${url}/`} className="specialty--card__button specialty--card__button--online">
                        онлайн
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialtyCard;
