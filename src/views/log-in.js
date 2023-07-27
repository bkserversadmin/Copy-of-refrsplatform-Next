import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import LogInForm from '../components/log-in-form'
import Footer from '../components/footer'
import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="log-in-form-container form-container">
        <LogInForm></LogInForm>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LogIn
