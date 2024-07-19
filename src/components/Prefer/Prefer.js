// src/components/PreferredAddOns.js
import React from 'react';
import './Prefer.css';

const Prefer = () => {
  const addOns = [
    { name: 'Coke', rating: 4.5 },
    { name: 'Gulab Jamun', rating: 4 },
    { name: 'Ras Malai', rating: 3 },
    { name: 'Brownie', rating: 2.5 },
  ];

  return (
    <div className="preferred-add-ons-container">
      <h3>MOST Preferred Add ONs</h3>
      {addOns.map((addOn, index) => (
        <div key={index} className="add-on-item">
          <span className="add-on-name">{addOn.name}</span>
          <div className="add-on-rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`circle ${i < Math.floor(addOn.rating) ? 'filled' : i < addOn.rating ? 'half-filled' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prefer;
