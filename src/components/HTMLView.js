/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function HTMLView(props) {
  return props.state.editView ? (
    null
  ) : (
    <div>
      <div className="preview section">
        <h1>Personal Information</h1>
        <hr />
        <p>
          {props.state.personalFirstName}
          {' '}
          {props.state.personalLastName}
        </p>
        <p>{props.state.personalEmail}</p>
        <p>{props.state.personalPhoneNumber}</p>
      </div>
      <div className="preview section">
        <h1>Education Information</h1>
        <hr />
        <p>{props.state.degree}</p>
        <p>{props.state.school}</p>
        <p>
          Started:
          {props.state.schoolStartDate}
          {' '}
          | Graduated:
          {props.state.schoolEndDate}
        </p>
      </div>
      <div className="preview section">
        <h1>Job Information</h1>
        <hr />
        <p>{props.state.companyName}</p>
        <p>{props.state.jobTitle}</p>
        <p>{props.state.jobDesc}</p>
        <p>
          Started:
          {props.state.jobStartDate}
          {' '}
          | Left:
          {props.state.jobEndDate}
        </p>
      </div>
    </div>
  );
}

export default HTMLView;
