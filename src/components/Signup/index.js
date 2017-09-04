import React from 'react';

import SignupForm from '../SignupForm';

import './signup.css';

const Signup = props => {
  return(
    <section className="container">
      <h1>Create A New Account</h1>
      <div className="signup-wrapper">
        <div>
          
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </section>
  );
}

export default Signup;
