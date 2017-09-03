import React from 'react';



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
          <a className="edit-button">
            <i className="fa fa-pencil fa-lg"></i>
          </a>
        </small>
      </td>
    </tr>
  );
}

export default ProfileListItem;
