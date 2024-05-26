import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [fav,setFav]=useState([])

  return (
    <MyContext.Provider value={{movies,setMovies,fav,setFav}}>
      {children}
    </MyContext.Provider>
  );
};