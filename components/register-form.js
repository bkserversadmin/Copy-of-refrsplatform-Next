import React from 'react'
import Link from 'next/link'

import Input from './input'

const RegisterForm = (props) => {
  return (
    <>
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
            <Link href="/">
              <a className="register-form-link">
                <span className="register-form-text12 ButtonL">
                  <span>Create account</span>
                </span>
              </a>
            </Link>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .register-form-container {
            display: flex;
            position: relative;
          }
          .register-form-register-form {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .register-form-frame9 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .register-form-frame6086 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .register-form-general-text-field {
            gap: 8px;
            width: 470px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .register-form-label-container {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .register-form-text {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-form-general-dropdown {
            gap: 8px;
            width: 470px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .register-form-label-container1 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .register-form-text02 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-form-select {
            color: #7a7a7a;
            width: 100%;
            transition: 0.3s;
            padding-top: 18px;
            padding-left: 16px;
            border-radius: 8px;
            padding-right: 16px;
            padding-bottom: 18px;
            background-color: #f5f5f5;
          }
          .register-form-select:focus {
            border: 1px solid #f6c513;
          }
          .register-form-select:active {
            border: 1px solid #f6c513;
          }
          .register-form-select:focus-within {
            border: 1px solid #f6c513;
          }
          .register-form-select:focus-visible {
            border: 1px solid #f6c513;
          }
          .register-form-general-text-field1 {
            gap: 8px;
            width: 470px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .register-form-label-container2 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .register-form-text04 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-form-frame6085 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .register-form-general-text-field2 {
            gap: 8px;
            width: 470px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .register-form-label-container3 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .register-form-text06 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-form-general-text-field3 {
            gap: 8px;
            width: 470px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .register-form-label-container4 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .register-form-text08 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-form-general-text-field4 {
            gap: 8px;
            width: 470px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .register-form-label-container5 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .register-form-text10 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-form-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .register-form-link {
            gap: 12px;
            display: flex;
            padding: 14px 24px;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .register-form-text12 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
        `}
      </style>
    </>
  )
}

export default RegisterForm
