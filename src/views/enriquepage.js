import React from 'react'

import { Helmet } from 'react-helmet'

import './enriquepage.css'

const Enriquepage = (props) => {
  return (
    <div className="enriquepage-container">
      <Helmet>
        <title>enriquepage - exported project</title>
        <meta property="og:title" content="enriquepage - exported project" />
      </Helmet>
      <form
        id="register-form"
        name="register-form"
        action="https://ifaajjcrmurxwmdyybfw.supabase.co/auth/v1/signup"
        method="POST"
        enctype="application/x-www-form-urlencoded"
        className="enriquepage-form"
      >
        <h1>Hola un cambio</h1>
        <input
          type="email"
          target="email"
          enctype="your email"
          required
          placeholder="placeholder"
          className="input"
        />
        <input
          type="password"
          required
          minlength="3"
          placeholder="password"
          className="input"
        />
        <button
          id="signupbutton"
          name="signup"
          type="submit"
          className="enriquepage-button button"
        >
          Button
        </button>
      </form>
    </div>
  )
}

export default Enriquepage
