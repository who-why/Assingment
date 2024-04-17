import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [note, setnote] = useState([]);
  const [bgcolor, setbgcolor] = useState('');
  const [newdate,setnewdate]=useState('')

  return (
    <MyContext.Provider value={{ newdate,setnewdate,note, setnote, bgcolor, setbgcolor }}>
      {children}
    </MyContext.Provider>
  );
};
