import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import LoginForm from '../LoginForm';

// If loggedin Show Header Splash Page else Show Header Profile Page
// Header Splash has:
// Logo, Navigation, Login

const HeaderHome = props => {
  return (
    <div>
      <Logo />
      <Navigation/>
      <LoginForm />
    </div>
  );
};

const HeaderProfile = props => {
  return (
    <div>
      <Logo />
      <Navigation/>
    </div>
  );
};

const Header = props => {
  return(
    <header className="header_layout">
      <HeaderHome />
      {/* {(!loggedIn) ? <HeaderProfile/> : <header />} */}
    </header>
  );
}

export default Header;
