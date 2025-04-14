import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderLogic = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // 🔥 Логика свайпов для закрытия меню
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;

    if (diffX > 50) {
      setIsMenuOpen(false); // ⬅️ Свайп влево — закрываем меню
    }
    // Если нужно открыть меню свайпом вправо, можно добавить условие:
    // if (diffX < -50) {
    //   setIsMenuOpen(true);
    // }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Обработка клика вне области меню
  const handleOutsideClick = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  // Скрытие шапки при скролле вниз
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsHeaderVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 100));
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Закрытие меню при смене маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return {
    isMenuOpen,
    isHeaderVisible,
    menuRef,
    toggleMenu,
  };
};

export default useHeaderLogic;
