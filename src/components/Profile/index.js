import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getAccountProfile} from '../../actions/actions_account';

class Profile extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getAccountProfile(localStorage.UserID)
  }

  render() {
    console.log(this.props.account);
    return (
      <div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {account: state.account};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAccountProfile}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
