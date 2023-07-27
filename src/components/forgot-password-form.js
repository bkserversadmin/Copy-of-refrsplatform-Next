import React from 'react'
import { Link } from 'react-router-dom'

import Input from './input'
import './forgot-password-form.css'

const ForgotPasswordForm = (props) => {
  return (
    <div className="forgot-password-form-forgot-password-form">
      <div className="forgot-password-form-form-header form-header">
        <span className="forgot-password-form-text Headine1 form-title">
          Forgot password?
        </span>
        <span className="forgot-password-form-text1 Headine3 form-subtitle">
          Provide us with your e-mail address associated with your Refr Sports
          account and we will send you instructions to reset your password
        </span>
      </div>
      <form className="forgot-password-form-forgot-password-form1">
        <div className="forgot-password-form-fields-container form-fields-container">
          <div className="forgot-password-form-email input-container">
            <div className="forgot-password-form-label-container label-container">
              <span className="forgot-password-form-text2 OverlineS">
                <span>Email</span>
              </span>
            </div>
            <Input
              rootClassName="input-root-class-name9"
              textinput_placeholder="Your email account"
            ></Input>
          </div>
          <button className="forgot-password-form-button">
            <span className="forgot-password-form-text4 ButtonL">
              <span>Reseat password</span>
            </span>
          </button>
        </div>
      </form>
      <Link to="/" className="forgot-password-form-back-to-login form-link">
        &lt; Back to log in
      </Link>
    </div>
  )
}

export default ForgotPasswordForm
