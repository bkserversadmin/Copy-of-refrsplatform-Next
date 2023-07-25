import React from 'react'
import Head from 'next/head'

import ProfilePersonalInfo from '../components/profile-personal-info'
import NavBar from '../components/nav-bar'

const SOProfile = (props) => {
  return (
    <>
      <div className="s-profile-container">
        <Head>
          <title>SOProfile - exported project</title>
          <meta property="og:title" content="SOProfile - exported project" />
        </Head>
        <div className="s-profile-profile">
          <div className="s-profile-container1">
            <div className="s-profile-resume-section">
              <div className="s-profile-frame120">
                <div className="s-profile-avatar">
                  <img
                    alt="Ellipse35I292"
                    src="/avatarorg150-200h.png"
                    className="s-profile-ellipse35"
                  />
                </div>
                <div className="s-profile-frame119">
                  <span className="s-profile-text Headine2">
                    National Hockey League
                  </span>
                  <span className="s-profile-text1 Body3">
                    <span>
                      Porttitor nisl nec felis nulla eu vivamus proin massa.
                      Massa malesuada facilisis molestie vel elit.
                    </span>
                  </span>
                </div>
              </div>
              <div className="s-profile-frame126">
                <div className="s-profile-frame42">
                  <span className="s-profile-text3 Body3">
                    Total created games
                  </span>
                  <span className="s-profile-text4 Headine1">14</span>
                </div>
              </div>
            </div>
            <ProfilePersonalInfo></ProfilePersonalInfo>
          </div>
          <NavBar rootClassName="nav-bar-root-class-name13"></NavBar>
        </div>
      </div>
      <style jsx>
        {`
          .s-profile-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .s-profile-profile {
            width: 100%;
            height: 1129px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-profile-container1 {
            gap: 24px;
            top: 147px;
            left: 0px;
            right: 0px;
            width: 1170px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-profile-resume-section {
            gap: 91px;
            width: 1170px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .s-profile-frame120 {
            gap: 24px;
            display: flex;
            align-items: center;
          }
          .s-profile-avatar {
            width: 120px;
            height: 120px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .s-profile-ellipse35 {
            top: 0px;
            left: 0px;
            width: 120px;
            height: 120px;
            position: absolute;
          }
          .s-profile-frame119 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-profile-text {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-profile-text1 {
            color: var(--dl-color-grey-grey600);
            width: 223px;
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .s-profile-frame126 {
            gap: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: 24px;
          }
          .s-profile-frame42 {
            gap: 12px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .s-profile-text3 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            opacity: 0.5;
            text-align: left;
            line-height: 16px;
          }
          .s-profile-text4 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
        `}
      </style>
    </>
  )
}

export default SOProfile
