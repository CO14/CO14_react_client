import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getAccountProfile} from '../../actions/actions_account';

import ProfileGoals from '../ProfileGoals';

class Profile extends Component {
  componentDidMount() {
    this.props.getAccountProfile(localStorage.UserID)
  }

  render() {
    if (!this.props.account) {
      console.log(this.props.account);
      return "LOADING"
    } else {
      console.log(this.props.account);
      return (
        <div>
          <ProfileGoals account={this.props.account}/>
        </div>
      );
    }

  }
}


const mapStateToProps = (state) => {
  return {account: state.account};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAccountProfile}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
