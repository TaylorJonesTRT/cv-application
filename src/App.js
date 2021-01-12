import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      degree: '',
      school: '',
      schoolStartDate: '',
      schoolEndDate: '',
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      education: {

      },
      practical: {

      }
    }
  }

  updateValue = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phoneNumber = this.state.phoneNumber;
    const degree = this.state.degree;
    const school = this.state.school;
    const schoolStartDate = this.state.schoolStartDate;
    const schoolEndDate = this.state.schoolEndDate;

    const state = this.state;

    return (
      <div className="App">
        <Header/>
        <Personal 
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          onValueChange={this.updateValue} 
          />
        <Education
          degree={degree}
          school={school}
          schoolStartDate={schoolStartDate}
          schoolEndDate={schoolEndDate}
          onValueChange={this.updateValue}
        />
        <p>{state.firstName}</p>
      </div>
    )
  }
}


export default App;
