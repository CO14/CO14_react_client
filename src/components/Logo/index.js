import React from 'react';

import CO14_LOGO from '../../images/CO14_logo.png';

import './logo.css';

const Logo = props => {
  return(
    <div>
      <img src={CO14_LOGO} alt="CO14 Logo" className="logo"/>
    </div>
  );
}

export default Logo;
