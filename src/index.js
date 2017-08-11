import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './main.css';

import Store from './store';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const AppRoutes = (
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

render(AppRoutes, document.getElementById('root'));

registerServiceWorker();
