import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.scss';
import Button from '../../../../components/ui/Button/Button';
import SubmitDocumentsModal from '../../../../components/ui/SubmitDocumentsModal/SubmitDocumentsModal';
import collegeImage from '../../../../assets/img/img/college/College.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChevronDown } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const titleGreenRef = useRef(null);
  const titleBlueRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollArrowRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.hero-section').nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMobile || !heroRef.current) return;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    tl.fromTo(titleGreenRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    )
      .fromTo(titleBlueRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(descriptionRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=1.2"
      )
      .fromTo(scrollArrowRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      );

    gsap.to(scrollArrowRef.current, {
      y: 10,
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut"
    });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "5% top",
      onEnter: () => {
        gsap.to(scrollArrowRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power1.in"
        });
      },
      onLeaveBack: () => {
        gsap.to(scrollArrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out"
        });
      }
    });

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      opacity: 0.7
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      scale: 1.05
    });

  }, [isMobile]);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-section__content">
        <div className="hero-section__text" ref={textRef}>
          <h1 className="hero-section__title">
            <span className="hero-section__title--green" ref={titleGreenRef}>
              Донецкий политехнический колледж
            </span>
            <br />
            <span className="hero-section__title--blue" ref={titleBlueRef}>
              - твой путь к успеху
            </span>
          </h1>
          <p className="hero-section__description" ref={descriptionRef}>
            Государственный колледж предлагает современное образование и
            перспективные специальности. Мы создаем условия для развития
            ваших талантов и навыков.
          </p>
          <div className="hero-section__buttons" ref={buttonsRef}>
            <Button
              variant="green"
              onClick={handleOpenModal}
              aria-label="Подать документы"
            >
              Подать документы
            </Button>
            <Button
              variant="border-main"
              onClick={scrollToNextSection}
              className="hero-section__learn-more-btn"
              aria-label="Узнать больше"
            >
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="hero-section__image" ref={imageRef}>
          <img
            src={collegeImage}
            alt="Здание Донецкого политехнического колледжа"
            loading="eager"
          />
        </div>
      </div>

      <div className="scroll-arrow" ref={scrollArrowRef} onClick={scrollToNextSection}>
        <FaChevronDown />
      </div>

      <SubmitDocumentsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default HeroSection;