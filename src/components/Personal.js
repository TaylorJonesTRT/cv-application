import React, { Component } from 'react';

class Personal extends Component {
  constructor(props) {
    super(props);
  }

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
              value={this.props.firstName}
              className='first-name'
              name='firstName'
              onChange={this.updateValue} />
          </label>
          <label>
            <input
              type='text'
              placeholder='Last Name'
              value={this.props.lastName}
              className='last-name'
              name='lastName'
              onChange={this.updateValue} />
          </label>
          <label>
            <input
              type='text'
              placeholder='Email'
              value={this.props.email}
              className='email'
              name='email'
              onChange={this.updateValue} />
          </label>
          <label>
            <input
              type='text'
              placeholder='Phone Number'
              value={this.props.phoneNumber}
              className='phone-number'
              name='phoneNumber'
              onChange={this.updateValue} />
          </label>
        </form>
      </div>
    )
  }
}

export default Personal
