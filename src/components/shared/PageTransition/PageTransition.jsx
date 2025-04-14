import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './PageTransition.scss';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const flyingSectionRef = useRef(null);
  const pathRef = useRef(location.pathname);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    checkDeviceSize();

    window.addEventListener('resize', checkDeviceSize);
    
    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, []);

  useEffect(() => {
    if (pathRef.current !== location.pathname && !isMobileOrTablet) {
      const overlay = overlayRef.current;
      const text = textRef.current;
      const flyingSection = flyingSectionRef.current;
      
      if (!overlay || !text || !flyingSection) return;
      
      const tl = gsap.timeline();
      
      tl.to(overlay, {
        duration: 0.5,
        scaleY: 1,
        transformOrigin: 'bottom',
        ease: 'power2.inOut'
      })
      .to(flyingSection, {
        duration: 0.6,
        y: '100vh',
        opacity: 1,
        ease: 'power3.in'
      }, "-=0.3")
      .to(text, {
        duration: 0.4,
        opacity: 1,
        y: 0,
        ease: 'back.out'
      }, "-=0.3")
      .to(text, {
        duration: 0.3,
        opacity: 0,
        y: -30,
        ease: 'power2.in',
        delay: 0.2
      })
      .to(overlay, {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: 'top',
        ease: 'power2.inOut'
      }, "-=0.1");
      
      pathRef.current = location.pathname;
    } else {
      pathRef.current = location.pathname;
    }
  }, [location, isMobileOrTablet]);

  return (
    <div className="page-transition">
      {children}
      <div className="page-transition__overlay" ref={overlayRef}>
        <div className="page-transition__flying-section" ref={flyingSectionRef}></div>
        <div className="page-transition__text" ref={textRef}>
          Донецкий политехнический колледж
        </div>
      </div>
    </div>
  );
};

export default PageTransition;