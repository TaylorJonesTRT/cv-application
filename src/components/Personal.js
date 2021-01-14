import React, { Component } from 'react';

class Personal extends Component {

  updateValue = (event) => {
    this.props.onValueChange(event.target.name, event.target.value)
  }

  render() {
    return (
      <div className='section'>
        <h1>Personal Information</h1>
        <hr />
        <form className='personal-form'>
          <label>
            <input
              type='text'
              placeholder='First Name'
              value={this.props.personalFirstName}
              className='first-name'
              name='personalFirstName'
              onChange={this.updateValue}
              required />
          </label>
          <label>
            <input
              type='text'
              placeholder='Last Name'
              value={this.props.lastName}
              className='last-name'
              name='personalLastName'
              onChange={this.updateValue} 
              required />
          </label>
          <label>
            <input
              type='text'
              placeholder='Email'
              value={this.props.email}
              className='email'
              name='personalEmail'
              onChange={this.updateValue}
              required />
          </label>
          <label>
            <input
              type='text'
              placeholder='Phone Number'
              value={this.props.phoneNumber}
              className='phone-number'
              name='personalPhoneNumber'
              onChange={this.updateValue}
              required />
          </label>
        </form>
      </div>
    )
  }
}

export default Personal
