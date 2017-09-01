import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import {userSignupRequest} from '../../actions/actions_auth';

import TextField from '../TextField';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToProfile: false,
      account: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const account = this.state.account;
    account[name] = value;
    return this.setState({[name]: value});
  }

  submitSignup(event) {
    event.preventDefault();
    this.props.userSignupRequest(this.state.account)
    .then(res => {
      this.setState({redirectToProfile: true});
    });
  }

  render() {
    if (this.state.redirectToProfile) {
      return (
        <Redirect push to={`/profile/${localStorage.UserID}`} />
      );
    }

    return (
      <form className="" onSubmit={this.submitSignup}>
        <TextField
          className="input"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={this.state.account.firstName}
          onChange={this.onInputChange}
        />
        <TextField
          className="input"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={this.state.account.lastName}
          onChange={this.onInputChange}
        />
        <TextField
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.account.email}
          onChange={this.onInputChange}
        />
        <TextField
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.account.password}
          onChange={this.onInputChange}
        />

        <button type="submit" className="button">Sign up</button>

      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({userSignupRequest}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignupForm);
