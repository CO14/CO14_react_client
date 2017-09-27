import React from 'react';

import Splash from '../Splash';
import HomeServices from '../HomeServices';
import HomeBanner from '../HomeBanner';
import HomeDetails from '../HomeDetails';

import './home.css';

const Home = () => {
  return(
    <section>
      <Splash />
      <HomeServices />
      <HomeBanner />
      <HomeDetails />
    </section>
  );
}

export default Home;
