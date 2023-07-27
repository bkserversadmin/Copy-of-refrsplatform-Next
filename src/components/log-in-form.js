import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Input from './input'
import './log-in-form.css'

const LogInForm = (props) => {
  return (
    <div className="log-in-form-general-access-form">
      <div className="form-header">
        <span className="Headine1 form-title">Log In</span>
        <span className="Headine3 form-subtitle">Welcome to Refr Sports</span>
      </div>
      <form className="log-in-form-form">
        <div className="form-fields-container">
          <div className="input-container">
            <div className="label-container">
              <span className="OverlineS input-label">Email</span>
            </div>
            <Input
              rootClassName="input-root-class-name"
              textinput_placeholder="Your email account"
            ></Input>
          </div>
          <div className="log-in-form-password-input input-container">
            <div className="log-in-form-label-container1 label-container">
              <span className="log-in-form-password OverlineS">password</span>
            </div>
            <Input rootClassName="input-root-class-name1"></Input>
          </div>
          <div className="forgot-password-link-container">
            <span className="log-in-form-forgot-password Body2">
              Forgot password?
            </span>
            <Link to="/forgot" className="form-link">
              Recover
            </Link>
          </div>
        </div>
        <Link to="/welcome" className="log-in-form-button btnPrimary">
          <span className="log-in-form-log-in ButtonL">{props.text}</span>
        </Link>
      </form>
      <div className="switch-form-container">
        <span className="log-in-form-dont-have-an-account Body2">
          <span>Don’t have an account?</span>
        </span>
        <Link to="/register" className="log-in-form-create form-link">
          <span>Create</span>
        </Link>
      </div>
    </div>
  )
}

LogInForm.defaultProps = {
  text: 'Log In',
}

LogInForm.propTypes = {
  text: PropTypes.string,
}

export default LogInForm
