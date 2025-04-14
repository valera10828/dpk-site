import React, { useState } from 'react';
import './Curriculum.scss';

const Curriculum = ({ title = "Учебный план", courses = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="curriculum">
      <div className="curriculum__inner">
        <h2 className="curriculum__title">{title}</h2>

        {courses.length > 0 && (
          <div className="curriculum__content">
            <div className="curriculum__tabs">
              {courses.map((course, index) => (
                <button
                  key={index}
                  className={`curriculum__tab ${activeTab === index ? 'curriculum__tab--active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {course.semester ? `${course.semester} семестр` : `Курс ${index + 1}`}
                </button>
              ))}
            </div>

            <div className="curriculum__details">
              <h3 className="curriculum__subtitle">{courses[activeTab].title}</h3>
              {courses[activeTab].description && (
                <p className="curriculum__description">{courses[activeTab].description}</p>
              )}

              {courses[activeTab].subjects && courses[activeTab].subjects.length > 0 && (
                <div className="curriculum__subjects">
                  <h4 className="curriculum__subjects-title">Дисциплины:</h4>
                  <ul className="curriculum__subjects-list">
                    {courses[activeTab].subjects.map((subject, index) => (
                      <li key={index} className="curriculum__subject-item">
                        <span className="curriculum__subject-name">{subject.name}</span>
                        {subject.hours && (
                          <span className="curriculum__subject-hours">{subject.hours} ч.</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Curriculum;
