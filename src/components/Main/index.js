import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';

import './main.css';

const Main = props => {
  return(
    <main className="body_content">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </main>

  );
}

export default Main;
