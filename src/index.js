import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MyProvider } from './components/Context/Context';

ReactDOM.render(
   <MyProvider>
     <App/>
   </MyProvider>
  ,
  document.getElementById('root')
);
