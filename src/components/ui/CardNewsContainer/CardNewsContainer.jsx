import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardNewsContainer.scss';

const CardNewsContainer = ({ events = [], ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedEvents, setPaginatedEvents] = useState([]);
    const containerRef = useRef(null);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(events.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedEvents(events.slice(startIndex, endIndex));
    }, [currentPage, events]);

    const scrollToTop = () => {
        const yOffset = -100;
        const y = containerRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setTimeout(scrollToTop, 50); 
    };

    const handlePrevPage = () => currentPage > 1 && handlePageChange(currentPage - 1);
    const handleNextPage = () => currentPage < totalPages && handlePageChange(currentPage + 1);

    return (
        <div className="event-cards-wrapper" ref={containerRef}>
            <div className="event-cards-container" {...props}>
                {paginatedEvents.length > 0 ? (
                    paginatedEvents.map((event, index) => (
                        <article key={index} className="event-card">
                            <div className="event-card__date-column">
                                <div className="event-card__date" aria-label={`Дата: ${event.date} ${event.month}`}>
                                    <span className="event-card__day">{event.date}</span>
                                    <span className="event-card__month">{event.month}</span>
                                </div>
                            </div>

                            <div className="event-card__image-column">
                                <Link
                                    to={event.url || '#'}
                                    className="event-card__image-link"
                                    aria-label={`Изображение события: ${event.title}`}
                                >
                                    <img
                                        src={event.image}
                                        alt={`${event.title}`}
                                        className="event-card__image"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/path/to/fallback-image.jpg';
                                        }}
                                    />
                                </Link>
                            </div>

                            <div className="event-card__content-column">
                                <Link to={event.url || '#'} className="event-card__title-link">
                                    <h3 className="event-card__title">{event.title}</h3>
                                </Link>
                                <p className="event-card__description">
                                    {event.description || 'Описание события отсутствует'}
                                </p>
                            </div>
                        </article>
                    ))
                ) : (
                    <p className="event-cards-container__empty">Нет доступных событий</p>
                )}
            </div>
            
            {events.length > itemsPerPage && (
                <div className="pagination-controls">
                    <button 
                        className={`pagination-arrow pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        aria-label="Предыдущая страница"
                    >
                        &#8592;
                    </button>
                    <span className="pagination-info">{currentPage} из {totalPages}</span>
                    <button 
                        className={`pagination-arrow pagination-next ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        aria-label="Следующая страница"
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </div>
    );
};

CardNewsContainer.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            month: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            url: PropTypes.string
        })
    )
};

export default CardNewsContainer;
