/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

const Education = (props) => {
  function onChange(e) {
    e.preventDefault();
    props.handleChange(e.target.name, e.target.value);
  }

  function handleSwitch(e) {
    props.switchToggle(e.target.name);
  }

  return !props.editView ? (
    null
  ) : (
    <div className="section">
      <h1>Education Information</h1>
      <hr />
      <form className="education-form">
        <input
          type="text"
          placeholder="Type of Degree"
          value={props.degree}
          className="degree-input"
          name="degree"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="School"
          value={props.school}
          className="school-input"
          name="school"
          onChange={onChange}
        />
        <input
          type="date"
          value={props.startDate}
          className="school-start-date-input"
          name="schoolStartDate"
          onChange={onChange}
        />
        <input
          type="date"
          placeholder="To"
          value={props.endDate}
          className="school-end-date-input"
          name="schoolEndDate"
          onChange={onChange}
        />
        <label htmlFor="test-sweitch">
          <Switch
            checked={props.switchStatus}
            onChange={handleSwitch}
            shape="fill"
            className="preset-switch"
            name="schoolSwitch"
            style={{
              fontSize: '1.5em',
              color: 'white',
              margin: '0 auto',
              padding: '10px',
              float: 'right',
            }}
          >
            Present
          </Switch>
        </label>
      </form>
    </div>
  );
};

export default Education;
