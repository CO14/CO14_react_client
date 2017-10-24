import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userSignupRequest, updateLoginForm, profileRedirect } from "../../actions/actions.auth";
import { addNewGoal } from "../../actions/actions.account";
import TextField from "../TextField";

class SignupForm extends Component {
    async submitSignup(event) {
        event.preventDefault();
        const { first_name, last_name, email, password } = this.props;
        const account = {
            first_name,
            last_name,
            email,
            password
        };
        await this.props.userSignupRequest(account);
        const initialGoal = {
            account_rating: 0,
            account_image_url: "",
            account_notes: "",
            is_complete: false,
            date_complete: new Date().toLocaleDateString(),
            account_id: parseInt(localStorage.UserID, 10),
            peak_id: 9
        };
        await this.props.addNewGoal(localStorage.UserID, initialGoal);
        if (localStorage.UserID) {
            this.props.profileRedirect();
        };
    }

    render() {
        if (this.props.redirectToProfile) {
            return <Redirect push to={`/profile/`} />;
        }
        return (
            <form className="" onSubmit={this.submitSignup.bind(this)}>
                <TextField
                    className="input"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={this.props.first_name}
                    onChange={event =>
                        this.props.updateLoginForm({
                            property: "first_name",
                            value: event.target.value
                        })}
                />
                <TextField
                    className="input"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.props.last_name}
                    onChange={event =>
                        this.props.updateLoginForm({
                            property: "last_name",
                            value: event.target.value
                        })}
                />
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
                    Sign up
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            userSignupRequest,
            addNewGoal,
            updateLoginForm,
            profileRedirect
        },
        dispatch
    );
};

const mapStateToProps = state => {
    const {
        first_name,
        last_name,
        email,
        password,
        redirectToProfile,
        user
    } = state.auth;
    return { first_name, last_name, email, password, redirectToProfile, user };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
