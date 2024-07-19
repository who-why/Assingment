import React from 'react';
import './Home.css';
import Revenue from '../Revenue/Revenue';
import BarChart from '../Barchart/Barchart';
import OrderChart from '../OrderChart/OrderChart';
import Popular from '../Popular/Popular';
import Prefer from '../Prefer/Prefer';

const Home = () => {
  const cardData = [
    {
      title: 'Weekly Sales',
      amount: '$ 12,000',
      description: 'Up 3.3% in the last week',
    },
    {
      title: 'Daily Sales',
      amount: '$ 4,000',
      description: 'Up 4.2% in the last day',
    },
    {
      title: 'Average Order Size',
      amount: '$ 780',
      description: 'Up 1.5% in the last month',
    },
  ];

  return (
    <div className="home1">
      <div className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <p className="title">{card.title}</p>
            <span className="amount">{card.amount}</span>
            <p className="description">{card.description}</p>
          </div>
        ))}
        <div className="earnings-card">
          <div className="card-content">
            <div className="header">
              <div className="total-earned">
                <p>TOTAL EARNED</p>
                <span>₹ 12000</span>
              </div>
              <div className="upsells">
                <p>UPSELLS</p>
                <span>₹ 3000</span>
              </div>
            </div>
            <div className="footer">
              <p>You earned ₹ 3000 more than the last month.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="left">
          <Revenue />
          <BarChart />
          <Popular/>
        </div>

        <div className="right">
          <OrderChart/>
          <Prefer/>
        </div>
      </div>
    </div>
  );
};

export default Home;
