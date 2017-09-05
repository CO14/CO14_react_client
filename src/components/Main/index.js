import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from '../Home';
import Peaks from '../Peaks';
import About from '../About';
import Contact from '../Contact';
import Signup from '../Signup';
import ProfileEdit from '../ProfileEdit';
import Profile from '../Profile';
import PrivacyPolicy from '../PrivacyPolicy';

import isLoggedIn from '../../utilities/isLoggedIn';

import './main.css';

const Main = () => {
  return(
    <main className="body_content">
      <Switch>
        <Route exact path="/" render={() => (isLoggedIn() ? <Redirect to="/profile/" /> : <Home />)}/>
        <Route path="/peaks" component={Peaks} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile/edit" component={ProfileEdit} />
        <Route path="/profile/" component={Profile} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </main>

  );
}

export default Main;
