import React, { Component } from 'react';

const Login = props => (
  <div className="inventory">
    <h2 className="title main">Inventory Login</h2>
    <hr />
    <div className="btn-group">
      <button
        className="btn github"
        onClick={() => props.authenticate("Github")}
      >
        Github
      </button>
      <button
        className="btn twitter"
        onClick={() => props.authenticate("Twitter")}
      >
        Twitter
      </button>
      <button
        className="btn facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Facebook
      </button>
    </div>
  </div>
)

export default Login;
