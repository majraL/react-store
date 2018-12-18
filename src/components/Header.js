import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h2 className="title main">{this.props.headerName}</h2>
      </header>
    );
  }
}

export default Header;
