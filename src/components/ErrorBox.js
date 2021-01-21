/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

function ErrorBox(props) {
  return !props.showErrorBox ? (
    null
  ) : (
    <div className="error-box">
      <p>{props.firstNameError}</p>
      <p>{props.state.lastNameError}</p>
      <p>{props.state.emailError}</p>
      <p>{props.state.phoneError}</p>
      <p>{props.state.degreeError}</p>
      <p>{props.state.schoolError}</p>
      <p>{props.state.schoolStartError}</p>
      <p>{props.state.schoolEndError}</p>
      <p>{props.state.companyError}</p>
      <p>{props.state.jobTitleError}</p>
      <p>{props.state.jobDescError}</p>
      <p>{props.state.jobStartError}</p>
      <p>{props.state.jobEndError}</p>
    </div>
  );
}

export default ErrorBox;
