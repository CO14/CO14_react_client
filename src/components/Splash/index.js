import React from 'react';

import SPLASH_IMG from '../../images/header.jpg';

import './splash.css';

const Splash = props => {
  return(
    <section>
      <img src={SPLASH_IMG} alt="Man stanging on top of a mountain" className="splash-image"/>
    </section>

  );
}

export default Splash;
