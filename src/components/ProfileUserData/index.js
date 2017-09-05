import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// import ProfileEditPost from '../ProfileEditPost';

const ProfileUserData = props => {
  const {profile} = props;

  return(
    <section className="user-profile">
      <div className="inline-profile">
        <div className="inline-profile center-sm">
          <img alt={`${profile.first_name} ${profile.last_name}`} src={profile.profile_image} className="profile-image"/>
          <div className="social-icon-group">
            <h2 className="user-name">{profile.first_name} {profile.last_name}</h2>
            <a href={profile.facebook_url}><i className="fa fa-facebook fa-lg"></i></a>
            <a href={profile.instagram_url} className="social-icons"><i className="fa fa-instagram fa-lg"></i></a>
            <a href={profile.twitter_url} className="social-icons"><i className="fa fa-twitter fa-lg"></i></a>
          </div>
        </div>
        <Link to="/profile/edit"><button className="center-sm edit-button"><i className="fa fa-pencil"></i> Edit Profile</button></Link>
      </div>
    </section>
  );
}

export default ProfileUserData;

ProfileUserData.propTypes = {
  profile: PropTypes.object.isRequired
}
