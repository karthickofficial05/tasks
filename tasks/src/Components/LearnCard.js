import React from 'react';
import './LearnCard.css';
import { TbMathGreater } from "react-icons/tb";

const LearnCard = () => {
  return (
    <div className="learn-more-card">
      <div className="learn-more-content">
        
        <div className="learn-more-message">
          <p>Any products I should <br /> be interested in?</p>
        </div>

        <div className="learn-more-message2">
          <p>Where do I mostly shop <br /> during winter season?</p>
        </div>

        <div className="learn-more-message3">
          <p>How much money I <br />saved on discounts?</p>
        </div>

      </div>
      <div className="learn-more-footer">

        <div className="learn-more-header">
          Learn more from your data <br /> and make better decisions
          <button className='greater-button'> <TbMathGreater /> </button>
        </div>
        
      </div>
    </div>
  );
};

export default LearnCard;
