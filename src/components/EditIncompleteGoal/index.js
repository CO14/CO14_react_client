import React, {Component} from 'react';

import './editgoal.css';

class EditIncompleteGoal extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    const {peakInfo} = this.props
    return (
      <section className="edit-goal-wrapper">
        <div>
          <img className="edit-goal-image" src={peakInfo.peak_image_url} alt={peakInfo.name}/><br/>
        </div>
        <div>
          <form>
            <input className="edit-input" placeholder="Rating"/>
            <input className="edit-input" placeholder="Image" />
            <input className="edit-input" placeholder="Date Complete"/>
            <textarea className="edit-textarea" placeholder="Notes" rows="5"></textarea>
          </form>
        </div>
      </section>
    );
  }
}

export default EditIncompleteGoal;
