import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css'

import Header from './components/Header'
import Movies from './components/Movies'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Movies />
  </React.StrictMode>,
  document.getElementById('root')
);
