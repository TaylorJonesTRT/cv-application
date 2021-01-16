import React, { Component } from 'react';

class HTMLView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.editView ? (
      null
    ) : (
        <div>hi</div>
    )
  }

}

export default HTMLView;
