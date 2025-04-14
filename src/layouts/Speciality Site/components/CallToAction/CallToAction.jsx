import React from 'react'
import "./CallToAction.scss"
import {Link} from "react-router-dom";
import CardInfo from "../../../../components/ui/CardInfo/CardInfo";

const CallToAction = () => {
  return (
    <div className="to-main-button-container">
      <Link to="/" className="btm-to-main"> <CardInfo title="На главную" value="←"/></Link>
      <Link to="/specialities" className="btm-to-main"> <CardInfo title="Все специальности" value="→"/></Link>
    </div>
  )
}

export default CallToAction;