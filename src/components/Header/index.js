import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import LoginForm from "../LoginForm";
import isLoggedIn from "../../utilities/isLoggedIn";

import "./header.css";

const HeaderHome = () => {
  return (
    <div className="header-layout">
      <Logo />
      <div className="login-nav">
        <Navigation />
        <LoginForm />
      </div>
    </div>
  );
};

const HeaderProfile = () => {
  return (
    <div className="header-layout">
      <Logo />
      <div className="login-nav">
        <Navigation />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="container">
      {isLoggedIn() ? <HeaderProfile /> : <HeaderHome />}
    </header>
  );
};

export default Header;
