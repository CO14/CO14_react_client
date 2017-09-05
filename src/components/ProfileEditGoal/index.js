import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchUserProfile} from '../../actions/actions_account';

import LoadingIcon from '../LoadingIcon';

const CompleteNewGoal = () => {
  return (
    <form>
      This is a Goal
    </form>
  );
}

const UpdateCompletedGoal = () => {
  return (
    <form>
      this is complete
    </form>
  );
}

class ProfileEditGoal extends Component {
  componentDidMount() {
    this.props.fetchUserProfile(localStorage.UserID)
  }

  render() {
    if (!this.props.isReceived) {
      return (<LoadingIcon />);
    } else {
      const {profile, match} = this.props;
      const peakProp = profile.peak;
      const peak = peakProp.find(peak => {
        return peak.account_peak_id === parseInt(match.params.peak_account_ID, 10);
      });
      const isComplete = peak.is_complete;
      return(
        <section className="container">
          {isComplete ? <UpdateCompletedGoal/> : <CompleteNewGoal />}
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
