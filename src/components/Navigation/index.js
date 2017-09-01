import React from 'react';

import {Link} from 'react-router-dom';

import isLoggedIn from '../../utilities/isLoggedIn';

import './navigation.css';

// If loggedin Show Navigation Home Page else Show Navigation Profile Page

const NavigationHome = props => {
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

const NavigationProfile = props => {
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
        <Link to="/" className="nav-links">Logout</Link>
      </li>
    </ul>
  );
};

const Navigation = props => {
  return(
    <nav>
      {(isLoggedIn(localStorage.Token)) ? <NavigationProfile /> : <NavigationHome />}
    </nav>
  );
}

export default Navigation;
