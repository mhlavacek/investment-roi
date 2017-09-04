import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// todo: load tickers here and pass in to 

let tickers = []; // load from func

ReactDOM.render(<App tickers={tickers} />, 
  document.getElementById('root'));
registerServiceWorker();
