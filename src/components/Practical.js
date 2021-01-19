/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

const Practical = (props) => {
  function onChange(e) {
    props.handleChange(e.target.name, e.target.value);
  }

  function handleSwitch(e) {
    props.switchToggle(e.target.name);
  }

  return !props.editView ? (
    null
  ) : (
    <div className="section">
      <h1>Work Experience</h1>
      <hr />
      <form className="education-form">
        <input
          type="text"
          placeholder="Company"
          value={props.companyName}
          className="company-input"
          name="companyName"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          value={props.jobTitle}
          className="job-title-input"
          name="jobTitle"
          onChange={onChange}
        />
        <textarea
          placeholder="Job Description"
          value={props.jobDesc}
          className="job-desc-input"
          name="jobDesc"
          onChange={onChange}
        />
        <input
          type="date"
          placeholder="From"
          value={props.jobStartDate}
          className="job-start-date-input"
          name="jobStartDate"
          onChange={onChange}
        />
        <input
          type="date"
          placeholder="To"
          value={props.jobEndDate}
          className="job-end-date-input"
          name="jobEndDate"
          onChange={onChange}
        />
        <label htmlFor="test-sweitch">
          <Switch
            checked={props.switchStatus}
            onChange={handleSwitch}
            shape="fill"
            className="preset-switch"
            name="jobSwitch"
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

export default Practical;
