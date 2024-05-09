import React, { useState } from 'react';
import './App.css';
import Button from './Button';

const Checkbox = ({ label, index, completeTodo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="checkbox-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
      {isHovered && (
        <div className="delete-button" onClick={() => completeTodo(index)}>
          <Button size="big">X</Button>
        </div>
      )}
    </div>
  );
};
export default Checkbox;
