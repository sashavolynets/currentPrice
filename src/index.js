import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.scss';
//import 'macro-css';

import App from './App';
import { Provider } from 'react-redux';
import store from './redux';

console.log(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
