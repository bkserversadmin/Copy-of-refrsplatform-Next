import React from 'react'
import Head from 'next/head'

const Enriquepage = (props) => {
  return (
    <>
      <div className="enriquepage-container">
        <Head>
          <title>enriquepage - exported project</title>
          <meta property="og:title" content="enriquepage - exported project" />
        </Head>
        <form
          id="register-form"
          name="register-form"
          action="https://ifaajjcrmurxwmdyybfw.supabase.co/auth/v1/signup"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="enriquepage-form"
        >
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
      <style jsx>
        {`
          .enriquepage-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .enriquepage-form {
            width: 999px;
            height: 477px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .enriquepage-button {
            transition: 0.3s;
          }
        `}
      </style>
    </>
  )
}

export default Enriquepage
