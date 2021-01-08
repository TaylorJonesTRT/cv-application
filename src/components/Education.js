import React, { Component } from 'react';
import '../styles/App.css';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  updateValue = (event) => {
    this.props.onValueChange(event.target.name, event.target.value)
  }

  render() {
    return (
      <div className='section'>
        <h1>Education Information</h1>
        <hr />
        <form className='education-form'>
          <label>
            <input
              type='text'
              placeholder='Type of Degree'
              value={this.props.degree}
              className='degree-input'
              name='degree'
              onChange={this.updateValue} />
          </label>
          <label>
            <input
              type='text'
              placeholder='School'
              value={this.props.school}
              className='school-input'
              name='school'
              onChange={this.updateValue} />
          </label>
          <label>
            <input
              type='date'
              placeholder='From'
              value={this.props.schoolStartDate}
              className='school-start-date-input'
              name='schoolStartDate'
              onChange={this.updateValue} />
          </label>
          <label>
            <input
              type='date'
              placeholder='To'
              value={this.props.schoolEndDate}
              className='school-end-date-input'
              name='schoolEndDate'
              onChange={this.updateValue} />
          </label>
        </form>
      </div>
    )
  }
}

export default Education
