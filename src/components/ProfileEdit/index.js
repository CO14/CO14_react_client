import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {updateUserProfileRequest, fetchUserProfile} from '../../actions/actions_account';

import TextField from '../TextField';
import LoadingIcon from '../LoadingIcon';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToProfile: false,
      account: {
        id: localStorage.UserID,
        first_name: '',
        last_name: '',
        email: '',
        image: '',
        password: '',
        facebook_url: '',
        instagram_url: '',
        twitter_url: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserProfile(localStorage.UserID);
  }

  onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const account = this.state.account;
    account[name] = value;
    return this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.account);
    this.props.updateUserProfileRequest(this.state.account, localStorage.UserID)
    .then(res => {
      this.setState({redirectToProfile: true});
    });
  }

  render() {
    if (this.state.redirectToProfile) {
      return <Redirect push to={`/profile/`} />
    }
    if (!this.props.isReceived) {
      return (<LoadingIcon />);
    } else {
      return(
        <section className="container">
          <form onSubmit={this.handleSubmit}>
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
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.account.image}
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
            <TextField
              className="input"
              type="text"
              name="facebook_url"
              placeholder="Facebook URL"
              value={this.state.account.facebook_url}
              onChange={this.onInputChange}
            />
            <TextField
              className="input"
              type="text"
              name="instagram_url"
              placeholder="Instagram URL"
              value={this.state.account.instagram_url}
              onChange={this.onInputChange}
            />
            <TextField
              className="input"
              type="text"
              name="twitter_url"
              placeholder="Twitter URL"
              value={this.state.account.twitter_url}
              onChange={this.onInputChange}
            />
            <button type="submit" className="button">Update Profile</button>
          </form>
        </section>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateUserProfileRequest, fetchUserProfile}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isReceived: state.account.isReceived,
    profile: state.account.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
