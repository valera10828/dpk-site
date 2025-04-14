import React, { useState } from 'react';
import './CareerProspects.scss';
import {
  FaCode, FaGlobe, FaDatabase, FaServer, FaDesktop, FaMobile, FaShieldAlt, FaProjectDiagram,
  FaLaptopCode, FaChartLine, FaClock, FaGraduationCap, FaCloud, FaNetworkWired,
  FaCarBattery, FaCar, FaIndustry, FaTools, FaBolt, FaLightbulb, FaBuilding,
  FaWrench, FaWater, FaRecycle, FaMapMarkedAlt, FaRunning, FaUsers,
  FaChalkboardTeacher, FaClipboardList, FaTrophy, FaWindowRestore, FaLinux,
  FaExchangeAlt, FaMicrochip, FaRobot, FaCubes, FaSearchPlus
} from 'react-icons/fa';

const CareerProspects = ({ title = "Карьерные перспективы", careers = [] }) => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'FaCode': return <FaCode />;
      case 'FaLaptopCode': return <FaLaptopCode />;
      case 'FaProjectDiagram': return <FaProjectDiagram />;
      case 'FaChartLine': return <FaChartLine />;
      case 'FaClock': return <FaClock />;
      case 'FaGraduationCap': return <FaGraduationCap />;
      case 'FaGlobe': return <FaGlobe />;
      case 'FaDatabase': return <FaDatabase />;
      case 'FaServer': return <FaServer />;
      case 'FaDesktop': return <FaDesktop />;
      case 'FaMobile': return <FaMobile />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaCloud': return <FaCloud />;
      case 'FaNetworkWired': return <FaNetworkWired />;
      case 'FaCarBattery': return <FaCarBattery />;
      case 'FaCar': return <FaCar />;
      case 'FaIndustry': return <FaIndustry />;
      case 'FaTools': return <FaTools />;
      case 'FaBolt': return <FaBolt />;
      case 'FaLightbulb': return <FaLightbulb />;
      case 'FaBuilding': return <FaBuilding />;
      case 'FaWrench': return <FaWrench />;
      case 'FaWater': return <FaWater />;
      case 'FaRecycle': return <FaRecycle />;
      case 'FaMapMarkedAlt': return <FaMapMarkedAlt />;
      case 'FaRunning': return <FaRunning />;
      case 'FaUsers': return <FaUsers />;
      case 'FaChalkboardTeacher': return <FaChalkboardTeacher />;
      case 'FaClipboardList': return <FaClipboardList />;
      case 'FaTrophy': return <FaTrophy />;
      case 'FaWindowRestore': return <FaWindowRestore />;
      case 'FaLinux': return <FaLinux />;
      case 'FaExchangeAlt': return <FaExchangeAlt />;
      case 'FaMicrochip': return <FaMicrochip />;
      case 'FaRobot': return <FaRobot />;
      case 'FaCubes': return <FaCubes />;
      case 'FaSearchPlus': return <FaSearchPlus />;

      case 'fa-code': return <FaCode />;
      case 'fa-globe': return <FaGlobe />;
      case 'fa-database': return <FaDatabase />;
      case 'fa-server': return <FaServer />;
      case 'fa-desktop': return <FaDesktop />;
      case 'fa-mobile': return <FaMobile />;
      case 'fa-shield-alt': return <FaShieldAlt />;
      case 'fa-project-diagram': return <FaProjectDiagram />;
      case 'fa-laptop-code': return <FaLaptopCode />;
      case 'fa-chart-line': return <FaChartLine />;
      case 'fa-clock': return <FaClock />;

      default: return <FaGraduationCap />;
    }
  };

  const getMaxSalary = () => {
    if (!careers || careers.length === 0) return "0₽";

    const salaryValues = careers.map(career => {
      let salaryText = career.salaryRange || career.salary || '';

      if (salaryText.includes('-')) {

        salaryText = salaryText.split('-').pop();
      } else if (salaryText.includes('от')) {
        salaryText = salaryText.replace('от', '').trim();
      }

      const numericValue = salaryText.replace(/[^\d]/g, '');
      return numericValue ? parseInt(numericValue, 10) : 0;
    });
    const maxSalary = Math.max(...salaryValues, 0);
    return new Intl.NumberFormat('ru-RU').format(maxSalary) + '₽';
  };

  return (
    <section className="career-prospects">
      <div className="career-prospects__inner">
        <h2 className="career-prospects__title">{title}</h2>

        <div className="career-prospects__container">
          <div className="career-prospects__visual">
            <div className="career-prospects__stats">
              {careers.length > 0 && (
                <>
                  <div className="career-prospects__stat-item">
                    <div className="career-prospects__stat-number">{careers.length}</div>
                    <div className="career-prospects__stat-label">Вариантов карьеры</div>
                  </div>
                  <div className="career-prospects__stat-item">
                    <div className="career-prospects__stat-number">
                      {getMaxSalary()}
                    </div>
                    <div className="career-prospects__stat-label">Средняя зарплата</div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="career-prospects__cards-accordion">
            {careers.map((career, index) => (
              <div
                key={index}
                className={`career-prospects__card ${activeCard === index ? 'career-prospects__card--active' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="career-prospects__card-header">
                  <div className="career-prospects__icon">
                    {getIconComponent(career.icon)}
                  </div>
                  <h3 className="career-prospects__position">{career.position}</h3>
                  <div className="career-prospects__expand-icon">
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="career-prospects__card-content">
                  <p className="career-prospects__description">{career.description}</p>
                  {(career.salary || career.salaryRange) && (
                    <div className="career-prospects__salary">
                      <span>Средняя зарплата:</span> {career.salaryRange || career.salary}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProspects;