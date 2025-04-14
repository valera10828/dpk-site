import React, { useEffect, useRef } from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
    const startXRef = useRef(0);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleTouchStart = (event) => {
            startXRef.current = event.touches[0].clientX;
        };

        const handleTouchEnd = (event) => {
            const endX = event.changedTouches[0].clientX;
            const diffX = startXRef.current - endX;

            if (diffX > 50) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('touchstart', handleTouchStart);
            document.addEventListener('touchend', handleTouchEnd);

            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);

            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="modal-close" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;