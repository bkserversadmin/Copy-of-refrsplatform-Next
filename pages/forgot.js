import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Input from '../components/input'
import NavBar from '../components/nav-bar'

const Forgot = (props) => {
  return (
    <>
      <div className="forgot-container">
        <Head>
          <title>Forgot - exported project</title>
          <meta property="og:title" content="Forgot - exported project" />
        </Head>
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
              <Link href="/">
                <a className="forgot-link">
                  <span>&lt; Back to log in</span>
                </a>
              </Link>
            </div>
          </div>
          <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
        </div>
      </div>
      <style jsx>
        {`
          .forgot-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .forgot-log-in {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-start;
            background-color: var(--dl-color-default-white);
          }
          .forgot-rectangle1 {
            top: 72px;
            left: 0px;
            width: 100%;
            height: 952px;
            position: absolute;
          }
          .forgot-frame6104 {
            gap: 69px;
            top: 989px;
            left: 485px;
            width: 470px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .forgot-text {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .forgot-frame5964 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .forgot-text02 {
            color: var(--dl-color-yellow-yellow600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .forgot-text03 {
            color: var(--dl-color-yellow-yellow600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .forgot-general-access-form {
            gap: 32px;
            top: 311px;
            left: 0px;
            right: 0px;
            width: 470px;
            margin: auto;
            display: flex;
            padding: 32px;
            position: absolute;
            align-self: center;
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .forgot-frame5966 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .forgot-text05 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .forgot-text07 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            align-self: stretch;
            text-align: center;
            line-height: 14px;
          }
          .forgot-form {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .forgot-form1 {
            width: 100%;
            height: auto;
            display: flex;
          }
          .forgot-frame9 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .forgot-general-text-field {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .forgot-label-container {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .forgot-text09 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .forgot-button {
            gap: 12px;
            display: flex;
            padding: 14px 24px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .forgot-text11 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .forgot-frame12 {
            gap: 5px;
            display: flex;
            align-items: flex-start;
          }
          .forgot-link {
            color: var(--dl-color-yellow-yellow600);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Forgot
