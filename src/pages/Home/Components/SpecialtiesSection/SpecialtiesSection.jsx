import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialtiesSection.scss';
import SpecialtyCard from '../../../../components/ui/CardSpecials/CardSpecials';

import softwareDevelopmentImg from '../../../../assets/img/img/Specials/ПКС.jpg';
import computerNetworksImg from '../../../../assets/img/img/Specials/КС.jpg';
import informationSystemsImg from '../../../../assets/img/img/Specials/СИП.jpg';
import mechatronicsImg from '../../../../assets/img/img/Specials/РТМ.jpg';
import electricalEquipmentImg from '../../../../assets/img/img/Specials/ТЭО.jpg'
import engineSystemsImg from '../../../../assets/img/img/Specials/ОРАД.jpg';

const specialties = [
  {
    title: "Разработка программного обеспечения",
    code: "09.02.07",
    image: softwareDevelopmentImg,
    url: "/specialities/software-development"
  },
  {
    title: "Компьютерные сети",
    code: "09.02.02",
    image: computerNetworksImg,
    url: "/specialities/computer-networks"
  },
  {
    title: "Информационные системы и программирование",
    code: "09.02.07",
    image: informationSystemsImg,
    url: "/specialities/information-systems-programming"
  },
  {
    title: "Мехатроника и робототехника",
    code: "15.02.10",
    image: mechatronicsImg,
    url: "/specialities/mechatronics-robotics"
  },
  {
    title: "Техническая эксплуатация электрического оборудования",
    code: "13.02.11",
    image: electricalEquipmentImg,
    url: "/specialities/engine-systems-maintenance"
  },
  {
    title: "Техническое обслуживание двигателей",
    code: "23.02.07",
    image: engineSystemsImg,
    url: "/specialities/car-maintenance"
  }
];

const SpecialtiesSection = () => {
  return (
    <section className="specialties-section">
      <div className="specialties-section__container">
        <div className="specialties-section__header">
          <h2 className="specialties-section__title">НАШИ СПЕЦИАЛЬНОСТИ</h2>
          <Link to="/specialities" className="specialties-section__view-all">
            Все специальности→
          </Link>
        </div>
        
        <div className="specialties-section__grid">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              image={specialty.image}
              title={specialty.title}
              code={specialty.code}
              url={specialty.url}
              className="specialties-section__card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
