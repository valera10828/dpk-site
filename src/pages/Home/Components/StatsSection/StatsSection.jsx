import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.scss';
import { Link } from 'react-router-dom';
import Button from '../../../../components/ui/Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const industries = ['IT', 'ОБРАЗОВАТЕЛЬНОЙ', 'МЕХАНИЧЕСКОЙ', 'АВТОМОБИЛЬНОЙ', 'ЭЛЕКТРОТЕХНИЧЕСКОЙ'];
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);
  const buttonRef = useRef(null);
  const bgElementsRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndustryIndex((prevIndex) => (prevIndex + 1) % industries.length);
        setIsAnimating(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, [industries.length, isMobile]);

  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    if (itemsRef.current.length > 0 && itemsRef.current[0]) {
      gsap.fromTo(itemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          scrollTrigger: {
            trigger: itemsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          delay: 0.4,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && sectionRef.current) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      if (headerRef.current) {
        gsap.set(headerRef.current, { y: 0, opacity: 1 });
      }
      
      if (itemsRef.current.length > 0) {
        gsap.set(itemsRef.current, { y: 0, opacity: 1 });
      }
      
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { y: 0, opacity: 1 });
      }
      
      if (bgElementsRef.current.length > 0) {
        gsap.set(bgElementsRef.current, { opacity: 1 });
      }
    }
  }, [isMobile]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-section__background">
        <div className="stats-section__bg-element stats-section__bg-element--1" ref={el => bgElementsRef.current[0] = el}></div>
        <div className="stats-section__bg-element stats-section__bg-element--2" ref={el => bgElementsRef.current[1] = el}></div>
        <div className="stats-section__bg-element stats-section__bg-element--3" ref={el => bgElementsRef.current[2] = el}></div>
      </div>

      <div className="stats-section__header" ref={headerRef}>
        <span className="stats-section__subtitle">О КОЛЛЕДЖЕ</span>
        <h2 className="stats-section__title">
          ЛУЧШЕЕ ОТ{' '}
          <span className={`stats-section__title-highlight ${!isMobile && isAnimating ? 'stats-section__title-highlight--fade' : ''}`}>
            {isMobile ? 'IT' : industries[currentIndustryIndex]}
          </span>{' '}
          ИНДУСТРИИ —
        </h2>
        <span className="stats-section__title--accent">СТУДЕНТАМ</span>
      </div>

      <div className="stats-section__grid">
        <div className="stats-section__item" ref={el => itemsRef.current[1] = el}>
          <div className="stats-section__number">1929</div>
          <div className="stats-section__label">год основания</div>
        </div>
        <div className="stats-section__item" ref={el => itemsRef.current[2] = el}>
          <div className="stats-section__number">15+</div>
          <div className="stats-section__label">партнёров</div>
        </div>
        <div className="stats-section__item" ref={el => itemsRef.current[0] = el}>
          <div className="stats-section__number">1млн+</div>
          <div className="stats-section__label">выпускников</div>
        </div>
        <div className="stats-section__item" ref={el => itemsRef.current[3] = el}>
          <div className="stats-section__number">10+</div>
          <div className="stats-section__label">специальностей</div>
        </div>
      </div>

      <div className="stats-section__button-container" ref={buttonRef}>
        <Link to="/about" className="stats-section__link">
          <Button variant="green" className="stats-section__button">
            УЗНАТЬ БОЛЬШЕ О НАС
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StatsSection;