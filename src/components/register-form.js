import React from 'react'
import { Link } from 'react-router-dom'

import Input from './input'
import './register-form.css'

const RegisterForm = (props) => {
  return (
    <div className="register-form-register-form">
      <div className="register-form-form-header form-header">
        <span className="register-form-register Headine1 form-title">
          Register
        </span>
        <span className="register-form-create-your-account Headine3 form-subtitle">
          Create your account
        </span>
      </div>
      <form className="register-form-register-form1">
        <div className="form-fields-register">
          <div className="register-form-left-fields form-fields-container">
            <div className="register-form-first-name input-container">
              <div className="register-form-label-container label-container">
                <span className="register-form-text OverlineS">
                  <span>First name</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name27"
                textinput_placeholder="Your email first name"
              ></Input>
            </div>
            <div className="register-form-type-of-account-field input-container">
              <div className="register-form-label-container1 label-container">
                <span className="register-form-text02 OverlineS">
                  <span>Type of account</span>
                </span>
              </div>
              <select className="register-form-select">
                <option value="Select " selected>
                  Select
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </option>
                <option value="Referee">Referee</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Assignor">Assignor</option>
                <option value="Sport Organization">Sport Organization</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="register-form-password input-container">
              <div className="register-form-label-container2 label-container">
                <span className="register-form-text04 OverlineS">
                  <span>password</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name28"
                textinput_placeholder="Create your password"
              ></Input>
            </div>
          </div>
          <div className="register-form-right-fields form-fields-container">
            <div className="register-form-last-name input-container">
              <div className="register-form-label-container3 label-container">
                <span className="register-form-text06 OverlineS">
                  <span>Last name</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name29"
                textinput_placeholder="Your email last name"
              ></Input>
            </div>
            <div className="register-form-email input-container">
              <div className="register-form-label-container4 label-container">
                <span className="register-form-text08 OverlineS">
                  <span>Email</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name30"
                textinput_placeholder="Your email account"
              ></Input>
            </div>
            <div className="register-form-repeat-password input-container">
              <div className="register-form-label-container5 label-container">
                <span className="register-form-text10 OverlineS">
                  <span>Repeat password</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name31"
                textinput_placeholder="Repeat your password"
              ></Input>
            </div>
          </div>
        </div>
        <div className="register-form-container">
          <div className="register-form-form-switch switch-form-container">
            <span className="register-form-already-have-account Body2">
              <span>Already have an account?</span>
            </span>
            <Link to="/" className="register-form-text13 form-link">
              <span>Log In</span>
            </Link>
          </div>
          <Link to="/" className="register-form-button btnPrimary">
            <span className="register-form-text15 ButtonL">
              <span>Create account</span>
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
