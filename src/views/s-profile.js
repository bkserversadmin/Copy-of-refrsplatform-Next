import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import ProfilePersonalInfo from '../components/profile-personal-info'
import './s-profile.css'

const SOProfile = (props) => {
  return (
    <div className="s-profile-container">
      <Helmet>
        <title>SOProfile - exported project</title>
        <meta property="og:title" content="SOProfile - exported project" />
      </Helmet>
      <div className="s-profile-container1">
        <NavBar rootClassName="nav-bar-root-class-name13"></NavBar>
        <div className="s-profile-container2">
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
                    Porttitor nisl nec felis nulla eu vivamus proin massa. Massa
                    malesuada facilisis molestie vel elit.
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
      </div>
    </div>
  )
}

export default SOProfile
