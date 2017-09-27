import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { API } from '../../utilities/API';
import './app.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

class App extends Component {
  componentDidMount() {
    API.serverWakeUp();
  }

  render() {
    return (
      <section className="body">
        <Header />
        <Main profile={this.props.profile}/>
        <Footer className="footer"/>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {
    profile: state.account.profile
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
