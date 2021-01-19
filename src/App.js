/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Practical from './components/Practical';

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
  });

  function handleChange(name, value) {
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSwitch(name) {
    setState({
      ...state,
      [name]: !state.[name],
    });
  }

  function handleButton() {
  }

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
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
          switchToggle={handleSwitch}
        />
        <Practical
          editView={state.editView}
          companyName={state.companyName}
          jobTitle={state.jobTitle}
          jobDesc={state.jobDesc}
          startDate={state.jobStartDate}
          endDate={state.jobEndDate}
          switchStatus={state.jobSwitch}
          switchToggle={handleSwitch}
        />
        <br />
        <button className='preview-btn' onClick={handleButton}>{state.editView ? 'Preview' : 'Edit'}</button>
      </div>
    </div>
  );
};

export default App;
