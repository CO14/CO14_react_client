import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getUserProfile} from '../../actions/actions_account';

import ProfileList from '../ProfileList';

import './profile.css';

class Profile extends Component {
  componentDidMount() {
    this.props.getUserProfile(localStorage.UserID)
  }
  render() {
    if (!this.props.data.isReceived) {
      return (
        <div>"LOADING..."</div>
      );
    } else {
      return (
        <section className="container">
          <div className="profile-wrapper">
            <div className="align-center">
              <h1 className="list-title">Goals</h1>
              <div className="flex-container">
                <ProfileList data={this.props.data} complete={false} />
              </div>
            </div>
            <div className="align-center">
              <h1 className="list-title">Complete</h1>
              <div className="flex-container">
                <ProfileList data={this.props.data} complete={true} />
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

  const mapStateToProps = (state) => {
    return {data: state.account};
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      getUserProfile
    }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
