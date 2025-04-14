import React from 'react';
import './StarCard.scss';
import backgroundImage from '../../../assets/img/img/beautifulPhotos/fone.jpg';

const StarCard = ({ courseNumber = 'I', starsCount = 1 }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < starsCount; i++) {
            stars.push(
                <span
                    key={i}
                    className="course-card__star"
                    style={{
                        ...(starsCount === 4 && {
                            transform: `rotate(${(i - 1.5) * 35}deg) translateY(-45px)`,
                        }),
                        ...(starsCount === 3 && {
                            transform: `rotate(${(i - 1) * 35}deg) translateY(-45px)`,
                        })
                    }}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="course-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className="course-card__title">{courseNumber} курс</h2>
            <div className={`course-card__stars course-card__stars--count-${starsCount}`}>
                {renderStars()}
            </div>
        </div>
    );
};

export default StarCard;
