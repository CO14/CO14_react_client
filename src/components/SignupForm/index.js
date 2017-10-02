import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {userSignupRequest} from '../../actions/actions_auth';
import {addNewGoal} from '../../actions/actions_account';
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
    .then(() => {
      const initialGoal = {
        account_rating: 0,
        account_image_url: "",
        account_notes: "",
        is_complete: false,
        date_complete: (new Date()).toLocaleDateString(),
        account_id: parseInt(localStorage.UserID, 10),
        peak_id: 9
      };
      this.props.addNewGoal(localStorage.UserID, initialGoal)
      .then(() => {
        this.setState({redirectToProfile: true});
      })
    })
    .catch(error => console.log(error));
  }

  render() {
    if (this.state.redirectToProfile) {
      return (
        <Redirect push to={`/profile/`} />
      );
    }

    return (
      <form className="" onSubmit={this.submitSignup}>
        <TextField
          className="input"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={this.state.account.first_name}
          onChange={this.onInputChange}
        />
        <TextField
          className="input"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={this.state.account.last_name}
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
  return bindActionCreators({userSignupRequest, addNewGoal}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignupForm);
