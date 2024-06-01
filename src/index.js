import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MyProvider } from './components/Context/Context';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = 'pk_test_ZXRlcm5hbC1raW5nZmlzaC03OS5jbGVyay5hY2NvdW50cy5kZXYk'


ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <MyProvider>
        <App />
      </MyProvider>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
