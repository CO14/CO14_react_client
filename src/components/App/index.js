import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { API } from '../../utilities/API';
import isLoggedIn from '../../utilities/isLoggedIn';

import Header from '../Header';
import Home from '../Home';
import Peaks from '../Peaks';
import About from '../About';
import Contact from '../Contact';
import Signup from '../Signup';
import ProfileUserEdit from '../ProfileUserEdit';
import ProfileEditGoal from '../ProfileEditGoal';
import Profile from '../Profile';
import PrivacyPolicy from '../PrivacyPolicy';
import Footer from '../Footer';

import './app.css';

class App extends Component {
  componentDidMount() {
    API.serverWakeUp();
  }

  render() {
    return (
      <section className="body">
        <Header />
        <main className="body_content">
          <Switch>
            <Route exact path="/" render={() => (isLoggedIn() ? <Redirect to="/profile/" /> : <Home />)} />
            <Route path="/peaks" component={Peaks} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile/edit/post/:peak_account_ID" component={ProfileEditGoal} />
            <Route path="/profile/edit" component={ProfileUserEdit} />
            <Route path="/profile/" component={Profile} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route render={() => <Redirect to="/"/>}/>
          </Switch>
        </main>
        <Footer className="footer"/>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.account.profile
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
