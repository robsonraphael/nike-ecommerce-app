import React from 'react';
import ReactDOM from 'react-dom/client';

/* Components */
import Header from './components/header.js';
import Main from './components/main.js';
import Menu from './components/menu.js'

/* CSS */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Header />
      <Main />
      <Menu />
    </React.StrictMode>,
);