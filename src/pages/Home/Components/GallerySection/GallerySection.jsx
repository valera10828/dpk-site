import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import './GallerySection.scss';

import img1 from '../../../../assets/img/img/Gallery/1.jpg';
import img2 from '../../../../assets/img/img/Gallery/2.jpg';
import img3 from '../../../../assets/img/img/Gallery/3.jpg';
import img4 from '../../../../assets/img/img/Gallery/4.jpg';
import img5 from '../../../../assets/img/img/Gallery/5.jpg';
import img6 from '../../../../assets/img/img/Gallery/6.jpg';
import img7 from '../../../../assets/img/img/Gallery/7.jpg';
import img8 from '../../../../assets/img/img/Gallery/8.jpg';
import img9 from '../../../../assets/img/img/Gallery/9.jpg';
import img10 from '../../../../assets/img/img/Gallery/10.jpg';
import img11 from '../../../../assets/img/img/Gallery/11.jpg';
import img12 from '../../../../assets/img/img/Gallery/12.jpg';
import img13 from '../../../../assets/img/img/Gallery/13.jpg';
import img14 from '../../../../assets/img/img/Gallery/14.jpg';

const galleryImages = [
  [
    [
      { url: img1, size: 'large' },
      { url: img2, size: 'medium' }
    ],
    [
      { url: img3, size: 'medium' },
      { url: img4, size: 'large' }
    ]
  ],
  [
    [
      { url: img5, size: 'medium' },
      { url: img6, size: 'large' }
    ],
    [
      { url: img7, size: 'large' },
      { url: img8, size: 'medium' }
    ]
  ],
  [
    [
      { url: img9, size: 'large' },
      { url: img10, size: 'medium' }
    ],
    [
      { url: img11, size: 'medium' },
      { url: img12, size: 'large' }
    ]
  ],
  [
    [
      { url: img13, size: 'medium' },
      { url: img14, size: 'large' }
    ],
    [
      { url: img1, size: 'large' },
      { url: img2, size: 'medium' }
    ]
  ]
];

const allImages = galleryImages.reduce((acc, slide) => {
  slide.forEach(row => {
    row.forEach(image => {
      acc.push(image.url);
    });
  });
  return acc;
}, []);

const GallerySection = () => {
  const [fullscreenActive, setFullscreenActive] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const fullscreenSwiperRef = useRef(null);

  const openFullscreenGallery = (imageUrl) => {
    const imageIndex = allImages.findIndex(url => url === imageUrl);
    setInitialSlide(imageIndex);
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    setFullscreenActive(true);
  };

  const closeFullscreenGallery = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    setFullscreenActive(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && fullscreenActive) {
        closeFullscreenGallery();
      } else if (fullscreenActive && fullscreenSwiperRef.current) {
        if (e.key === 'ArrowLeft') {
          fullscreenSwiperRef.current.swiper.slidePrev();
        } else if (e.key === 'ArrowRight') {
          fullscreenSwiperRef.current.swiper.slideNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);

      if (fullscreenActive) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };
  }, [fullscreenActive]);

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-section__container">
          <div className="gallery-section__header">
            <h2 className="gallery-section__title">ЖИЗНЬ КОЛЛЕДЖА</h2>
          </div>

          <div className="gallery-section__slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.gallery-section__nav-prev',
                nextEl: '.gallery-section__nav-next'
              }}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              style={{ height: '100%' }}
            >
              {galleryImages.map((slide, slideIndex) => (
                <SwiperSlide key={slideIndex} style={{ height: '100%' }}>
                  <div className="gallery-section__slide">
                    {slide.map((row, rowIndex) => (
                      <div key={rowIndex} className="gallery-section__row">
                        {row.map((image, imageIndex) => (
                          <div
                            key={imageIndex}
                            className={`gallery-section__item gallery-section__item--${image.size}`}
                            onClick={() => openFullscreenGallery(image.url)}
                          >
                            <img
                              src={image.url}
                              alt={`Жизнь колледжа ${slideIndex * 4 + rowIndex * 2 + imageIndex + 1}`}
                              className="gallery-section__image"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="gallery-section__navigation">
              <button className="gallery-section__nav-prev">
                <span>&#10094;</span>
              </button>
              <button className="gallery-section__nav-next">
                <span>&#10095;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`fullscreen-gallery ${fullscreenActive ? 'fullscreen-gallery--active' : ''}`}
        onClick={(e) => {
          if (e.target.classList.contains('fullscreen-gallery__slide') ||
            e.target.classList.contains('fullscreen-gallery')) {
            closeFullscreenGallery();
          }
        }}
      >
        <button className="fullscreen-gallery__close" onClick={closeFullscreenGallery}>
          &#10005;
        </button>

        <div className="fullscreen-gallery__container">
          <Swiper
            ref={fullscreenSwiperRef}
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            initialSlide={initialSlide}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: '.fullscreen-gallery__nav-prev',
              nextEl: '.fullscreen-gallery__nav-next'
            }}
            pagination={{ clickable: true }}
            loop={true}
            keyboard={{
              enabled: true,
              onlyInViewport: false,
            }}
            mousewheel={true}
            centeredSlides={true}
          >
            {allImages.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="fullscreen-gallery__slide">
                  <img
                    src={imageUrl}
                    alt={`Полноэкранное изображение ${index + 1}`}
                    className="fullscreen-gallery__image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="fullscreen-gallery__navigation">
            <button className="fullscreen-gallery__nav-prev">
              <span>&#10094;</span>
            </button>
            <button className="fullscreen-gallery__nav-next">
              <span>&#10095;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySection;