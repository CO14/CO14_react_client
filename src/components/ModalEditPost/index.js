import React, {Component} from 'react';

import Modal from 'react-modal';

import TextField from '../TextField';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      peak: {
        account_image_url: '',
        date_complete: ''
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
  this.setState({modalIsOpen: true});
  }

  closeModal() {
  this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Edit Post">
        <form>
          <TextField
            className="input"
            type="text"
            name="account_image_url"
            placeholder="Image URL"
            value={this.state.peak.account_image_url}
            onChange={this.onInputChange}
          />
          <TextField
            className="input"
            type="date"
            name="date_complete"
            placeholder="Date Complete"
            value={this.state.peak.date_complete}
            onChange={this.onInputChange}
          />

        </form>
        <button className="button" onClick={this.closeModal}>Close</button>
      </Modal>
    );
  }
}

export default Modal;
