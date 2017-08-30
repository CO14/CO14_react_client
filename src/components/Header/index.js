import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import LoginForm from '../LoginForm';

import './header.css';

// If loggedin Show Header Splash Page else Show Header Profile Page
// Header Splash has:
// Logo, Navigation, Login

const HeaderHome = props => {
  return (
    <div className="header-layout">
      <Logo />
      <div className="login-nav">
        <Navigation/>
        <LoginForm />
      </div>
    </div>
  );
};

const HeaderProfile = props => {
  return (
    <div className="header-layout">
      <Logo />
      <Navigation/>
    </div>
  );
};

const Header = props => {
  return(
    <header className="container">
      <HeaderHome />
      {/* <HeaderProfile/> */}
      {/* {(loggedIn) ? <HeaderProfile/> : <HeaderHome />} */}
    </header>
  );
}

export default Header;
