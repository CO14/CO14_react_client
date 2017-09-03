import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {userLoginRequest} from '../../actions/actions_auth';

import TextField from '../TextField';

import './loginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToProfile: false,
      account: {
        email: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const account = this.state.account;
    account[name] = value;
    return this.setState({[name]: value});
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.userLoginRequest(this.state.account)
    .then( res => {
      this.setState({redirectToProfile: true})
    })
  }

  render() {
    if (this.state.redirectToProfile) {
      return (
        <Redirect push to={`/profile/`} />
      );
    }
    return (
      <form className="form-style" onSubmit={this.submitLogin}>
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
        <button type="submit" className="button">Login</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({userLoginRequest}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
