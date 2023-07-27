import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import SOProfileInfo from '../components/s-profile-info'
import './s-profile.css'

const SOProfile = (props) => {
  return (
    <div className="s-profile-container">
      <Helmet>
        <title>SOProfile - exported project</title>
        <meta property="og:title" content="SOProfile - exported project" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name13"></NavBar>
      <div className="container">
        <div className="inner-container">
          <div className="resumeSection">
            <div className="about-container">
              <div className="avatar-container">
                <img
                  alt="Ellipse35I292"
                  src="/avatarorg150-200h.png"
                  className="avatar-photo"
                />
              </div>
              <div className="s-profile-name-and-bio nameAndBio">
                <span className="Headine2 sportOrg-name">
                  National Hockey League
                </span>
                <span className="Body3 sportOrg-bio">
                  Porttitor nisl nec felis nulla eu vivamus proin massa. Massa
                  malesuada facilisis molestie vel elit.
                </span>
              </div>
            </div>
            <div className="s-profile-frame126">
              <div className="s-profile-frame42">
                <span className="s-profile-text2 Body3">
                  Total created games
                </span>
                <span className="s-profile-text3 Headine1">14</span>
              </div>
            </div>
          </div>
          <SOProfileInfo></SOProfileInfo>
        </div>
      </div>
    </div>
  )
}

export default SOProfile
