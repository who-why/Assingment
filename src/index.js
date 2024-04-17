import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
import { MyProvider } from './components/Context/Context';

ReactDOM.render(
  
  <Auth0Provider
    domain="dev-z8t52qsenr3zk5p7.us.auth0.com"
    clientId="1fpLFkBRouipjHPBODD7ifVbSM5mzwCY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <MyProvider>
        <App/>
     </MyProvider>
  </Auth0Provider>
  ,
  document.getElementById('root')
);
