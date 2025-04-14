import React from 'react'
import './DocumentsCard.scss'
import { Link } from "react-router-dom";
import Photo from '../../../assets/img/img/beautifulPhotos/gray.webp';
const DocumentsCard = ({ title, number, url }) => {
  return (
    <div className="documents">
      <Link to={`${url}`} className="link">
        <img src={Photo} alt="Photos" width={380} height={250} className="documents__img"/>
        <div className="documents__title">
          <h2>{title}</h2>
        </div>
        <div className="documents__number">
          #{number}
        </div>
      </Link>
    </div>

  )
}

export default DocumentsCard;
