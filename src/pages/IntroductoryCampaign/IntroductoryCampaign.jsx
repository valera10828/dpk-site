import React from 'react'
import './IntroductoryCampaign.scss'
import Title from "../../components/ui/Title/Title";
import IntroductoryText from "./Components/IntroductoryText";

const IntroductoryCampaign = () => {
  return (
    <div>
     <Title title="Вступительная программа" />
     <IntroductoryText />
    </div>
  )
}

export default IntroductoryCampaign;