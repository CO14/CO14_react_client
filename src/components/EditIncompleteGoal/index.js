import React, {Component} from 'react';

import './editgoal.css';

class EditIncompleteGoal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
              <input className="edit-input" placeholder="Rating"/>
              <input className="edit-input" placeholder="Image" />
              <input className="edit-input" placeholder="Date Complete"/>
              <textarea className="edit-textarea" placeholder="Notes" rows="5"></textarea>
              <div className="button-wrapper">
                <button className="remove-button">REMOVE</button>
                <button className="edit-goal-button">COMPLETE</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default EditIncompleteGoal;
