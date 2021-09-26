import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';


ReactDOM.render(
  <App text='Hello' num={20} />,
  document.getElementById('root')
);

console.dir(React);