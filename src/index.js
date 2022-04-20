import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';
import './index.css';
import store from './store/Store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Course />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
