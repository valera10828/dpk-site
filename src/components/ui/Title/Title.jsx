import React from 'react';
import './Title.scss';

const Title = ({
    title,
    ...props
}) => {
    return (
        <div className="section-title" {...props}>
            <h2 className="section-title__text">{title}</h2>
        </div>
    );
};

export default Title;    