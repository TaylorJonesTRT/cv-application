import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Practical from './components/Practical';
import HTMLView from './components/HTMLView';
import ErrorBox from './components/ErrorBox';

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
      editView: true,
      showErrorBox: false
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

    if (this.state.personalFirstName === '') {
      firstNameError = 'First Name: Field cannot be blank';
    }
    if (this.state.personalLastName === '') {
      lastNameError = 'Last Name: Field cannot be blank';
    }
    if (!this.state.personalEmail.includes('@')) {
      emailError = 'Email: Please enter a valid email';
    }
    if (this.state.personalPhoneNumber === '') {
      phoneError = 'Phone Number: Field cannot be blank';
    }
    if (this.state.degree === '') { 
      degreeError = 'Type of Degree: Field cannot be blank';
    }
    if (this.state.school === '') { 
      schoolError = 'School: Field cannot be blank';
    }
    if (this.state.schoolStartDate === '') { 
      schoolStartError = 'School Start Date: Please choose a date';
    }
    if (this.state.schoolEndDate === '') { 
      schoolEndError = 'School End Date: Please choose a date';
    }
    if (this.state.companyName === '') { 
      companyError = 'Company: Field cannot be blank';
    }
    if (this.state.jobTitle === '') { 
      jobTitleError = 'Job Title: Field cannot be blank';
    }
    if (this.state.jobDesc === '') { 
      jobDescError = 'Job Description: Field cannot be blank';
    }
    if (this.state.jobStart === '') { 
      jobStartError = 'Job Start Date: Please pick a date';
    }
    if (this.state.jobEnd === '') { 
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
      return false;
    } else {
      return true;
    }
  }

  renderErrors = () => {
    this.setState(prevState => ({
      showErrorBox: !prevState.showErrorBox
    }));
    console.log('hi')
  }

  handleToggleClick = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(prevState => ({
        editView: !prevState.editView
      }));
    } else {
      this.renderErrors();
    }
  }

  render() {
    const showErrors = this.state.showErrorBox;
    const editView = this.state.editView;
    const state = this.state;
    return (
      <div className="App">
        <Header />
        <div className='wrapper'>
          <ErrorBox error={showErrors} state={state}/>
          <Personal
            onValueChange={this.updateValue}
            editView={editView}
            state={state}
          />
          <Education
            onValueChange={this.updateValue}
            editView={editView}
            state={state}
          />
          <Practical
            onValueChange={this.updateValue}
            editView={editView}
            state={state}
          />
          <HTMLView
            editView={editView}
            state={state}
          />
          <br />
          <button className='preview-btn' onClick={this.handleToggleClick}>{this.state.editView ? 'Preview' : 'Edit'}</button>
        </div>
      </div>
    )
  }
}


export default App;
