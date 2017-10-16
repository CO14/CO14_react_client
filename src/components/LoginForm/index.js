import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateLoginForm, userLoginRequest } from "../../actions/actions.auth";
import TextField from "../TextField";

import "./loginForm.css";

class LoginForm extends Component {
  submitLogin(event) {
    event.preventDefault();
    const { email, password } = this.props;
    this.props.userLoginRequest({ email, password });
  }

  render() {
    if (this.props.redirectToProfile) {
      return <Redirect push to={`/profile/`} />;
    }
    return (
      <form className="form-style" onSubmit={this.submitLogin.bind(this)}>
        <TextField
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          value={this.props.email}
          onChange={event =>
            this.props.updateLoginForm({
              property: "email",
              value: event.target.value
            })}
        />
        <TextField
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={this.props.password}
          onChange={event =>
            this.props.updateLoginForm({
              property: "password",
              value: event.target.value
            })}
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateLoginForm,
      userLoginRequest
    },
    dispatch
  );
};

const mapStateToProps = state => {
  const { email, password, redirectToProfile } = state.auth;
  return {
    redirectToProfile,
    email,
    password
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
