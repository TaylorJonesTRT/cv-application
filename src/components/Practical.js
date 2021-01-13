import React, { Component } from 'react'
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

class Practical extends Component {
  
  updateValue = (event) => {
    this.props.onValueChange(event.target.name, event.target.value)
  }

  render() {
    return (
      <div className='section'>
        <h1>Work Experience</h1>
        <hr />
        <form className='education-form'>
          <input
            type='text'
            placeholder='Company'
            value={this.props.companyName}
            className='company-input'
            name='company'
            onChange={this.updateValue} />
          <input
            type='text'
            placeholder='Job Title'
            value={this.props.jobTitle}
            className='job-title-input'
            name='jobTitle'
            onChange={this.updateValue} />
          <textarea
            placeholder='Job Description'
            value={this.props.jobDesc}
            className='job-desc-input'
            name='jobDesc'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='From'
            value={this.props.schoolStartDate}
            className='job-start-date-input'
            name='jobStartDate'
            onChange={this.updateValue} />
          <input
            type='date'
            placeholder='To'
            value={this.props.schoolEndDate}
            className='job-end-date-input'
            name='jobEndDate'
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
    );
  }
}

export default Practical;
