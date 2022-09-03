import React from 'react';
import './card.css';


const SocialCard = ({userData}) => {
  return (
    <div className='card'>
    
    <div className="card__body">
    <div className='card__title'>{userData.gym_name}</div>
        <div className="card__rating">{userData.rating}</div>
        <div className="card__address">{userData.address1}{userData.address2}</div>
        <div className="card__distance">{userData.distance_text}{userData.duration_text}</div>
        <div className="card__plans">{userData.plan_price}{userData.plan_duration}</div>
        <div className="card__offer">{userData.offer}</div>
    </div>
    <div className='btn'>Book Now</div>
    </div>
  )
}
export default SocialCard
