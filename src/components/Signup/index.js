import React from 'react';

import SignupForm from '../SignupForm';

import './signup.css';

const Signup = props => {
  return(
    <section className="container">
      <h1>Create A New Account</h1>
      <SignupForm />
    </section>
  );
}

export default Signup;
