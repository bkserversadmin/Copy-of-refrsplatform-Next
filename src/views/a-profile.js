import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Input from '../components/input'
import './a-profile.css'

const ASProfile = (props) => {
  return (
    <div className="a-profile-container">
      <Helmet>
        <title>ASProfile - exported project</title>
        <meta property="og:title" content="ASProfile - exported project" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name15"></NavBar>
      <div className="container">
        <div className="inner-container a-profile-inner-container">
          <div className="a-profile-resume-section resumeSection">
            <div className="about-container">
              <div className="avatar-container">
                <img
                  alt="Ellipse35I466"
                  src="/external/ellipse35i466-spsg-200h.png"
                  className="a-profile-image avatar-photo"
                />
              </div>
              <div className="a-profile-name-and-bio nameAndBio">
                <span className="Headine2 sportOrg-name">Marvin McKinney</span>
                <span className="Body3 sportOrg-bio">
                  Porttitor nisl nec felis nulla eu vivamus proin massa. Massa
                  malesuada facilisis molestie vel elit.
                </span>
              </div>
            </div>
            <div className="rightColumn">
              <div className="totalGamesAssigned">
                <span className="a-profile-text02 Body3 OverlineS overlineS">
                  <span>Total assigned games</span>
                </span>
                <span className="a-profile-text04 Headine1 highliteAmount">
                  <span>347</span>
                </span>
              </div>
              <div className="averagePerGame">
                <span className="a-profile-text06 OverlineS overlineS Body3">
                  <span>Average pay per game</span>
                </span>
                <span className="a-profile-text08 Headine1 highliteAmount">
                  <span>$5</span>
                </span>
              </div>
            </div>
          </div>
          <div className="a-profile-profile-assignor-info">
            <div className="a-profile-tabs">
              <div className="a-profile-tab tab">
                <div className="tabActive">
                  <span className="a-profile-text10 Body2">
                    Personal Information
                  </span>
                </div>
              </div>
              <div className="a-profile-tab1 tab">
                <div className="tabDefault">
                  <span className="a-profile-text11 Body2">
                    Payout Information
                  </span>
                </div>
              </div>
            </div>
            <div className="a-profile-info-container">
              <form className="a-profile-form">
                <div className="a-profile-form-container formContainer">
                  <span className="Subtitle1 subtitle-1">
                    Detailed information
                  </span>
                  <div className="formRow">
                    <div className="a-profile-general-text-field input-container">
                      <div className="a-profile-label-container label-container">
                        <span className="a-profile-fullname OverlineS overlineS">
                          Full Name
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name45"></Input>
                    </div>
                    <div className="a-profile-general-text-field1 input-container">
                      <div className="a-profile-label-container1 label-container">
                        <span className="a-profile-sports-text OverlineS overlineS">
                          Sports
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name46"></Input>
                    </div>
                    <div className="a-profile-general-text-field2 input-container">
                      <div className="a-profile-label-container2 label-container">
                        <span className="a-profile-city-text OverlineS overlineS">
                          state
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name47"></Input>
                    </div>
                  </div>
                  <div className="a-profile-form-row1 formRow">
                    <div className="a-profile-general-text-field3 input-container">
                      <div className="a-profile-label-container3 label-container">
                        <span className="a-profile-phone-number OverlineS overlineS">
                          city
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name48"></Input>
                    </div>
                    <div className="a-profile-general-text-field4 input-container">
                      <div className="a-profile-label-container4 label-container">
                        <span className="a-profile-email OverlineS overlineS">
                          contact number
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name49"></Input>
                    </div>
                    <div className="a-profile-general-text-field5 input-container">
                      <div className="a-profile-label-container5 label-container">
                        <span className="a-profile-email1 OverlineS overlineS">
                          email
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name50"></Input>
                    </div>
                  </div>
                </div>
                <div className="experienceContainer">
                  <span className="a-profile-about-message OverlineS overlineS Subtitle1">
                    About the assigning company
                  </span>
                  <textarea
                    placeholder="placeholder"
                    className="a-profile-textarea textarea"
                  ></textarea>
                </div>
                <div className="btnContainer">
                  <button className="a-profile-button btnYellow">
                    <span className="a-profile-text13 ButtonL">
                      <span>Save changes</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ASProfile
