import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import setAuthorizationToken from './utilities/setAuthorizationToken';

import './global.css';

import Store from './store';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const CO14 = (
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

setAuthorizationToken(localStorage.Token);

render(CO14, document.getElementById('root'));

registerServiceWorker();
