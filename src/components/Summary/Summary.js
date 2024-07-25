import React from 'react';
import './Summary.css';

const orders = [
  {
    id: 1,
    items: [
      { name: 'Paneer Pakoda', quantity: 1, price: 120, pcs: 4 },
      { name: 'Paneer Pakoda', quantity: 2, price: 120, pcs: 4 },
    ],
    itemTotal: 240,
  },
  {
    id: 2,
    items: [
      { name: 'Paneer Pakoda', quantity: 1, price: 120, pcs: 4 },
      { name: 'Paneer Pakoda', quantity: 2, price: 120, pcs: 4 },
    ],
    itemTotal: 240,
  },
];

const Summary = () => {
  const serviceCharge = 30;
  const cgst = 30;
  const sgst = 30;
  const totalPrice = orders.reduce((acc, order) => acc + order.itemTotal, 0) + serviceCharge + cgst + sgst;

  return (
    <div className="order-summary">
      {orders.map((order) => (
        <div key={order.id} className="order">
          <div className="order-header">
            <span>Order {order.id}</span>
            <button>View Details</button>
          </div>
          <div className="order-items">
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <div className="item-name">
                  <div className="item-icon"></div>
                  <span>{item.name}</span>
                </div>
                <div className="item-quantity">{item.quantity}</div>
                <div className="item-price">₹ {item.price}</div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Item Total:</span>
            <span>₹ {order.itemTotal.toFixed(2)}</span>
          </div>
        </div>
      ))}
      <div className="charges">
        <div className="charge-item">
          <span>Service Charge:</span>
          <span>₹ {serviceCharge.toFixed(2)}</span>
        </div>
        <div className="charge-item">
          <span>CGST:</span>
          <span>₹ {cgst.toFixed(2)}</span>
        </div>
        <div className="charge-item">
          <span>SGST:</span>
          <span>₹ {sgst.toFixed(2)}</span>
        </div>
      </div>
      <div className="total-price">
        <span>Total Price:</span>
        <span>₹ {totalPrice.toFixed(2)}</span>
      </div>
      <div className="buttons">
        <button className="btn-kot">PRINT KOT</button>
        <button className="btn-bill">PRINT BILL</button>
      </div>
    </div>
  );
};

export default Summary;
