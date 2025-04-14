import React from 'react';
import './SpecialityHighlights.scss';

const SpecialityHighlights = ({ highlights }) => {
    return (
        <div className="speciality-highlights">
            <div className="speciality-highlights__container">
                <h2 className="speciality-highlights__title">{highlights.title}</h2>

                <div className="speciality-highlights__stats">
                    {highlights.stats.map((stat, index) => (
                        <div key={index} className="speciality-highlights__stat-item">
                            <div className="speciality-highlights__stat-number">{stat.number}</div>
                            <div className="speciality-highlights__stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="speciality-highlights__quote-container">
                    <blockquote className="speciality-highlights__quote">
                        <p>{highlights.quote}</p>
                        <cite className="speciality-highlights__author">{highlights.author}</cite>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default SpecialityHighlights;
