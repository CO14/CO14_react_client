import React from "react";

import "./subscribe.css";

const SubscribeForm = props => {
  return (
    <form className="form-container subscribe-form">
      <input
        className="subscribe-form-item"
        type="text"
        name="text"
        placeholder="Name"
      />
      <input
        className="subscribe-form-item"
        type="email"
        name="email"
        placeholder="email@domain.com"
      />
      <button
        className="subscribe-button subscribe-form-item"
        type="submit"
        name="button"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeForm;
