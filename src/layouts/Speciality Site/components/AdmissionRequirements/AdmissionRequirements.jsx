import React from 'react';
import './AdmissionRequirements.scss';


const AdmissionRequirements = ({ 
  title = "Требования для поступления", 
  requirements = [], 
  admissionInfo = {} 
}) => {
  return (
    <section className="admission-requirements">
      <div className="admission-requirements__inner">
        <h2 className="admission-requirements__title">{title}</h2>
        
        <div className="admission-requirements__container">
          <div className="admission-requirements__list-container">
            <h3 className="admission-requirements__subtitle">Необходимые документы</h3>
            <ul className="admission-requirements__list">
              {requirements.map((requirement, index) => (
                <li key={index} className="admission-requirements__item">{requirement}</li>
              ))}
            </ul>
          </div>
          
          <div className="admission-requirements__info">
            <h3 className="admission-requirements__subtitle">Информация о программе</h3>
            <div className="admission-requirements__info-grid">
              {admissionInfo.duration && (
                <div className="admission-requirements__info-item">
                  <div className="admission-requirements__info-label">Срок обучения</div>
                  <div className="admission-requirements__info-value">{admissionInfo.duration}</div>
                </div>
              )}
              
              {admissionInfo.studyForm && (
                <div className="admission-requirements__info-item">
                  <div className="admission-requirements__info-label">Форма обучения</div>
                  <div className="admission-requirements__info-value">{admissionInfo.studyForm}</div>
                </div>
              )}
              
              {admissionInfo.entranceExams && (
                <div className="admission-requirements__info-item">
                  <div className="admission-requirements__info-label">Вступительные испытания</div>
                  <div className="admission-requirements__info-value">{admissionInfo.entranceExams}</div>
                </div>
              )}
              
              {admissionInfo.budget && (
                <div className="admission-requirements__info-item">
                  <div className="admission-requirements__info-label">Бюджетные места</div>
                  <div className="admission-requirements__info-value">{admissionInfo.budget}</div>
                </div>
              )}
              
              {admissionInfo.commercial && (
                <div className="admission-requirements__info-item">
                  <div className="admission-requirements__info-label">Коммерческие места</div>
                  <div className="admission-requirements__info-value">{admissionInfo.commercial}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirements;
