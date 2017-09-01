import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {loginAction} from '../../actions/';

import './loginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        email: '',
        password: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    const account = this.state.account;
    account[name] = value;
    return this.setState({[name]: value});
  }

  submitLogin(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form className="form-style" onSubmit={this.submitLogin}>
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.account.email}
          onChange={this.onInputChange}
        />
        <input
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
  return {
    actions: bindActionCreators(loginAction ,dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
