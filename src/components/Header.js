import React, { Component } from 'react';

const Header = (props) => (
  <header>
    <h2 className="title main">{props.headerName}</h2>
  </header>
);

export default Header;
