import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './main.css';

import Store from './store';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const AppRoutes = (
  <Provider store={Store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

render(AppRoutes, document.getElementById('root'));

registerServiceWorker();
