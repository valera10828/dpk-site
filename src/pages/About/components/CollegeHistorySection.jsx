import React from 'react';
import './CollegeHistorySection.scss';

const CollegeHistorySection = () => {
  return (
    <section className="college-history">
      <div className="container">
        <div className="college-history__content">
          <h2 className="college-history__title">История и традиции</h2>
          <div className="college-history__text-columns">
            <div className="college-history__column">
              <p>
                Донецкий политехнический колледж имеет богатую историю, начавшуюся в 1929 году. 
                За десятилетия своего существования мы стали одним из ведущих образовательных учреждений региона, 
                подготовившим тысячи высококвалифицированных специалистов для различных отраслей экономики.
              </p>
              <p>
                Наш колледж постоянно развивается, внедряя инновационные технологии обучения 
                и совершенствуя образовательные программы в соответствии с современными требованиями рынка труда. 
                Мы гордимся нашими выпускниками, многие из которых занимают руководящие должности 
                в ведущих компаниях страны.
              </p>
            </div>
            <div className="college-history__column">
              <p>
                Образовательный процесс в колледже построен на сочетании теоретических знаний 
                и практических навыков. Мы активно сотрудничаем с ведущими предприятиями региона, 
                что позволяет нашим студентам получать реальный опыт работы еще в процессе обучения.
              </p>
              <p>
                Помимо учебной деятельности, большое внимание уделяется воспитательной работе, 
                развитию творческих способностей и формированию активной жизненной позиции студентов. 
                В колледже организованы различные кружки, секции и клубы по интересам, 
                проводятся культурно-массовые и спортивные мероприятия.
              </p>
            </div>
          </div>
          <div className="college-history__stats">
            <div className="college-history__stat-item">
              <span className="college-history__stat-number">94%</span>
              <span className="college-history__stat-description">выпускников трудоустраиваются по специальности</span>
            </div>
            <div className="college-history__stat-item">
              <span className="college-history__stat-number">87%</span>
              <span className="college-history__stat-description">студентов продолжают обучение в вузах</span>
            </div>
            <div className="college-history__stat-item">
              <span className="college-history__stat-number">25+</span>
              <span className="college-history__stat-description">образовательных программ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeHistorySection;
