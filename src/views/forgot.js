import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import ForgotPasswordForm from '../components/forgot-password-form'
import Footer from '../components/footer'
import './forgot.css'

const Forgot = (props) => {
  return (
    <div className="forgot-container">
      <Helmet>
        <title>Forgot - exported project</title>
        <meta property="og:title" content="Forgot - exported project" />
      </Helmet>
      <div className="forgot-log-in">
        <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
        <div className="forgot-form-container form-container">
          <ForgotPasswordForm></ForgotPasswordForm>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Forgot
