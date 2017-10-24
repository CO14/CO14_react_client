import React from "react";

import BANNER_IMG from "../../images/landing-mid.jpg";

import "./homeBanner.css";

const HomeBanner = props => {
    return (
        <section>
            <img src={BANNER_IMG} alt="" className="banner-image" />
        </section>
    );
};

export default HomeBanner;
