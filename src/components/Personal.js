/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';

const Personal = (props) => {
  function onChange(e) {
    props.handleChange(e.target.name, e.target.value);
  }

  return !props.editView ? (
    null
  ) : (
    <div className="section">
      <h1>Personal Information</h1>
      <hr />
      <form className="personal-form">
        <label>
          <input
            type="text"
            placeholder="First Name"
            value={props.firstName}
            className="first-name"
            name="firstName"
            onChange={onChange}
            required
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Last Name"
            value={props.lastName}
            className="last-name"
            name="lastName"
            onChange={onChange}
            required
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Email"
            value={props.email}
            className="email"
            name="email"
            onChange={onChange}
            required
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Phone Number"
            value={props.phoneNumber}
            className="phone-number"
            name="phoneNumber"
            onChange={onChange}
            required
          />
        </label>
      </form>
    </div>
  );
};

export default Personal;
