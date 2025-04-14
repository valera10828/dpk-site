import React from 'react'
import upcomingEvents from "./informationNews";
import './News.scss';
import Title from "../../components/ui/Title/Title";
import CardNewsContainer from "../../components/ui/CardNewsContainer/CardNewsContainer";
const News = () => {
  return (
    <div className='Container-news'>
      <Title title="Новости" />
      <CardNewsContainer events={upcomingEvents} />
    </div>
  )
}

export default News;