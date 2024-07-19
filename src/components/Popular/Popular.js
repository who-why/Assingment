import React from 'react';
import './Popular.css';

const Popular= () => {
  const foods = [
    { name: 'Biryani', orders: 120, percentage: 54 },
    { name: 'Burger', orders: 67, percentage: 22 },
    { name: 'Pizza', orders: 36, percentage: 13 },
    { name: 'Chicken Tikka', orders: 35, percentage: 11 },
  ];

  return (
    <div className="popular-food-container">
      <h3>MOST Popular Food</h3>
      {foods.map((food, index) => (
        <div key={index} className="food-item">
          <div className="food-info">
            <span className="food-name">{food.name}</span>
            <span className="food-orders">{food.orders} orders in this month</span>
            <span className="food-percentage">{food.percentage}%</span>
          </div>
          <div className="food-bar">
            <div
              className="food-progress"
              style={{ width: `${food.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
