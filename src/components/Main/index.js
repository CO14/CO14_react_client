import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Peaks from '../Peaks';
import Contact from '../Contact';
import Signup from '../Signup';

import './main.css';

const Main = props => {
  return(
    <main className="body_content">
      <Switch>
        <Route path="/peaks" component={Peaks} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>

  );
}

export default Main;
