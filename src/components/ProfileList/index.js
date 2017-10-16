import React from "react";
import PropTypes from "prop-types";

import ProfileListItem from "../ProfileListItem";

import "./profileList.css";

const ProfileList = props => {
  const {peak} = props;

  const peaks = peak.map((peak, index) => {
    return (peak.is_complete === props.complete && (<ProfileListItem peak={peak} key={index}/>));
  });

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <small>Peak</small>
          </th>
          <th>
            <small>Range</small>
          </th>
          <th>
            <small>Elevation</small>
          </th>
          <th>
            <small>Difficulty</small>
          </th>
          <th>
            <small>Edit</small>
          </th>
        </tr>
      </thead>
      <tbody>{peaks}</tbody>
    </table>
  );
};

export default ProfileList;

ProfileList.propTypes = {
  peak: PropTypes.array,
  complete: PropTypes.bool.isRequired,
  editPost: PropTypes.func
};
