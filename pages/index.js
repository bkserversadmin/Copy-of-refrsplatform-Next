import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Input from '../components/input'
import NavBar from '../components/nav-bar'

const LogIn = (props) => {
  return (
    <>
      <div className="log-in-container">
        <Head>
          <title>exported project</title>
          <meta property="og:title" content="exported project" />
        </Head>
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
                  <Link href="/forgot">
                    <a className="log-in-link">
                      <span>Recover</span>
                    </a>
                  </Link>
                </div>
              </div>
              <Link href="/welcome">
                <a className="log-in-link1">
                  <span className="log-in-text12 ButtonL">Log In</span>
                </a>
              </Link>
            </form>
            <div className="log-in-frame12">
              <span className="log-in-text13 Body2">
                <span>Don’t have an account?</span>
              </span>
              <Link href="/register">
                <a className="log-in-link2">
                  <span>Create</span>
                </a>
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
      <style jsx>
        {`
          .log-in-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .log-in-log-in {
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
          .log-in-rectangle1 {
            top: 72px;
            left: 0px;
            width: 100%;
            height: 952px;
            position: absolute;
          }
          .log-in-general-access-form {
            gap: 32px;
            top: 249px;
            left: 0px;
            right: 0px;
            width: 470px;
            margin: auto;
            display: flex;
            padding: 32px;
            position: absolute;
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .log-in-frame5964 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .log-in-text {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .log-in-text02 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .log-in-form {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .log-in-frame9 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .log-in-general-text-field {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .log-in-label-container {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .log-in-text04 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .log-in-general-text-field1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .log-in-label-container1 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .log-in-text06 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .log-in-frame5967 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .log-in-text08 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .log-in-link {
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
          .log-in-link1 {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 14px 24px;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .log-in-link1:hover {
            background-color: #fbe289;
          }
          .log-in-text12 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            font-weight: 500;
            line-height: 16px;
          }
          .log-in-frame12 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .log-in-text13 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .log-in-link2 {
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
          .log-in-frame6104 {
            gap: 69px;
            top: 989px;
            left: 485px;
            width: 470px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .log-in-text17 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .log-in-frame59641 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .log-in-text19 {
            color: var(--dl-color-yellow-yellow600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .log-in-text20 {
            color: var(--dl-color-yellow-yellow600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
        `}
      </style>
    </>
  )
}

export default LogIn
