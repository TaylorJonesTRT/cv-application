import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="logo">CV Application</div>
        <div className="slogan">Create a CV</div>
      </header>
    )
  }
}

export default Header
