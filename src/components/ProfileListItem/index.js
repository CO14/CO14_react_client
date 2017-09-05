import React from 'react';

import {Link} from 'react-router-dom';

const ProfileListItem = props => {

  return(
    <tr>
      <td><img className="goal-thumbnail" src={props.peak.peak_image_url} alt={props.peak.peak_name}/></td>
      <td className="align-center">
        <small>{props.peak.peak_name}</small>
      </td>
      <td className="align-center">
        <small>{props.peak.range_name}</small>
      </td>
      <td className="align-center">
        <small>{props.peak.elevation}</small>
      </td>
      <td className="align-center">
        <small>{props.peak.difficulty}</small>
      </td>
      <td className="align-center">
        <small>
          <Link className="edit-button" to={`/profile/edit/post/${props.peak.account_peak_id}`}>
            <i className="fa fa-pencil fa-lg"></i>
          </Link>
        </small>
      </td>
    </tr>
  );
}

export default ProfileListItem;
