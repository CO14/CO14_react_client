import React from 'react';

import Splash from '../Splash';
import HomeServices from '../HomeServices';
import HomeBanner from '../HomeBanner';

import './home.css';

const Home = props => {
  return(
    <section>
      <Splash />
      <HomeServices />
      <HomeBanner />
    </section>
  );
}

export default Home;
