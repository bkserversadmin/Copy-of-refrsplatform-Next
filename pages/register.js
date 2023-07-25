import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import RegisterForm from '../components/register-form'
import NavBar from '../components/nav-bar'

const Register = (props) => {
  return (
    <>
      <div className="register-container">
        <Head>
          <title>Register - exported project</title>
          <meta property="og:title" content="Register - exported project" />
        </Head>
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
              <Link href="/">
                <a className="register-link">
                  <span>Log In</span>
                </a>
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
      <style jsx>
        {`
          .register-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .register-register {
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
          .register-rossbonanderm-rg-dg-w8d-zgunsplash1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 1021px;
            margin: auto;
            position: absolute;
          }
          .register-general-access-form {
            gap: 32px;
            top: 228px;
            left: 0px;
            right: 0px;
            width: 1012px;
            margin: auto;
            display: flex;
            padding: 24px;
            position: absolute;
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: flex-start;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .register-frame5965 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .register-text {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-text02 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .register-frame12 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
          }
          .register-text04 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .register-link {
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
          .register-frame6106 {
            gap: 69px;
            top: 989px;
            left: 485px;
            width: 470px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .register-text08 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .register-frame5964 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .register-text10 {
            color: var(--dl-color-yellow-yellow600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .register-text12 {
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

export default Register
