import React from 'react'
import "./ReviewsCard.scss"

const ReviewsCard = ({ name, text, img, course }) => {
  return (
    <div className="review">
      <div className="review__img">
        <img src={img} alt="Photos" width={200} height={400} />
      </div>
      <div className="review__content">
        <div className="review__info-student">
          <div className="review__name">
            {name}
          </div>
          <div className="review__course">
            {course}
          </div>
        </div>
        <div className="review__text">
          {text}
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard;