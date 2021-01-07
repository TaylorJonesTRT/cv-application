import React, { Component } from 'react';

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello!
        <h1>{this.props.id}</h1>
      </div>
    )
  }
}

export default Personal
