import React, {Component} from 'react';

class EditIncompleteGoal extends Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  render() {
    console.log(this.props.peakInfo);
    const {peakInfo} = this.props
    return (
      <section>
        <img src={peakInfo.peak_image_url} alt={peakInfo.name}/><br/>
        <input className="input" placeholder="Rating"/>
        <input className="input" placeholder="Image" />
        <textarea className="input" placeholder="Notes"></textarea>
        <input className="input" placeholder="Date Complete"/>
      </section>
    );
  }
}

export default EditIncompleteGoal;
