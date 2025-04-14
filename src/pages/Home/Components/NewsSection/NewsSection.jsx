import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSection.scss';
import CardNews from '../../../../components/ui/CardNews/CardNews';
import  upcomingEvents  from '../../../News/informationNews';

const NewsSection = () => {
  const latestNews = upcomingEvents.slice(0, 4);

  return (
    <section className="news-section">
      <div className="news-section__container">
        <div className="news-section__header">
          <h2 className="news-section__title">ПОСЛЕДНИЕ НОВОСТИ</h2>
          <Link to="/news" className="news-section__view-all">
            Все Новости→
          </Link>
        </div>
        
        <div className="news-section__grid">
          {latestNews.map((news, index) => (
            <CardNews
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              date={`Март ${news.date}, 2025`}
              url={news.url}
              className="news-section__card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
