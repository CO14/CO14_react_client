import React, {Component} from 'react';

class ProfileGoals extends Component {
  render() {
    const peak = this.props.data.profile.peak;
    console.log(peak);
    const incompletePeaks = peak.map((peak, index) => {
      return !peak.is_complete ? peak : null;
    })
    return (
      <div>
        
      </div>
    );
  }
}

export default ProfileGoals;
