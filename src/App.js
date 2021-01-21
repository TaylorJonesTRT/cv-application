/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Practical from './components/Practical';
import HTMLView from './components/HTMLView';
import ErrorBox from './components/ErrorBox';

const App = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    degree: '',
    school: '',
    schoolStartDate: '',
    schoolEndDate: '',
    schoolSwitch: false,
    companyName: '',
    jobTitle: '',
    jobStartDate: '',
    jobEndDate: '',
    jobDesc: '',
    jobSwitch: false,
    editView: true,
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    phoneError: '',
    degreeError: '',
    schoolError: '',
    schoolStartError: '',
    schoolEndError: '',
    companyError: '',
    jobTitleError: '',
    jobDescError: '',
    jobStartError: '',
    jobEndError: '',
    showErrorBox: false,
  });

  function validate() {
    let firstNameError = '';
    let lastNameError = '';
    let emailError = '';
    let phoneError = '';
    let degreeError = '';
    let schoolError = '';
    let schoolStartError = '';
    let schoolEndError = '';
    let companyError = '';
    let jobTitleError = '';
    let jobDescError = '';
    let jobStartError = '';
    let jobEndError = '';

    if (state.firstName === '') {
      firstNameError = 'First Name: Field cannot be blank';
    }
    if (state.lastName === '') {
      lastNameError = 'Last Name: Field cannot be blank';
    }
    if (state.email === '') {
      emailError = 'Email: Please enter a valid email';
    }
    if (state.phoneNumber === '') {
      phoneError = 'Phone Number: Field cannot be blank';
    }
    if (state.degree === '') {
      degreeError = 'Type of Degree: Field cannot be blank';
    }
    if (state.school === '') {
      schoolError = 'School: Field cannot be blank';
    }
    if (state.schoolStartDate === '') {
      schoolStartError = 'School Start Date: Please choose a date';
    }
    if (state.schoolEndDate === '') {
      schoolEndError = 'School End Date: Please choose a date';
    }
    if (state.companyName === '') {
      companyError = 'Company: Field cannot be blank';
    }
    if (state.jobTitle === '') {
      jobTitleError = 'Job Title: Field cannot be blank';
    }
    if (state.jobDesc === '') {
      jobDescError = 'Job Description: Field cannot be blank';
    }
    if (state.jobStartDate === '') {
      jobStartError = 'Job Start Date: Please pick a date';
    }
    if (state.jobEndDate === '') {
      jobEndError = 'Job End Date: Please pick a date';
    }

    if (firstNameError || lastNameError || emailError || phoneError || degreeError || schoolError ||
      schoolStartError || schoolEndError || companyError || jobTitleError || jobDescError ||
      jobStartError || jobEndError) {
      setState({
        ...state,
        firstNameError,
        lastNameError,
        emailError,
        phoneError,
        degreeError,
        schoolError,
        schoolStartError,
        schoolEndError,
        companyError,
        jobTitleError,
        jobDescError,
        jobStartError,
        jobEndError,
        showErrorBox: true,
      });

      return false;
    }
    setState({
      ...state,
      showErrorBox: false,
    });
    return true;
  }

  function handleChange(name, value) {
    setState({
      ...state,
      [name]: value,
    });
  }

  function updateDateValues() {
    console.log('updateDateValues');
    if (state.schoolSwitch) {
      setTimeout(() => {
        setState({
          ...state,
          schoolEndDate: 'Present',
        });
      }, 3000);
    } else {
      setState({
        ...state,
        schoolEndDate: '',
      });
    }
  }

  function handleSwitchToggle(area) {
    if (area === 'schoolSwitch') {
      setState({
        ...state,
        schoolSwitch: !state.schoolSwitch,
      }, setTimeout(() => console.log(state.schoolSwitch), 5000));
    } else if (area === 'jobSwitch') {
      setState({
        ...state,
        jobSwitch: !state.jobSwitch,
      });
    }
    // TODO: For some reason calling this below function is stopping the state from updating
    // TODO: could be due to the state being changed asyhnchrously rather than right away
    // updateDateValues(state.schoolSwitch, state.jobSwitch);
  }

  function handleButton(e) {
    e.preventDefault();
    // TODO: Add a if statement so that the button press on the preview screen will works
    // TODO: Also fix the need of isValid here and clean up the code block.
    const isValid = validate();
    if (state.editView) {
      if (!isValid) {
        console.log('handleButton');
        console.log(state);
      } else {
        setState({
          ...state,
          editView: false,
        });
      }
    }
  }

  useEffect(() => {

});

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <ErrorBox
          showErrorBox={state.showErrorBox}
          state={state}
          firstNameError={state.firstNameError}
        />
        <Personal
          editView={state.editView}
          firstName={state.firstName}
          lastName={state.lastName}
          email={state.email}
          phoneNumber={state.phoneNumber}
          handleChange={handleChange}
        />
        <Education
          editView={state.editView}
          degree={state.degree}
          school={state.school}
          startDate={state.schoolStartDate}
          endDate={state.schoolEndDate}
          switchStatus={state.schoolSwitch}
          switchToggle={handleSwitchToggle}
          handleChange={handleChange}
        />
        <Practical
          editView={state.editView}
          companyName={state.companyName}
          jobTitle={state.jobTitle}
          jobDesc={state.jobDesc}
          startDate={state.jobStartDate}
          endDate={state.jobEndDate}
          switchStatus={state.jobSwitch}
          switchToggle={handleSwitchToggle}
          handleChange={handleChange}
        />
        <HTMLView
          editView={state.editView}
          state={state}
        />
        <br />
        <button type="submit" className="preview-btn" onClick={handleButton}>{state.editView ? 'Preview' : 'Edit'}</button>
      </div>
    </div>
  );
};

export default App;
