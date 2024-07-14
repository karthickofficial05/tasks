// src/components/EarningsCard.js
import React from 'react';
import './EarningCard.css';
import graphImage from './image/graph.jpg';


const EarningsCard = () => {
  return (
    <div className="earnings-card">
      <div className="earnings-header">Your earnings</div>
      <div className="earnings-amount">$30.00</div>
      <div className="earnings-payout">Next payout in: <br /> <strong>10,550 pts </strong></div>
      <div className="earnings-chart">
      <img src={graphImage} alt="graphImage" />
      </div>
    </div>
  );
};

export default EarningsCard;
