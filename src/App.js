/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';

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
    jobSwitch: '',
  });

  function handleChange(name, value) {
    setState({
      ...state,
      [name]: value,
    });
  }
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Personal
          firstName={state.firstName}
          lastName={state.lastName}
          email={state.email}
          phoneNumber={state.phoneNumber}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
