import React from 'react'

import { Helmet } from 'react-helmet'

import ProfilePersonalInfo from '../components/profile-personal-info'
import NavBar from '../components/nav-bar'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - exported project</title>
        <meta property="og:title" content="Profile - exported project" />
      </Helmet>
      <div className="profile-profile">
        <div className="profile-container1">
          <div className="profile-resume-section">
            <div className="profile-frame120">
              <div className="profile-avatar">
                <img
                  alt="Ellipse35I292"
                  src="/avatar-lg-200h.png"
                  className="profile-ellipse35"
                />
              </div>
              <div className="profile-frame119">
                <span className="profile-text Headine2">
                  <span>John Doe</span>
                </span>
                <span className="profile-text02 Body3">
                  <span>
                    Porttitor nisl nec felis nulla eu vivamus proin massa. Massa
                    malesuada facilisis molestie vel elit.
                  </span>
                </span>
              </div>
            </div>
            <div className="profile-frame126">
              <div className="profile-frame42">
                <span className="profile-text04 Body3">
                  <span>Total games</span>
                </span>
                <span className="profile-text06 Headine1">
                  <span>14</span>
                </span>
              </div>
              <div className="profile-frame125">
                <span className="profile-text08 Body3">
                  <span>Average pay per game</span>
                </span>
                <span className="profile-text10 Headine1">
                  <span>$25</span>
                </span>
              </div>
            </div>
          </div>
          <ProfilePersonalInfo rootClassName="profile-personal-info-root-class-name"></ProfilePersonalInfo>
        </div>
        <NavBar rootClassName="nav-bar-root-class-name11"></NavBar>
      </div>
    </div>
  )
}

export default Profile
