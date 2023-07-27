import React from 'react'

import PropTypes from 'prop-types'

import ButtonYellow from './button-yellow'
import './nav-bar.css'

const NavBar = (props) => {
  return (
    <div className={`nav-bar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navBar">
        <img alt="logo" src="/logo.svg" className="navBarLogo" />
        <div className="menuContainer">
          <div data-thq="thq-navbar-nav" className="desktopMenu">
            <nav className="unLoggedLinks">
              <span className="linksITem">Solution</span>
              <span className="nav-bar-text01 linksITem">Vision</span>
              <span className="nav-bar-text02 linksITem">Story</span>
              <span className="nav-bar-text03 linksITem">Blog</span>
            </nav>
            <div className="nav-bar-users-links-container usersLinksContainer">
              <nav className="nav-bar-referee-links refereeLinks">
                <span className="nav-bar-text04 linksITem">Home</span>
                <span className="nav-bar-text05 linksITem">My games</span>
                <span className="nav-bar-text06 linksITem">Earnings</span>
                <span className="nav-bar-text07 linksITem">Availability</span>
              </nav>
              <nav className="nav-bar-assignor-links assignorLinks">
                <span className="nav-bar-text08 linksITem">Home</span>
                <span className="nav-bar-text09 linksITem">Games</span>
                <span className="nav-bar-text10 linksITem">Referees</span>
                <span className="nav-bar-text11 linksITem">Earnings</span>
                <span className="nav-bar-text12 linksITem">Management</span>
              </nav>
              <nav className="nav-bar-sport-org-links sportOrgLinks">
                <span className="nav-bar-text13 linksITem">Home</span>
                <span className="nav-bar-text14 linksITem">Assignors</span>
                <span className="nav-bar-text15 linksITem">Games</span>
                <span className="nav-bar-text16 linksITem">Schedule</span>
                <span className="nav-bar-text17 linksITem">Payments</span>
              </nav>
            </div>
            <div className="buttonContainer">
              <ButtonYellow
                primaryText="Log in"
                rootClassName="button-yellow-root-class-name7"
                className=""
              ></ButtonYellow>
            </div>
            <div className="rightBlock">
              <div className="navBarNotifications">
                <div className="nav-bar-bell-icon">
                  <img
                    alt="FrameI243"
                    src="/external/framei243-rmuy.svg"
                    className="nav-bar-frame"
                  />
                </div>
                <div className="notificationNumber">
                  <span className="nav-bar-notification-number1">2</span>
                </div>
              </div>
              <div
                data-thq="thq-dropdown"
                className="nav-bar-profile-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="nav-bar-dropdown-toggle"
                >
                  <div className="nav-bar-avatar">
                    <img
                      alt="Ellipse36I243"
                      src="/sportorgavatar-200h.png"
                      className="nav-bar-avatar1"
                    />
                    <img
                      alt="Ellipse36I243"
                      src="/external/avatar-1-200h.png"
                      className="nav-bar-avatar2"
                    />
                  </div>
                  <span className="nav-bar-text18">Menu Item</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="nav-bar-dropdown-arrow"
                  ></div>
                  <img
                    alt="IconI243"
                    src="/external/iconi243-ulod.svg"
                    className="nav-bar-icon"
                  />
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="nav-bar-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle1"
                    >
                      <img
                        alt="image"
                        src="/iconprofile.svg"
                        className="nav-bar-image"
                      />
                      <span className="nav-bar-text19">Profile</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle2"
                    >
                      <img
                        alt="image"
                        src="/iconassignor.svg"
                        className="nav-bar-image1"
                      />
                      <span className="nav-bar-text20">Assignors</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="nav-bar-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle3"
                    >
                      <img
                        alt="image"
                        src="/iconhelp.svg"
                        className="nav-bar-image2"
                      />
                      <span className="nav-bar-text21">Help &amp; Support</span>
                    </div>
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="nav-bar-dropdown-toggle4"
                    >
                      <img
                        alt="image"
                        src="/iconlogout.svg"
                        className="nav-bar-image3"
                      />
                      <span className="nav-bar-text22">Log Out</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-icon01">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-mobile-menu">
          <div className="nav-bar-nav">
            <div className="nav-bar-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="nav-bar-logo"
              />
              <div data-thq="thq-close-menu" className="nav-bar-close-menu">
                <svg viewBox="0 0 1024 1024" className="nav-bar-icon03">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="nav-bar-links">
              <span className="nav-bar-text23">About</span>
              <span className="nav-bar-text24">Features</span>
              <span className="nav-bar-text25">Pricing</span>
              <span className="nav-bar-text26">Team</span>
              <span className="nav-bar-text27">Blog</span>
            </nav>
            <div className="nav-bar-buttons">
              <button className="nav-bar-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="nav-bar-icon05"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="nav-bar-icon07"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                className=""
              ></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="nav-bar-icon09"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

NavBar.defaultProps = {
  rootClassName: '',
}

NavBar.propTypes = {
  rootClassName: PropTypes.string,
}

export default NavBar
