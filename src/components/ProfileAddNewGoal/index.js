import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './profileAddNewGoal.css';

class ProfileAddNewGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_rating: 0,
      account_image_url: "",
      account_notes: "",
      is_complete: false,
      date_complete: (new Date()).toLocaleDateString(),
      account_id: parseInt(localStorage.UserID, 10),
      peak_id: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  handleChange(event) {
    let newPeakID = {...this.state.peak_id}
    newPeakID = parseInt(event.target.value, 10);
    this.setState({peak_id: newPeakID});
  }

  addNew(event) {
    event.preventDefault();
    this.props.addNewGoal(localStorage.UserID, this.state);
    
  }

  render() {
    const peaks = this.props.peaks.map((peak, index) => {
      return <option key={peak.peak_id} value={peak.peak_id}>{peak.peak_name}</option>
    });

    return (
      <form className="add-new-form" onSubmit={this.addNew}>
        <span>
          <select onChange={this.handleChange}>
            <option>Pick A New CO14 to Scale</option>
            {peaks}
          </select>
          <button type="submit" className="add-button">ADD</button>
        </span>
      </form>
    );
  }
}

export default ProfileAddNewGoal;

ProfileAddNewGoal.propTypes = {
  peaks: PropTypes.array.isRequired
}
