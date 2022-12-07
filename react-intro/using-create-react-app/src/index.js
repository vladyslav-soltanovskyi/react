import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="greeting">
      <h1 className="greeting__title">Hello, world!</h1>
      <p className="greeting__text">I'm learning React</p>
    </div>
  </React.StrictMode>
);