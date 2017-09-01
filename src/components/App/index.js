import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import './app.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <section className="body">
        <Header />
        <Main />
        <Footer className="footer"/>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
