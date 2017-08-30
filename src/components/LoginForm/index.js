import React from 'react';

import './loginForm.css';

const LoginForm = props => {
  return(
    <form className="form-style">
      <input className="input" placeholder="Email"/>
      <input className="input" placeholder="Password"/>
      <button type="submit" className="button">Login</button>
    </form>
  );
}

export default LoginForm;
