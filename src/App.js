import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Practical from './components/Practical';

const errorMessages = [];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personalFirstName: '',
      personalLastName: '',
      personalEmail: '',
      personalPhoneNumber: '',
      degree: '',
      school: '',
      schoolStartDate: '',
      schoolEndDate: '',
      companyName: '',
      jobTitle: '',
      jobStartDate: '',
      jobEndDate: '',
      jobDesc: '',
      jobStart: '',
      jobEnd: '',
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
      errorMessages: []
    }
  }

  updateValue = (name, value) => {
   this.setState({[name]: value})
  };

  validate = () => {
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

    if (!this.state.personalFirstName) {
      firstNameError = 'First Name: Field cannot be blank';
      errorMessages.push({'First Name': firstNameError});
    }
    if (!this.state.personalLastName) {
      lastNameError = 'Last Name: Field cannot be blank';
    }
    if (!this.state.personalEmail.includes('@')) {
      emailError = 'Email: Please enter a valid email';
    }
    if (!this.state.personalPhoneNumber) {
      phoneError = 'Phone Number: Field cannot be blank';
    }
    if (!this.state.degree) { 
      degreeError = 'Type of Degree: Field cannot be blank';
    }
    if (!this.state.school) { 
      schoolError = 'School: Field cannot be blank';
    }
    if (!this.state.schoolStartDate) { 
      schoolStartError = 'School Start Date: Please choose a date';
    }
    if (!this.state.schoolEndDate) { 
      schoolEndError = 'School End Date: Please choose a date';
    }
    if (!this.state.companyName) { 
      companyError = 'Company: Field cannot be blank';
    }
    if (!this.state.jobTitle) { 
      jobTitleError = 'Job Title: Field cannot be blank';
    }
    if (!this.state.jobDesc) { 
      jobDescError = 'Job Description: Field cannot be blank';
    }
    if (!this.state.jobStart) { 
      jobStartError = 'Job Start Date: Please pick a date';
    }
    if (!this.state.jobEnd) { 
      jobEndError = 'Job End Date: Please pick a date';
    }
    

    if (firstNameError || lastNameError || emailError || phoneError ||
      degreeError || schoolError || schoolStartError || schoolEndError ||
      companyError || jobTitleError || jobDescError || jobStartError || jobEndError) {
      this.setState({
        firstNameError, lastNameError, emailError, phoneError,
        degreeError, schoolError, schoolStartError, schoolEndError, companyError,
        jobTitleError, jobDescError, jobStartError, jobEndError
      });
      let newErrorMessages = [...this.state.errorMessages];
      this.setState({ errorMessages: newErrorMessages });
      return false;
    }
    
    return true;
  }

  handlePreview = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log('hi');
    }
    this.renderErrors();
  }

  renderErrors = () => {
    // const errors = JSON.stringify(errorMessages);
    // return Object.keys(errors);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='wrapper'>
          <div className='error-box'>
            <p>{this.state.firstNameError}</p>
            <p>{this.state.lastNameError}</p>
            <p>{this.state.emailError}</p>
            <p>{this.state.phoneError}</p>
            <p>{this.state.degreeError}</p>
            <p>{this.state.schoolError}</p>
            <p>{this.state.schoolStartError}</p>
            <p>{this.state.schoolEndError}</p>
            <p>{this.state.companyError}</p>
            <p>{this.state.jobTitleError}</p>
            <p>{this.state.jobDescError}</p>
            <p>{this.state.jobStartError}</p>
            <p>{this.state.jobEndError}</p>
          </div>
          <Personal
            firstNameError={this.state.firstNameError}
            lastNameError={this.state.lastNameError}
            emailError={this.state.emailError}
            phoneError={this.state.phoneError}
            onValueChange={this.updateValue}
          />
          <Education
            onValueChange={this.updateValue}
          />
          <Practical
            onValueChange={this.updateValue}
          />
          <br />
          <button className='preview-btn' onClick={this.handlePreview}>Preview</button>
        </div>
      </div>
    )
  }
}


export default App;
