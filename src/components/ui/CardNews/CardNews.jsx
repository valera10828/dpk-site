import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './CardNews.scss';

const CardNews = ({
    image,
    title,
    description,
    date,
    url,
    ...props
}) => {
    return (
        <div className="card-news" {...props}>
            <Link to={url} className="card-news__image-container">
                <img src={image} alt={title} className="card-news__image"  loading="lazy"/>
            </Link>

            <div className="card-news__content">
                <Link to={url} className="card-news__title-link">
                    <h3 className="card-news__title">{title}</h3>
                </Link>

                <p className="card-news__description">{description}</p>

                <div className="card-news__footer">
                    <div className="card-news__date">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{date}</span>
                    </div>

                    <Link to={url} className="card-news__button-link">
                        <Button
                            variant="green"
                            className="card-news__button"
                        >
                            Подробнее
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardNews;
