import React from 'react'
import "./Achievements.scss"
import diploma1 from "../../../assets/img/img/SportClub/diploma 1.jpg"
import diploma2 from "../../../assets/img/img/SportClub/diploma 2.jpg"
import diploma3 from "../../../assets/img/img/SportClub/diploma 3.jpg"
import diploma4 from "../../../assets/img/img/SportClub/diploma 4.jpg"
import diploma5 from "../../../assets/img/img/SportClub/diploma 5.jpg"
import diploma6 from "../../../assets/img/img/SportClub/diploma 6.jpg"
import diploma7 from "../../../assets/img/img/SportClub/diploma 7.jpg"
import diploma8 from "../../../assets/img/img/SportClub/diploma 8.jpg"


const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievements__container">
        <div className="achievements__container-img">
          <img src={diploma1} alt="diploma1" />
          <img src={diploma2} alt="diploma2" />
          <img src={diploma3} alt="diploma3" />
          <img src={diploma4} alt="diploma4" />
          <img src={diploma5} alt="diploma5" />
          <img src={diploma6} alt="diploma6" />
          <img src={diploma7} alt="diploma7" />
          <img src={diploma8} alt="diploma8" />
        </div>
      </div>
    </div>
  )
}

export default Achievements;