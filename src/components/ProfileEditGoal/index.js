import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchUserProfile} from '../../actions/actions_account';

import EditCompleteGoal from '../EditCompleteGoal';
import EditIncompleteGoal from '../EditIncompleteGoal';

import LoadingIcon from '../LoadingIcon';

class ProfileEditGoal extends Component {
  componentDidMount() {
    this.props.fetchUserProfile(localStorage.UserID)
  }

  render() {
    if (!this.props.isReceived) {
      return (<LoadingIcon />);
    } else {
      console.log(this.props);
      const {profile, match} = this.props;
      const peakProp = profile.peak;
      const peak = peakProp.find(peak => {
        return peak.account_peak_id === parseInt(match.params.peak_account_ID, 10);
      });
      const isComplete = peak.is_complete;
      return(
        <section className="container">
          {isComplete ? <EditCompleteGoal/> : <EditIncompleteGoal />}
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isReceived: state.account.isReceived,
    profile: state.account.profile
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchUserProfile}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditGoal);
