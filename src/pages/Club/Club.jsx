import React from 'react'
import Title from "../../components/ui/Title/Title";
import './Club.scss';
import Achievements from "./components/Achievements";
import ScheduleClub from "./components/Schedule";
import Logo from "../../assets/img/img/SportClub/sportLogo.jpg"
import AboutClub from "./components/AboutClub";
import JoinClub from "./components/JoinClub";

const Club = () => {
  return (
    <div className="club">
      <div className="club__header">
        <Title title="Спортивный клуб «СОКОЛ»" />
        <div className="club__logo-container">
          <img src={Logo} alt="Логотип спортивного клуба СОКОЛ" className="club__logo" />
        </div>
      </div>
      <AboutClub />
      <section className="club__achievements-section">
        <div className="club__container">
          <h2 className="club__section-title">Наши достижения</h2>
          <Achievements />
        </div>
      </section>


      <JoinClub />


      <section className="club__schedule-section">
        <div className="club__container">
          <h2 className="club__section-title">Расписание тренировок</h2>
          <ScheduleClub />
        </div>
      </section>

    </div>
  )
}

export default Club;