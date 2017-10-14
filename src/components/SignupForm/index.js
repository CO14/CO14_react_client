import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {userSignupRequest, updateLoginForm} from '../../actions/actions.auth';
import {addNewGoal} from '../../actions/actions.account';
import TextField from '../TextField';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.submitSignup = this.submitSignup.bind(this);
  }

  submitSignup(event) {
    event.preventDefault();
    const {first_name, last_name, email, password} = this.props;
    const account = {
      first_name,
      last_name,
      email,
      password
    };
    this.props.userSignupRequest(account).then(() => {
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
    }).catch(error => console.log(error));
  }

  render() {
    if (this.state.redirectToProfile) {
      return (<Redirect push to={`/profile/`}/>);
    }

    return (
      <form className="" onSubmit={this.submitSignup}>
        <TextField
          className="input"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={this.props.first_name}
          onChange={event => this.props.updateLoginForm({property: 'first_name', value: event.target.value})}
        />
        <TextField
          className="input"
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={this.props.last_name}
          onChange={event => this.props.updateLoginForm({property: 'last_name', value: event.target.value})}
        />
        <TextField
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          value={this.props.email}
          onChange={event => this.props.updateLoginForm({property: 'email', value: event.target.value})}
        />
        <TextField
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={this.props.password}
          onChange={event => this.props.updateLoginForm({property: 'password', value: event.target.value})}
        />
        <button type="submit" className="button">Sign up</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userSignupRequest,
    addNewGoal,
    updateLoginForm
  }, dispatch);
};

const mapStateToProps = (state) => {
  const {first_name, last_name, email, password, redirectToProfile} = state.auth;
  return {first_name, last_name, email, password, redirectToProfile};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
