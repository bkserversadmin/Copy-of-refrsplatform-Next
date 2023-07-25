import React, { useState } from 'react'

import PropTypes from 'prop-types'

const NavBar = (props) => {
  const [isLogged, setIsLogged] = useState(true)
  const [isUserSportOrg, setIsUserSportOrg] = useState(true)
  const [isUserReferee, setIsUserReferee] = useState(true)
  const [isUserAssignor, setIsUserAssignor] = useState(true)
  return (
    <>
      <div className={`nav-bar-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="nav-bar-navbar-interactive">
          <img alt="logo" src="/logo.svg" className="nav-bar-navbar-logo" />
          <div className="nav-bar-container1">
            <div data-thq="thq-navbar-nav" className="nav-bar-desktop-menu">
              {!isLogged && (
                <nav className="nav-bar-unlogged-links">
                  <span className="nav-bar-text">Solution</span>
                  <span className="nav-bar-text01">Vision</span>
                  <span className="nav-bar-text02">Story</span>
                  <span className="nav-bar-text03">Blog</span>
                </nav>
              )}
              {isLogged && (
                <div className="nav-bar-users-links-container">
                  {isUserReferee && (
                    <nav className="nav-bar-referee-links">
                      <span className="nav-bar-text04">Home</span>
                      <span className="nav-bar-text05">My games</span>
                      <span className="nav-bar-text06">Earnings</span>
                      <span className="nav-bar-text07">Availability</span>
                    </nav>
                  )}
                  {isUserAssignor && (
                    <nav className="nav-bar-assignor-links">
                      <span className="nav-bar-text08">Home</span>
                      <span className="nav-bar-text09">Games</span>
                      <span className="nav-bar-text10">Referees</span>
                      <span className="nav-bar-text11">Earnings</span>
                      <span className="nav-bar-text12">Management</span>
                    </nav>
                  )}
                  {isUserSportOrg && (
                    <nav className="nav-bar-sport-org-links">
                      <span className="nav-bar-text13">Home</span>
                      <span className="nav-bar-text14">Assignors</span>
                      <span className="nav-bar-text15">Games</span>
                      <span className="nav-bar-text16">Schedule</span>
                      <span className="nav-bar-text17">Payments</span>
                    </nav>
                  )}
                </div>
              )}
              <div className="nav-bar-log-in-button">
                <div className="nav-bar-container2">
                  {!isLogged && (
                    <div className="nav-bar-color-primary-state-normal-type-filled">
                      <span className="nav-bar-text18 ButtonL">Log in</span>
                    </div>
                  )}
                </div>
              </div>
              {isLogged && (
                <div className="nav-bar-right-block">
                  <div className="nav-bar-navbar-notifications">
                    <div className="nav-bar-bell-icon">
                      <img
                        alt="FrameI243"
                        src="/external/framei243-rmuy.svg"
                        className="nav-bar-frame"
                      />
                    </div>
                    <div className="nav-bar-notification-number">
                      <span className="nav-bar-notification-number1">
                        {props.NotificationNumber}
                      </span>
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
                        {isUserSportOrg && (
                          <img
                            alt={props.Avatar_alt}
                            src={props.Avatar_src}
                            className="nav-bar-avatar1"
                          />
                        )}
                        {!isUserSportOrg && (
                          <img
                            alt={props.Avatar_alt1}
                            src={props.Avatar_src1}
                            className="nav-bar-avatar2"
                          />
                        )}
                      </div>
                      <span className="nav-bar-text19">Menu Item</span>
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
                          <span className="nav-bar-text20">Profile</span>
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
                          <span className="nav-bar-text21">Assignors</span>
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
                          <span className="nav-bar-text22">
                            Help &amp; Support
                          </span>
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
                          <span className="nav-bar-text23">Log Out</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="nav-bar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="nav-bar-icon01">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
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
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="nav-bar-links">
                <span className="nav-bar-text24">About</span>
                <span className="nav-bar-text25">Features</span>
                <span className="nav-bar-text26">Pricing</span>
                <span className="nav-bar-text27">Team</span>
                <span className="nav-bar-text28">Blog</span>
              </nav>
              <div className="nav-bar-buttons">
                <button className="nav-bar-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="nav-bar-icon05"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="nav-bar-icon07"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="nav-bar-icon09"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .nav-bar-container {
            width: 100%;
            height: 72px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .nav-bar-navbar-interactive {
            width: 100%;
            height: 72px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 135px;
            padding-right: 135px;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: var(--dl-color-default-white);
          }
          .nav-bar-navbar-logo {
            height: 2rem;
          }
          .nav-bar-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .nav-bar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .nav-bar-unlogged-links {
            flex: 1;
            display: flex;
            align-items: center;
            margin-right: 20px;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-bar-text {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
          }
          .nav-bar-text:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text:focus-visible {
            height: auto;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .nav-bar-text01 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text01:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text02 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text02:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text03 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text03:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-users-links-container {
            flex: 0 0 auto;
            width: 500px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-referee-links {
            flex: 1;
            display: flex;
            align-items: center;
            margin-right: 20px;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-bar-text04 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
          }
          .nav-bar-text04:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text04:focus-visible {
            height: auto;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .nav-bar-text05 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text05:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text06 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text06:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text07 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text07:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-assignor-links {
            flex: 1;
            display: flex;
            align-items: center;
            margin-right: 20px;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-bar-text08 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
          }
          .nav-bar-text08:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text08:focus-visible {
            height: auto;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .nav-bar-text09 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text09:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text10 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text10:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text11 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text11:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text12 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text12:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-sport-org-links {
            flex: 1;
            display: flex;
            align-items: center;
            margin-right: 20px;
            flex-direction: row;
            justify-content: flex-end;
          }
          .nav-bar-text13 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
          }
          .nav-bar-text13:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text13:focus-visible {
            height: auto;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .nav-bar-text14 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text14:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text14:focus-visible {
            height: auto;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .nav-bar-text15 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text15:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text16 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text16:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-text17 {
            color: var(--dl-color-grey-grey600);
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .nav-bar-text17:hover {
            color: var(--dl-color-grey-grey900);
          }
          .nav-bar-log-in-button {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-bar-container2 {
            width: 106px;
            height: 46px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-color-primary-state-normal-type-filled {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            padding: 14px 24px;
            align-self: center;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 100px;
            justify-content: center;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .nav-bar-color-primary-state-normal-type-filled:hover {
            background-color: #fbe289;
          }
          .nav-bar-text18 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            align-self: center;
            text-align: center;
            line-height: 16px;
          }
          .nav-bar-right-block {
            gap: 24px;
            display: flex;
            align-items: center;
          }
          .nav-bar-navbar-notifications {
            gap: 10px;
            display: flex;
            padding: 8px;
            position: relative;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-default-white);
          }
          .nav-bar-bell-icon {
            width: 24px;
            height: 24px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-bar-frame {
            top: 0px;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .nav-bar-notification-number {
            gap: 10px;
            top: -5px;
            right: -6px;
            width: 14px;
            height: 14px;
            display: flex;
            padding: 4px;
            z-index: 1;
            position: absolute;
            box-sizing: content-box;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(254, 250, 235, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 100px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-system-error500);
          }
          .nav-bar-notification-number1 {
            color: var(--dl-color-default-white);
            height: auto;
            font-size: 9px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 10px;
            font-stretch: normal;
            text-decoration: none;
          }
          .nav-bar-profile-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            background-color: white;
          }
          .nav-bar-dropdown-toggle:active {
            background-color: var(--dl-color-yellow-yellow400);
          }
          .nav-bar-avatar {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .nav-bar-avatar1 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .nav-bar-avatar2 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .nav-bar-text19 {
            display: none;
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .nav-bar-dropdown-arrow {
            transition: 0.3s;
          }
          .nav-bar-icon {
            width: 20px;
            height: 20px;
          }
          .nav-bar-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .nav-bar-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle1 {
            gap: 12px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-image {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .nav-bar-text20 {
            color: var(--dl-color-grey-grey700);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .nav-bar-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle2 {
            gap: 12px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-image1 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .nav-bar-text21 {
            color: var(--dl-color-grey-grey700);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .nav-bar-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .nav-bar-dropdown-toggle3 {
            gap: 12px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-image2 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .nav-bar-text22 {
            color: grey700;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .nav-bar-dropdown-toggle4 {
            gap: 12px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-dropdown-toggle4:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .nav-bar-image3 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .nav-bar-text23 {
            color: grey700;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .nav-bar-burger-menu {
            display: none;
          }
          .nav-bar-icon01 {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .nav-bar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav-bar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .nav-bar-logo {
            height: 2rem;
          }
          .nav-bar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .nav-bar-icon03 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .nav-bar-links {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .nav-bar-text24 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text26 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-text28 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .nav-bar-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .nav-bar-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-icon05 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-icon07 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .nav-bar-icon09 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 1200px) {
            .nav-bar-container {
              height: 72px;
            }
            .nav-bar-navbar-interactive {
              padding-left: 135px;
              padding-right: 135px;
            }
            .nav-bar-desktop-menu {
              display: none;
            }
            .nav-bar-unlogged-links {
              margin-right: 20px;
              justify-content: flex-end;
            }
            .nav-bar-referee-links {
              margin-right: 20px;
              justify-content: flex-end;
            }
            .nav-bar-assignor-links {
              margin-right: 20px;
              justify-content: flex-end;
            }
            .nav-bar-sport-org-links {
              margin-right: 20px;
              justify-content: flex-end;
            }
            .nav-bar-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 991px) {
            .nav-bar-color-primary-state-normal-type-filled {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .nav-bar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav-bar-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .nav-bar-text24 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-text25 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-text26 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-text27 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .nav-bar-text28 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .nav-bar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .nav-bar-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

NavBar.defaultProps = {
  Avatar_alt: 'Ellipse36I243',
  rootClassName: '',
  NotificationNumber: '2',
  Avatar_src: '/sportorgavatar-200h.png',
  Avatar_alt1: 'Ellipse36I243',
  Avatar_src1: '/external/avatar-1-200h.png',
}

NavBar.propTypes = {
  Avatar_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  NotificationNumber: PropTypes.string,
  Avatar_src: PropTypes.string,
  Avatar_alt1: PropTypes.string,
  Avatar_src1: PropTypes.string,
}

export default NavBar
