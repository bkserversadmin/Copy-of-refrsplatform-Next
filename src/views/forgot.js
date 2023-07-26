import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Input from '../components/input'
import NavBar from '../components/nav-bar'
import './forgot.css'

const Forgot = (props) => {
  return (
    <div className="forgot-container">
      <Helmet>
        <title>Forgot - exported project</title>
        <meta property="og:title" content="Forgot - exported project" />
      </Helmet>
      <div className="forgot-log-in">
        <img
          alt="Rectangle17191"
          src="/external/login-background-1000h.png"
          loading="lazy"
          className="forgot-rectangle1"
        />
        <div className="forgot-frame6104">
          <span className="forgot-text Body2">
            <span>©2023 Refr Sports</span>
          </span>
          <div className="forgot-frame5964">
            <span className="forgot-text02 Body2">Privacy Policy</span>
            <span className="forgot-text03 Body2">
              <span>Terms and Conditions</span>
            </span>
          </div>
        </div>
        <div className="forgot-general-access-form">
          <div className="forgot-frame5966">
            <span className="forgot-text05 Headine1">
              <span>Forgot password?</span>
            </span>
            <span className="forgot-text07 Subtitle2">
              <span>
                Provide us with your e-mail address associated with your Refr
                Sports account and we will send you instructions to reset your
                password
              </span>
            </span>
          </div>
          <div className="forgot-form">
            <form className="forgot-form1">
              <div className="forgot-frame9">
                <div className="forgot-general-text-field">
                  <div className="forgot-label-container">
                    <span className="forgot-text09 OverlineS">
                      <span>Email</span>
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name9"
                    textinput_placeholder="Your email account"
                  ></Input>
                </div>
                <button className="forgot-button">
                  <span className="forgot-text11 ButtonL">
                    <span>Reseat password</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="forgot-frame12">
            <Link to="/" className="forgot-text13">
              <span>&lt; Back to log in</span>
            </Link>
          </div>
        </div>
        <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
      </div>
    </div>
  )
}

export default Forgot
