import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import RegisterForm from '../components/register-form'
import Footer from '../components/footer'
import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - exported project</title>
        <meta property="og:title" content="Register - exported project" />
      </Helmet>
      <div className="register-register">
        <NavBar rootClassName="nav-bar-root-class-name2"></NavBar>
        <div className="register-form-container form-container">
          <RegisterForm></RegisterForm>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Register
