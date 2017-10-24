import React from "react";
import { Link } from "react-router-dom";

import CO14_LOGO from "../../images/CO14_logo.png";

import "./logo.css";

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img src={CO14_LOGO} alt="CO14 Logo" className="logo" />
            </Link>
        </div>
    );
};

export default Logo;
