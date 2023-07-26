import React from 'react'
import { Link } from 'react-router-dom'

import Input from './input'
import './register-form.css'

const RegisterForm = (props) => {
  return (
    <div className="register-form-container">
      <form className="register-form-register-form">
        <div className="register-form-frame9">
          <div className="register-form-frame6086">
            <div className="register-form-general-text-field">
              <div className="register-form-label-container">
                <span className="register-form-text OverlineS">
                  <span>First name</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name2"
                textinput_placeholder="Your email first name"
              ></Input>
            </div>
            <div className="register-form-general-dropdown">
              <div className="register-form-label-container1">
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
                <option value="Assignor">Assignor</option>
                <option value="Sport Organization">Sport Organization</option>
              </select>
            </div>
            <div className="register-form-general-text-field1">
              <div className="register-form-label-container2">
                <span className="register-form-text04 OverlineS">
                  <span>password</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name3"
                textinput_placeholder="Create your password"
              ></Input>
            </div>
          </div>
          <div className="register-form-frame6085">
            <div className="register-form-general-text-field2">
              <div className="register-form-label-container3">
                <span className="register-form-text06 OverlineS">
                  <span>Last name</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name4"
                textinput_placeholder="Your email last name"
              ></Input>
            </div>
            <div className="register-form-general-text-field3">
              <div className="register-form-label-container4">
                <span className="register-form-text08 OverlineS">
                  <span>Email</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name5"
                textinput_placeholder="Your email account"
              ></Input>
            </div>
            <div className="register-form-general-text-field4">
              <div className="register-form-label-container5">
                <span className="register-form-text10 OverlineS">
                  <span>Repeat password</span>
                </span>
              </div>
              <Input
                rootClassName="input-root-class-name6"
                textinput_placeholder="Repeat your password"
              ></Input>
            </div>
          </div>
        </div>
        <div className="register-form-container1">
          <Link to="/" className="register-form-button">
            <span className="register-form-text12 ButtonL">
              <span>Create account</span>
            </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
