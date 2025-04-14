import React from 'react';
import CardInfo from '../../../components/ui/CardInfo/CardInfo';
import './CollegeInfoSection.scss';

const CollegeInfoSection = () => {
  const infoCards = [
    { id: 1, title: 'Год основания', value: '1929' },
    { id: 2, title: 'Выпускников', value: '1 млн+' },
    { id: 3, title: 'Партнеры', value: '15+' },
    { id: 4, title: 'Специальности', value: '10+' }
  ];

  return (
    <section className="college-info">
      <div className="container">
        <div className="college-info__cards">
          {infoCards.map((card) => (
            <CardInfo
              key={card.id}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeInfoSection;
