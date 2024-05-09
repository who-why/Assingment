import React from 'react';
import './App.css';

const Button = ({ size, children }) => {
  const btnClass = size === 'big' ? 'btn-big' : 'btn-small';

  return (
    <button className={`btn ${btnClass}`}>
      {children}
    </button>
  );
};

export default Button;
