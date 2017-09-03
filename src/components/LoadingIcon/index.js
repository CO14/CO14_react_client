import React from 'react';

import './loading.css'

const LoadingIcon = props => {
  return(
    <div className="cssload-container">
      <div className="cssload-triangles">
        <div className="cssload-tri cssload-invert"></div>
        <div className="cssload-tri cssload-invert"></div>
        <div className="cssload-tri"></div>
        <div className="cssload-tri cssload-invert"></div>
        <div className="cssload-tri cssload-invert"></div>
        <div className="cssload-tri"></div>
        <div className="cssload-tri cssload-invert"></div>
        <div className="cssload-tri"></div>
        <div className="cssload-tri cssload-invert"></div>
      </div>
    </div>
  );
}

export default LoadingIcon;
