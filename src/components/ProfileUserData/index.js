import React from "react";
import { Link } from "react-router-dom";

const ProfileUserData = props => {
  const { profile } = props;
  return (
    <section className="user-profile">
      <div className="inline-profile text-align">
        <div className="inline-profile center-sm">
          <img
            alt={`${profile.first_name} ${profile.last_name}`}
            src={profile.profile_image}
            className="profile-image"
          />
          <div className="social-icon-group">
            <h2 className="user-name">
              {profile.first_name} {profile.last_name}
            </h2>
            <a href={profile.facebook_url}>
              <i className="fa fa-facebook fa-lg" />
            </a>
            <a href={profile.instagram_url} className="social-icons">
              <i className="fa fa-instagram fa-lg" />
            </a>
            <a href={profile.twitter_url} className="social-icons">
              <i className="fa fa-twitter fa-lg" />
            </a>
          </div>
        </div>
        <Link to="/profile/edit">
          <button className="center-sm edit-button">
            <i className="fa fa-pencil" /> Edit Profile
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProfileUserData;
