import React from 'react';
import ReviewsCard from '../../../components/ui/ReviewsCard/ReviewsCard';
import './CollegeReviews.scss';
// Импорт Swiper и его стилей
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import student1 from '../../../assets/img/img/Review/student1.jpg';
import student2 from '../../../assets/img/img/Review/student2.webp';
import student3 from '../../../assets/img/img/Review/student3.jpg';
import student4 from '../../../assets/img/img/Review/student4.jpg';
import student5 from '../../../assets/img/img/Review/student5.jpg';

const CollegeReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Анна Иванова',
      course: 'Программирование в компьютерных системах',
      text: 'Когда я выбирала учебное заведение, то остановилась на политехническом колледже, и ни капельки не пожалела. Здесь создана отличная материально-техническая база: современные компьютерные классы с передовым оборудованием. Преподаватели дают актуальные знания, которые уже сейчас помогают мне участвовать в реальных IT-проектах и профессиональных конкурсах.',
      img: student1
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      course: 'Сетевое и системное администрирование',
      text: 'Я учусь в политехническом колледже уже второй год и полностью доволен своим выбором. Особенно ценю практические занятия по настройке сетевого оборудования и серверных систем. Колледж постоянно обновляет материальную базу, что позволяет изучать самые современные технологии и быть готовым к требованиям рынка труда.',
      img: student2
    },
    {
      id: 3,
      name: 'Екатерина Козлова',
      course: 'Мехатроника и мобильная робототехника',
      text: 'Мой путь в политехническом колледже начался с увлечения техникой, которое переросло в серьезное обучение мехатронике и робототехнике. Здесь есть все условия для инженерного развития: современные лаборатории, роботизированные комплексы и опытные наставники. Благодаря колледжу я уже сейчас участвую в соревнованиях по робототехнике и работаю над собственными инновационными проектами.',
      img: student3
    },
    {
      id: 4,
      name: 'Мария Сидорова',
      course: 'Физическая культура',
      text: 'Выбор политехнического колледжа стал для меня судьбоносным решением. Здесь я не только совершенствую спортивные навыки, но и получаю глубокие знания по методике преподавания физкультуры. Колледж предоставляет отличные спортивные залы, площадки и возможность участвовать в соревнованиях городского и федерального уровня.',
      img: student4
    },
    {
      id: 5,
      name: 'Алексей Смирнов',
      course: 'Информационные системы',
      text: 'Поступление в политехнический колледж открыло для меня новые горизонты в IT-сфере. За два года обучения я освоил различные языки программирования и базы данных. Особенно ценю индивидуальный подход преподавателей и возможность работать над проектами, которые впоследствии становятся частью моего профессионального портфолио.',
      img: student5
    },
  ];

  return (
    <section className="college-reviews">
      <div className="container">
        <h2 className="college-reviews__title">Что о нас говорят</h2>
        <div className="college-reviews__slider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{

              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              }
            }}
            className="reviews-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewsCard
                  name={review.name}
                  course={review.course}
                  text={review.text}
                  img={review.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CollegeReviews;
