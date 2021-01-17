import React, { Component } from 'react';
import '../styles/App.css';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

class Education extends Component {

  updateValue = (event) => {
    this.props.onValueChange(event.target.name, event.target.value)
  }

  handleSwitch = (event) => {
    this.props.switchToggle(event.target.name);
  }

  render() {
    return !this.props.editView ? (
      null
    ) : (
      <div className='section'>
        <h1>Education Information</h1>
        <hr />
        <form className='education-form'>
          <input
            type='text'
            placeholder='Type of Degree'
            value={this.props.state.degree}
            className='degree-input'
            name='degree'
            onChange={this.updateValue} />
          <input
            type='text'
            placeholder='School'
            value={this.props.state.school}
            className='school-input'
            name='school'
            onChange={this.updateValue} />
          <input
            type='date'
            value={this.props.state.schoolStartDate}
            className='school-start-date-input'
            name='schoolStartDate'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='To'
            value={this.props.state.schoolEndDate}
            className='school-end-date-input'
            name='schoolEndDate'
            onChange={this.updateValue} />
          <label htmlFor='test-sweitch'>
            <Switch
              checked={this.props.switchStatus}
              onChange={this.handleSwitch}
              shape='fill'
              className='preset-switch'
              name='schoolSwitch'
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
