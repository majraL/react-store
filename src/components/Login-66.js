import React, { Component } from 'react';

const Login = props => (
  <div className="inventory">
    <nav className="login">
      <h2 className="title main">Inventory Login</h2>
      <hr />
      <button
        className="btn github"
        onClick={() => props.authenticate("Github")}
      >
        Github Login
      </button>
      <button
        className="btn twitter"
        onClick={() => props.authenticate("Twitter")}
      >
        Twitter Login
      </button>
      <button
        className="btn facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Facebook Login
      </button>
    </nav>
  </div>
);

export default Login;
