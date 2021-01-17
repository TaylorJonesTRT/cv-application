import React, { Component } from 'react';

class HTMLView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.editView ? (
      null
    ) : (
        <div>
          <div className='preview section'>
            <h1>Personal Information</h1>
            <hr />
            <p>{this.props.state.personalFirstName} {this.props.state.personalLastName}</p>
            <p>{this.props.state.personalEmail}</p>
            <p>{this.props.state.personalPhoneNumber}</p>
          </div>
          <div className='preview section'>
            <h1>Education Information</h1>
            <hr />
            <p>{this.props.state.degree}</p>
            <p>{this.props.state.school}</p>
            <p>Started: {this.props.state.schoolStartDate} | Graduated: {this.props.state.schoolEndDate}</p>
          </div>
          <div className='preview section'>
            <h1>Job Information</h1>
            <hr />
            <p>{this.props.state.companyName}</p>
            <p>{this.props.state.jobTitle}</p>
            <p>{this.props.state.jobDesc}</p>
            <p>Started: {this.props.state.jobStartDate} | Left: {this.props.state.jobEndDate}</p>
          </div>
        </div>
    )
  }

}

export default HTMLView;
