import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './core/StateProvider';
import reducer, { initialState } from './core/reducer'

ReactDOM.render(

  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,

  document.getElementById('root')
);


