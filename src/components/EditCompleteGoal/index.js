import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUserGoal } from '../../actions/actions.account';

import '../EditIncompleteGoal/editgoal.css';

class EditCompleteGoal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  async removeGoal(event) {
    event.preventDefault();
    const id = this.props.peak.account_peak_id;
    const request = { id };
    await this.props.removeUserGoal(localStorage.UserID, request);
    this.props.history.push('/');
  }

  render() {
    const {peak} = this.props;
    console.log(peak);
    return (
      <section className="edit-goal-section">
        <div className="edit-goal-header">
          <div><span className="edit-goal-title">PEAK: </span>{peak.peak_name}</div>
          <div><span className="edit-goal-title">RANGE: </span>{peak.range_name}</div>
          <div><span className="edit-goal-title">ELEVATION: </span>{peak.elevation}</div>
          <div><span className="edit-goal-title">DIFFICULTY: </span>{peak.difficulty}</div>
        </div>
        <div className="edit-goal-wrapper">
          <div>
            <img className="edit-goal-image" src={peak.peak_image_url} alt={peak.name}/><br/>
          </div>
          <div>
            <form>
              <p>RATING: {peak.account_rating}</p>
              <p>COMPLETED: {peak.date_complete}</p>
              <p>NOTES: {peak.account_notes}</p>
              <button className="remove-button" onClick={this.removeGoal.bind(this)}>REMOVE</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({removeUserGoal}, dispatch);
};

export default connect(null, mapDispatchToProps)(EditCompleteGoal);
