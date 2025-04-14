import React from 'react'
import "./AdvantagesSection.scss";
import CardAdvantage from "../../../../components/ui/CardAdvantage/CardAdvantage";
import svg1 from "../../../../assets/img/icon/advantages/medal.svg"
import svg2 from "../../../../assets/img/icon/advantages/star.svg"
import svg3 from "../../../../assets/img/icon/advantages/arrow_stair.svg"

const AdvantagesSection = () => {
  return (
    <div className="advantages-section">
      <div className="advantages-section__container">
        <CardAdvantage
          title="Опыт, которому доверяют"
          icon={svg1}
          description="15+ лет успешной подготовки специалистов.
Наши преподаватели — практикующие эксперты ,
дающие  только актуальные знания"
        />
        <CardAdvantage
          title="Яркая студенческая жизнь"
          icon={svg2}
          description="Десятки мероприятий ежегодно — от научных конкурсов до музыкальных фестивалей. Каждый студент найдёт возможности для самореализации."
        />
        <CardAdvantage
          title="Индивидуальный образовательный путь"
          icon={svg3}
          description="Очная, вечерняя и дистанционная формы обучения. Дополнительные программы и льготы для поступающих в вузы-партнёры."
        />
      </div>
    </div>
  )
}

export default AdvantagesSection;
