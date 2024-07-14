import React from 'react';
import './ConnectSources.css';
import uberImage from './image/uber.webp'; 
import amazonImage from './image/amazon.png';
import spotifyImage from './image/spotify.png';
import netflixImage from './image/netflix.jpeg';
import { FaApple } from "react-icons/fa";

const ConnectSources = () => {
  return (
    <div className="connect-sources-card">
      <div className="connect-sources-header">Connect sources</div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <div className="connect-sources-icons">
        <div className="up">
          <img src={uberImage} alt="Uber" />
          <img src={amazonImage} alt="amazon" />
        </div>
        <div className="down"> 
          <img src={spotifyImage} alt="spotify" />
          <img src={netflixImage} alt="netflix" />
        </div>
      </div>
      <button className="connect-sources-button">
        <FaApple className='apple-icon' /> 
        Download on the <br /> App Store
      </button>
    </div>
  );
};

export default ConnectSources;
