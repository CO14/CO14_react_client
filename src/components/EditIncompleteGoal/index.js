import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeUserGoal, updateUserGoal, updateGoalForm } from '../../actions/actions.account';
import TextField from '../TextField';

import './editgoal.css';
import 'react-datepicker/dist/react-datepicker.css';

class EditIncompleteGoal extends Component {
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

  async updateGoal(event) {
    event.preventDefault();
    const { account_rating, account_image_url, account_notes, date_complete } = this.props;
    const { account_peak_id, peak_id } = this.props.peak;
    const request = {
      id: account_peak_id,
      account_rating,
      account_image_url,
      account_notes,
      is_complete: true,
      date_complete: date_complete._d.toLocaleDateString(),
      account_id: localStorage.UserID,
      peak_id
    };
    await this.props.updateUserGoal(localStorage.UserID, request);
    this.props.history.push('/');
  }

  render() {
    const {peak} = this.props;
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
            <form onSubmit={this.updateGoal.bind(this)}>
              <TextField
                className="edit-input"
                type="text"
                name="account_rating"
                placeholder="RATING"
                value={this.props.rating}
                onChange={event => this.props.updateGoalForm({property: 'account_rating', value: event.target.value})}
              />
              <TextField
                className="edit-input"
                type="text"
                name="account_image_url"
                placeholder="IMAGE URL"
                value={this.props.account_image_url}
                onChange={event => this.props.updateGoalForm({property: 'account_image_url', value: event.target.value})}
              />

              <DatePicker
                allowSameDay
                className="edit-input"
                placeholderText="DATE COMPLETE"
                dateFormat="LLL"
                selected={this.props.date_complete}
                onChange={value => this.props.updateGoalForm({property: 'date_complete', value})}
              />

              <textarea
                className="edit-textarea"
                placeholder="NOTES"
                rows="5"
                value={this.props.account_notes}
                onChange={event => this.props.updateGoalForm({property: 'account_notes', value: event.target.value})}>
              </textarea>
              <div className="button-wrapper">
                <button type="button" className="remove-button" onClick={this.removeGoal.bind(this)}>REMOVE</button>
                <button type="submit" className="edit-goal-button">COMPLETE</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    account_rating,
    account_image_url,
    date_complete,
    account_notes
  } = state.account;

  return {
    account_rating,
    account_image_url,
    date_complete,
    account_notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({removeUserGoal, updateUserGoal, updateGoalForm}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditIncompleteGoal);
