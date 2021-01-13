import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';

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
    const state = this.state;
    return (
      <div className="App">
        <Header />
        <div className='wrapper'>
          <Personal
            state={state}  
            onValueChange={this.updateValue}
          />
          <Education
            state={state}
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
