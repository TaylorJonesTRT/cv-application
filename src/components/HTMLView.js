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
          {props.state.firstName}
          {' '}
          {props.state.lastName}
        </p>
        <p>{props.state.email}</p>
        <p>{props.state.phoneNumber}</p>
      </div>
      <div className="preview section">
        <h1>Education Information</h1>
        <hr />
        <p>{props.state.degree}</p>
        <p>{props.state.school}</p>
        <p>
          From: {props.state.schoolStartDate} | To: {props.state.schoolEndDate}
        </p>
      </div>
      <div className="preview section">
        <h1>Job Information</h1>
        <hr />
        <p>{props.state.companyName}</p>
        <p>{props.state.jobTitle}</p>
        <p>{props.state.jobDesc}</p>
        <p>
          From: {props.state.jobStartDate} | To: {props.state.jobEndDate}
        </p>
      </div>
    </div>
  );
}

export default HTMLView;
