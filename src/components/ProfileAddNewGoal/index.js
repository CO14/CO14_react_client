import React from 'react';

import './profileAddNewGoal.css';

const ProfileAddNewGoal = props => {
  const peaks = props.peaks.map((peak, index) => {
    return <option key={peak.peak_id} value={peak.peak_id}>{peak.peak_name}</option>
  });

  return(
    <form className="add-new-form">
      <span>
        <select>
          <option>Pick A New CO14 to Scale</option>
          {peaks}
        </select>
        <button type="submit" className="add-button" onClick={props.addNewGoal}>ADD</button>
      </span>
    </form>
  );
}

export default ProfileAddNewGoal;
