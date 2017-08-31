import React from 'react';

import ICON_GOAL from '../../images/icon_goal.png';
import ICON_PROGRESS from '../../images/icon_progress.png';
import ICON_SHARE from '../../images/icon_share.png';

import './homeServices.css';

const HomeServices = props => {
  return(
    <section className="container">
      <div className="services-wrapper">
        <div>
          <img src={ICON_GOAL} className="icon-size" alt="Goal Icon"/>
          <h2 className="service-header">Set Goals</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <img src={ICON_PROGRESS} className="icon-size" alt="Progress Icon"/>
          <h2 className="service-header">Track Progress</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <img src={ICON_SHARE} className="icon-size" alt="Share Icon"/>
          <h2 className="service-header">Share</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HomeServices;
