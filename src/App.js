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
      firstNameError = 'Field cannot be blank';
      errorMessages.push({'First Name': firstNameError});
    }
    if (!this.state.personalLastName) {
      lastNameError = 'Field cannot be blank';
    }
    if (!this.state.personalEmail.includes('@')) {
      emailError = 'Please enter a valid email';
    }
    if (!this.state.personalPhoneNumber) {
      phoneError = 'Field cannot be blank';
    }
    if (!this.state.degree) { 
      degreeError = 'Field cannot be blank';
    }
    if (!this.state.school) { 
      schoolError = 'Field cannot be blank';
    }
    if (!this.state.schoolStartDate) { 
      schoolStartError = 'Please choose a date';
    }
    if (!this.state.schoolEndDate) { 
      schoolEndError = 'Please choose a date';
    }
    if (!this.state.companyName) { 
      companyError = 'Field cannot be blank';
    }
    if (!this.state.jobTitle) { 
      jobTitleError = 'Field cannot be blank';
    }
    if (!this.state.jobDesc) { 
      jobDescError = 'Field cannot be blank';
    }
    if (!this.state.jobStart) { 
      jobStartError = 'Please pick a date';
    }
    if (!this.state.jobEnd) { 
      jobEndError = 'Please pick a date';
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
      console.log(this.state);
    }
    this.renderErrors();
  }

  renderErrors = () => {
    const errors = JSON.stringify(errorMessages);
    // return Object.keys(errors);
    console.log(Object.keys(errors));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='wrapper'>
          <div className='error-box'>
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
