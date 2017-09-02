import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getUserProfile} from '../../actions/actions_account';

import ProfileGoals from '../ProfileGoals';

class Profile extends Component {
  componentDidMount() {
    this.props.getUserProfile(localStorage.UserID)
  }

  render() {
    console.log();
    if (!this.props.data.isReceived) {
      return (
        <div>"LOADING..."</div>
      );
    } else {
      return (
        <div>
          <ProfileGoals data={this.props.data}/>
        </div>
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
