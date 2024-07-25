import React from 'react';
import './Legend.css';

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="box available"></div>
        <span>Available</span>
      </div>
      <div className="legend-item">
        <div className="box busy"></div>
        <span>Busy</span>
      </div>
    </div>
  );
};

export default Legend;
