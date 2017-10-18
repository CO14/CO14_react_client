import React from 'react';

import './peak.css';

const PeakListItem = (props) => {
  const { peak } = props;
  console.log(peak);
  return(
    <section className="peak-wrapper">
      <div>
        <img src={peak.image_url} alt={peak.peak_name} className="peak-image"/>
      </div>
      <div>
        <div>
          <span className="edit-goal-title">PEAK: </span>
          {peak.peak_name}
        </div>
        <div>
          <span className="edit-goal-title">RANGE: </span>
          {peak.range_name}
        </div>
        <div>
          <span className="edit-goal-title">ELEVATION: </span>
          {peak.elevation}
        </div>
        <div>
          <span className="edit-goal-title">DIFFICULTY: </span>
          {peak.difficulty}
        </div>
      </div>
    </section>
  );
}

export default PeakListItem;
