import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './global.css';

import Store from './store';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const CO14 = (
  <Provider store={Store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

render(CO14, document.getElementById('root'));

registerServiceWorker();
