import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "../../actions/actions.auth";
import isLoggedIn from "../../utilities/isLoggedIn";
import "./navigation.css";

const NavigationLoggedOut = () => {
    return (
        <ul className="nav-list">
            <NavLink
                to="/peaks"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">Peaks</li>
            </NavLink>

            <NavLink
                to="/about"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">About</li>
            </NavLink>

            <NavLink
                to="/contact"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">Contact</li>
            </NavLink>

            <NavLink
                to="/signup"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">Signup</li>
            </NavLink>
        </ul>
    );
};

const NavigationLoggedIn = props => {
    return (
        <ul className="nav-list">
            <NavLink to="/" className="nav-links" activeClassName="active-link">
                <li className="nav-list-item">Home</li>
            </NavLink>

            <NavLink
                to="/peaks"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">Peaks</li>
            </NavLink>

            <NavLink
                to="/about"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">About</li>
            </NavLink>

            <NavLink
                to="/contact"
                className="nav-links"
                activeClassName="active-link"
            >
                <li className="nav-list-item">Contact</li>
            </NavLink>

            <Link
                to="/"
                className="nav-links"
                onClick={() => props.userLogout()}
            >
                <li className="nav-list-item">Logout</li>
            </Link>
        </ul>
    );
};

const Navigation = props => {
    return (
        <nav>
            {isLoggedIn() ? (
                <NavigationLoggedIn userLogout={props.userLogout} />
            ) : (
                <NavigationLoggedOut />
            )}
        </nav>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ userLogout }, dispatch );
};

export default connect(null, mapDispatchToProps)(Navigation);
