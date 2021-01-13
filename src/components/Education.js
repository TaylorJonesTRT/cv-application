import React, { Component } from 'react';
import '../styles/App.css';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: '',
      schoolName: '',
      startDate: '',
      endDate: ''
    }
  }

  updateValue = (event) => {
    this.props.onValueChange(event.target.name, event.target.value)
  }

  submitEdu = (event) => {
    event.preventDefault();
    let eduItem = {
      id: uniqid(),
      degree: this.state.degree,
      school: this.state.schoolName,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }
    this.props.onSubmit(eduItem);
    console.log(eduItem);
    alert('Submitted');
  }

  render() {
    return (
      <div className='section'>
        <h1>Education Information</h1>
        <hr />
        <form className='education-form'>
          <input
            type='text'
            placeholder='Type of Degree'
            value={this.state.degree}
            className='degree-input'
            name='degree'
            onChange={this.updateValue} />
          <input
            type='text'
            placeholder='School'
            value={this.state.schoolName}
            className='school-input'
            name='schoolName'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='From'
            value={this.state.startDate}
            className='school-start-date-input'
            name='startDate'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='To'
            value={this.state.endDate}
            className='school-end-date-input'
            name='endDate'
            onChange={this.updateValue} />
          <label htmlFor='test-sweitch'>
            <Switch
              shape='fill'
              className='preset-switch'
              style={{
                fontSize: '1.5em',
                color: 'white',
                margin: '0 auto',
                padding: '10px',
                float: 'right'
              }}>Present</Switch>
          </label>
        </form>
      </div>
    )
  }
}

export default Education
