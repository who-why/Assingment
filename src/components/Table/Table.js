import React from 'react';
import './Table.css';

const tables = [
  { id: 'T1', capacity: 4, orders: 0, due: 0 },
  { id: 'T2', capacity: 4, orders: 1, due: 0 },
  { id: 'T3', capacity: 4, orders: 2, due: 600 },
  { id: 'T4', capacity: 4, orders: 1, due: 0 },
  { id: 'T5', capacity: 4, orders: 0, due: 0 },
  { id: 'T6', capacity: 4, orders: 3, due: 0 },
  { id: 'T7', capacity: 4, orders: 0, due: 0 },
  { id: 'T8', capacity: 4, orders: 0, due: 0 },
  { id: 'T9', capacity: 4, orders: 1, due: 600 },
  { id: 'T10', capacity: 4, orders: 1, due: 1234 },
];

const Table = () => {
  return (
    <div className="table-grid">
      {tables.map((table) => (
        <div key={table.id} className={`table ${table.orders > 0 ? 'occupied' : 'available'}`}>
          <div className="table-details">
            <p>Capacity: {table.capacity}</p>
            <p>Orders: {table.orders}</p>
            <p>Due: {table.due ? `₹ ${table.due}` : 'None'}</p>
          </div>
          <div className="table-id">{table.id}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;
