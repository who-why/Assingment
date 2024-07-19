import React from 'react';
import './Peakhour.css';

const Peakhours = () => {
  const hours = [
    { hour: 2, intensity: 0 },
    { hour: 3, intensity: 1 },
    { hour: 4, intensity: 2 },
    { hour: 5, intensity: 3 },
    { hour: 6, intensity: 4 },
    { hour: 7, intensity: 5 },
    { hour: 8, intensity: 3 },
    { hour: 9, intensity: 2 },
    { hour: 10, intensity: 1 },
    { hour: 11, intensity: 0 },
    { hour: 12, intensity: 0 },
  ];

  return (
    <div className="peak-hours-container">
      <h3>Peak hours</h3>
      <div className="hours-grid">
        {hours.map((hourData, index) => (
          <div key={index} className={`hour-block intensity-${hourData.intensity}`}>
            {hourData.hour}
          </div>
        ))}
      </div>
      <div className="hours-label">
        <span>PM</span>
      </div>
    </div>
  );
};

export default Peakhours;
