import React, { Component } from 'react';
import '../styles/App.css';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

class Education extends Component {

  updateValue = (event) => {
    this.props.onValueChange(event.target.name, event.target.value)
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
            value={this.props.degree}
            className='degree-input'
            name='degree'
            onChange={this.updateValue} />
          <input
            type='text'
            placeholder='School'
            value={this.props.schoolName}
            className='school-input'
            name='schoolName'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='From'
            value={this.props.schoolStartDate}
            className='school-start-date-input'
            name='schoolSartDate'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='To'
            value={this.props.schoolEndDate}
            className='school-end-date-input'
            name='schoolEndDate'
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
