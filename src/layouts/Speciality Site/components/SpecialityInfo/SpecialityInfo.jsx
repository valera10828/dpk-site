import React from 'react';
import './SpecialityInfo.scss';
import {
  FaLaptopCode, FaProjectDiagram, FaChartLine, FaBriefcase, FaGraduationCap,
  FaClock, FaCode, FaDatabase, FaServer, FaDesktop, FaMobile, FaShieldAlt,
  FaTools, FaCogs, FaCarBattery, FaIndustry, FaClipboardCheck, FaCar,
  FaBolt, FaLightbulb, FaBuilding, FaHardHat, FaWrench, FaExchangeAlt,
  FaCloud, FaWater, FaRecycle, FaMapMarkedAlt, FaRunning, FaUsers,
  FaChalkboardTeacher, FaHeartbeat, FaClipboardList, FaTrophy, FaWindowRestore,
  FaLinux, FaNetworkWired, FaMicrochip, FaRobot, FaCubes, FaMemory,
  FaWifi, FaSearchPlus
} from 'react-icons/fa';

const SpecialityInfo = ({
  title = "О специальности",
  description = "",
  features = []
}) => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'FaCode': return <FaCode />;
      case 'FaLaptopCode': return <FaLaptopCode />;
      case 'FaProjectDiagram': return <FaProjectDiagram />;
      case 'FaChartLine': return <FaChartLine />;
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaGraduationCap': return <FaGraduationCap />;
      case 'FaClock': return <FaClock />;
      case 'FaDatabase': return <FaDatabase />;
      case 'FaServer': return <FaServer />;
      case 'FaDesktop': return <FaDesktop />;
      case 'FaMobile': return <FaMobile />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaTools': return <FaTools />;
      case 'FaCogs': return <FaCogs />;
      case 'FaCloud': return <FaCloud />;
      case 'FaNetworkWired': return <FaNetworkWired />;

      case 'FaCarBattery': return <FaCarBattery />;
      case 'FaCar': return <FaCar />;
      case 'FaIndustry': return <FaIndustry />;
      case 'FaClipboardCheck': return <FaClipboardCheck />;

      case 'FaBolt': return <FaBolt />;
      case 'FaLightbulb': return <FaLightbulb />;
      case 'FaBuilding': return <FaBuilding />;
      case 'FaHardHat': return <FaHardHat />;
      case 'FaWrench': return <FaWrench />;

      case 'FaWater': return <FaWater />;
      case 'FaRecycle': return <FaRecycle />;
      case 'FaMapMarkedAlt': return <FaMapMarkedAlt />;
      case 'FaRunning': return <FaRunning />;
      case 'FaUsers': return <FaUsers />;
      case 'FaChalkboardTeacher': return <FaChalkboardTeacher />;
      case 'FaHeartbeat': return <FaHeartbeat />;
      case 'FaClipboardList': return <FaClipboardList />;
      case 'FaTrophy': return <FaTrophy />;

      case 'FaWindowRestore': return <FaWindowRestore />;
      case 'FaLinux': return <FaLinux />;
      case 'FaExchangeAlt': return <FaExchangeAlt />;
      case 'FaWifi': return <FaWifi />;

      case 'FaMicrochip': return <FaMicrochip />;
      case 'FaRobot': return <FaRobot />;
      case 'FaCubes': return <FaCubes />;
      case 'FaMemory': return <FaMemory />;
      case 'FaSearchPlus': return <FaSearchPlus />;

      case 'fa-laptop-code': return <FaLaptopCode />;
      case 'fa-project-diagram': return <FaProjectDiagram />;
      case 'fa-chart-line': return <FaChartLine />;
      case 'fa-briefcase': return <FaBriefcase />;
      case 'fa-graduation-cap': return <FaGraduationCap />;
      case 'fa-clock': return <FaClock />;
      case 'fa-code': return <FaCode />;

      default: return <FaGraduationCap />;
    }
  };

  return (
    <section className="speciality-info">
      <div className="speciality-info__inner">
        <h2 className="speciality-info__title">{title}</h2>

        <div className="speciality-info__content">
          {description && (
            <p className="speciality-info__description">{description}</p>
          )}

          {features.length > 0 && (
            <div className="speciality-info__features">
              {features.map((feature, index) => (
                <div key={index} className="speciality-info__feature">
                  <div className="speciality-info__feature-icon">
                    {getIconComponent(feature.icon)}
                  </div>
                  <div className="speciality-info__feature-content">
                    <h3 className="speciality-info__feature-title">{feature.title}</h3>
                    <p className="speciality-info__feature-text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpecialityInfo;
