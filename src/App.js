import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import Practical from './components/Practical';

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
      jobDesc: ''
    }
  }

  updateValue = (name, value) => {
   this.setState({[name]: value})
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className='wrapper'>
          <Personal
            onValueChange={this.updateValue}
          />
          <Education
            onValueChange={this.updateValue}
          />
          <Practical
            onValueChange={this.updateValue}
          />
          <br />
          <button className='preview-btn'>Preview</button>
        </div>
      </div>
    )
  }
}


export default App;
