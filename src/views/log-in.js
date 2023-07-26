import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Input from '../components/input'
import NavBar from '../components/nav-bar'
import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="log-in-log-in">
        <img
          alt="Rectangle17191"
          src="/external/login-background-1000h.png"
          loading="lazy"
          className="log-in-rectangle1"
        />
        <div className="log-in-general-access-form">
          <div className="log-in-frame5964">
            <span className="log-in-text Headine1">
              <span>Log In</span>
            </span>
            <span className="log-in-text02 Headine3">
              <span>Welcome to Refr Sports</span>
            </span>
          </div>
          <form className="log-in-form">
            <div className="log-in-frame9">
              <div className="log-in-general-text-field">
                <div className="log-in-label-container">
                  <span className="log-in-text04 OverlineS">
                    <span>Email</span>
                  </span>
                </div>
                <Input
                  rootClassName="input-root-class-name"
                  textinput_placeholder="Your email account"
                ></Input>
              </div>
              <div className="log-in-general-text-field1">
                <div className="log-in-label-container1">
                  <span className="log-in-text06 OverlineS">
                    <span>password</span>
                  </span>
                </div>
                <Input rootClassName="input-root-class-name1"></Input>
              </div>
              <div className="log-in-frame5967">
                <span className="log-in-text08 Body2">
                  <span>Forgot password?</span>
                </span>
                <Link to="/forgot" className="log-in-text10">
                  <span>Recover</span>
                </Link>
              </div>
            </div>
            <Link to="/welcome" className="log-in-button">
              <span className="log-in-text12 ButtonL">Log In</span>
            </Link>
          </form>
          <div className="log-in-frame12">
            <span className="log-in-text13 Body2">
              <span>Don’t have an account?</span>
            </span>
            <Link to="/register" className="log-in-text15">
              <span>Create</span>
            </Link>
          </div>
        </div>
        <div className="log-in-frame6104">
          <span className="log-in-text17 Body2">
            <span>©2023 Refr Sports</span>
          </span>
          <div className="log-in-frame59641">
            <span className="log-in-text19 Body2">Privacy Policy</span>
            <span className="log-in-text20 Body2">
              <span>Terms and Conditions</span>
            </span>
          </div>
        </div>
        <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      </div>
    </div>
  )
}

export default LogIn
