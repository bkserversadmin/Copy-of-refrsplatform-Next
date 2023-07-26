import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import RegisterForm from '../components/register-form'
import NavBar from '../components/nav-bar'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - exported project</title>
        <meta property="og:title" content="Register - exported project" />
      </Helmet>
      <div className="register-register">
        <img
          alt="rossbonandermRg4DgW8dZgunsplash17191"
          src="/register-background-1100h.png"
          className="register-rossbonanderm-rg-dg-w8d-zgunsplash1"
        />
        <div className="register-general-access-form">
          <div className="register-frame5965">
            <span className="register-text Headine1">
              <span>Register</span>
            </span>
            <span className="register-text02 Headine3">
              <span>Create your account</span>
            </span>
          </div>
          <RegisterForm></RegisterForm>
          <div className="register-frame12">
            <span className="register-text04 Body2">
              <span>Already have an account?</span>
            </span>
            <Link to="/" className="register-text06">
              <span>Log In</span>
            </Link>
          </div>
        </div>
        <div className="register-frame6106">
          <span className="register-text08 Body2">
            <span>©2023 Refr Sports</span>
          </span>
          <div className="register-frame5964">
            <span className="register-text10 Body2">
              <span>Privacy Policy</span>
            </span>
            <span className="register-text12 Body2">
              <span>Terms and Conditions</span>
            </span>
          </div>
        </div>
        <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
      </div>
    </div>
  )
}

export default Register
