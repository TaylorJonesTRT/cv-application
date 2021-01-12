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
      education: [],
      practical: []
    }
  }

  updatePersonal = (name, value) => {
   this.setState({[name]: value})
  };

  addToEducation = (eduItem) => {
    let oldStateEdu = this.state.education;
    oldStateEdu.concat(eduItem);
    this.setState({ education: oldStateEdu })
    console.log(this.state.education)
  }

  render() {
    const firstName = this.state.personalFirstName;

    return (
      <div className="App">
        <Header/>
        <Personal 
          firstName={firstName}
          lastName={this.state.personalLastName}
          email={this.state.personalEmail}
          phoneNumber={this.state.personalPhoneNumber}
          onValueChange={this.updatePersonal}
          onSetState={this.setState}
          />
        <Education
          onValueChange={this.updateValue}
        />
      </div>
    )
  }
}


export default App;
