import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchUserProfile, fetchPeaks, addNewGoal} from '../../actions/actions_account';

import ProfileUserData from '../ProfileUserData';
import ProfileList from '../ProfileList';
import LoadingIcon from '../LoadingIcon';
import ProfileAddNewGoal from '../ProfileAddNewGoal';

import './profile.css';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUserProfile(localStorage.UserID);
    this.props.fetchPeaks();
  }

  render() {
    if (!this.props.isReceived) {
      return (<LoadingIcon />);
    } else {
      return (
        <section className="container profile-container">
          <ProfileUserData profile={this.props.profile}/>
          <div className="profile-wrapper">
            <div className="align-center">
              <span className="inline">
                <h1 className="list-title">Goals</h1>
                <ProfileAddNewGoal
                  peaks={this.props.peaks}
                  addNewGoal={this.props.addNewGoal}
                  fetchUserProfile={this.props.fetchUserProfile}/>
              </span>
              <div className="flex-container">
                <ProfileList
                  profile={this.props.profile}
                  complete={false}
                  />
              </div>
            </div>
            <div className="align-center">
              <h1 className="list-title">Complete</h1>
              <div className="flex-container">
                <ProfileList
                  profile={this.props.profile}
                  complete={true}
                  />
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isReceived: state.account.isReceived,
    profile: state.account.profile,
    peaks: state.peaks.peaks
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUserProfile,
    fetchPeaks,
    addNewGoal
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
