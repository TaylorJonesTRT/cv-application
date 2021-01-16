import React, { Component } from 'react';

class ErrorBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return !this.props.error ? (
      null
    ) : (
        <div className='error-box'>
        <p>{this.props.state.firstNameError}</p>
        <p>{this.props.state.lastNameError}</p>
        <p>{this.props.state.emailError}</p>
        <p>{this.props.state.phoneError}</p>
        <p>{this.props.state.degreeError}</p>
        <p>{this.props.state.schoolError}</p>
        <p>{this.props.state.schoolStartError}</p>
        <p>{this.props.state.schoolEndError}</p>
        <p>{this.props.state.companyError}</p>
        <p>{this.props.state.jobTitleError}</p>
        <p>{this.props.state.jobDescError}</p>
        <p>{this.props.state.jobStartError}</p>
        <p>{this.props.state.jobEndError}</p>
      </div>
    )
  }
}

export default ErrorBox;
