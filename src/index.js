import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div align="center">
      <App />
      

      <div class="foot">
          <Footer/>
      </div>
     
    </div>
  </React.StrictMode>
);

reportWebVitals();
