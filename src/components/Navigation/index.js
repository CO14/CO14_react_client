import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userLogout } from '../../actions/actions_auth';
import isLoggedIn from '../../utilities/isLoggedIn';

import './navigation.css';

const NavigationLoggedOut = () => {
  return (
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link to="/peaks" className="nav-links">Peaks</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/about" className="nav-links">About</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/contact" className="nav-links">Contact</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/signup" className="nav-links">Signup</Link>
      </li>
    </ul>
  );
};

const NavigationLoggedIn = props => {
  return (
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link to="/" className="nav-links">Home</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/peaks" className="nav-links">Peaks</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/about" className="nav-links">About</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/contact" className="nav-links">Contact</Link>
      </li>
      <li className="nav-list-item">
        <Link to="/" className="nav-links" onClick={() => props.userLogout()}>Logout</Link>
      </li>
    </ul>
  );
};

const Navigation = props => {
  return(
    <nav>
      {isLoggedIn() ? <NavigationLoggedIn /> : <NavigationLoggedOut /> }
    </nav>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({userLogout}, dispatch)
}

export default connect(null, mapDispatchToProps)(Navigation);
