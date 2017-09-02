import React, {Component} from 'react';

class ProfileGoals extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default ProfileGoals;

// const eachPeak = this.props.account.peak.map((peak, index) => {
//   return (
//     <tr key={index}>
//       <th scope="row"><img className="goals-image" src={peak.peak_image_url}/></th>
//       <td className="text-center align-middle">
//         <small>{peak.peak_name}</small>
//       </td>
//       <td className="text-center align-middle">
//         <small>{peak.range_name}</small>
//       </td>
//       <td className="text-center align-middle">
//         <small>{peak.elevation}</small>
//       </td>
//       <td className="text-center align-middle">
//         <small>{peak.difficulty}</small>
//       </td>
//       <td className="text-center align-middle">
//         <small>
//           <button className="edit-goal-btn btn" data-id={peak.account_peak_id} data-peak_id={peak.peak_id}>
//             <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
//           </button>
//         </small>
//       </td>
//     </tr>
//   )
// });
