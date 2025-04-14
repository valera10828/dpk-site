import React, { useState, useEffect } from 'react';
import './BackToTop.scss';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button 
            className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Прокрутить наверх"
        >
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M12 5L5 12L6.41 13.41L11 8.83V19H13V8.83L17.59 13.41L19 12L12 5Z" 
                    fill="currentColor"
                />
            </svg>
        </button>
    );
};

export default BackToTop;
