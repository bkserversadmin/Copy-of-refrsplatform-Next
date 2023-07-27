import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Tab from './tab'
import Input from './input'
import './profile-personal-info.css'

const ProfilePersonalInfo = (props) => {
  const [isSportOrg, setIsSportOrg] = useState(false)
  return (
    <div
      className={`profile-personal-info-profile-personal-info ${props.rootClassName} `}
    >
      <div className="profile-personal-info-tabs">
        <Tab className=""></Tab>
        <Tab text="Payout Information" className=""></Tab>
      </div>
      <div className="profile-personal-info-profile-perosonal-info">
        <form className="profile-personal-info-form">
          <div className="profile-personal-info-form-container">
            <div className="profile-personal-info-frame5985">
              <span className="profile-personal-info-text Subtitle1">
                Detailed information
              </span>
              <div className="profile-personal-info-frame5983">
                <div className="profile-personal-info-general-text-field">
                  <div className="profile-personal-info-label-container">
                    <span className="OverlineS overlineS">
                      <span className="">full name</span>
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name32"
                    className=""
                  ></Input>
                </div>
                <div className="profile-personal-info-general-text-field1">
                  <div className="profile-personal-info-label-container1">
                    <span className="profile-personal-info-text03 OverlineS overlineS">
                      Sports
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name33"
                    className=""
                  ></Input>
                </div>
              </div>
              <div className="profile-personal-info-frame5984">
                <div className="profile-personal-info-general-text-field2">
                  <div className="profile-personal-info-label-container2">
                    <span className="profile-personal-info-text04 OverlineS overlineS">
                      state
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name34"
                    className=""
                  ></Input>
                </div>
                <div className="profile-personal-info-general-text-field3">
                  <div className="profile-personal-info-label-container3">
                    <span className="profile-personal-info-text05 OverlineS overlineS">
                      city
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name35"
                    className=""
                  ></Input>
                </div>
              </div>
              <div className="profile-personal-info-frame59851">
                <div className="profile-personal-info-general-text-field4">
                  <div className="profile-personal-info-label-container4">
                    <span className="profile-personal-info-text06 OverlineS overlineS">
                      contact number
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name36"
                    className=""
                  ></Input>
                </div>
                <div className="profile-personal-info-general-text-field5">
                  <div className="profile-personal-info-label-container5">
                    <span className="profile-personal-info-text07 OverlineS overlineS">
                      email
                    </span>
                  </div>
                  <Input
                    rootClassName="input-root-class-name37"
                    className=""
                  ></Input>
                </div>
              </div>
            </div>
            <div className="profile-personal-info-frame5986">
              <span className="profile-personal-info-text08 Subtitle1">
                Certifications
              </span>
              <div className="profile-personal-info-frame6034">
                <div className="profile-personal-info-frame59831">
                  <div className="profile-personal-info-general-text-field6">
                    <div className="profile-personal-info-label-container6">
                      <span className="profile-personal-info-text09 OverlineS overlineS">
                        certification
                      </span>
                    </div>
                    <Input
                      rootClassName="input-root-class-name43"
                      className=""
                    ></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field7">
                    <div className="profile-personal-info-label-container7">
                      <span className="profile-personal-info-text10 OverlineS overlineS">
                        certification level
                      </span>
                    </div>
                    <Input
                      rootClassName="input-root-class-name44"
                      className=""
                    ></Input>
                  </div>
                </div>
                <button className="profile-personal-info-button">
                  <img
                    alt={props.Icon_alt}
                    src={props.Icon_src}
                    className="profile-personal-info-icon"
                  />
                  <span className="profile-personal-info-text11 ButtonL">
                    <span className="">Add new certification</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="profile-personal-info-button-container">
            <button className="profile-personal-info-button1">
              <span className="profile-personal-info-text13 ButtonL">
                <span className="">Save changes</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

ProfilePersonalInfo.defaultProps = {
  Icon_alt: 'IconI296',
  textarea_placeholder: 'placeholder',
  rootClassName: '',
  phoneNumber: 'contact number',
  sportsText: 'Sports',
  cityText: 'city',
  Icon_src: '/external/iconi296-mbl1.svg',
  email: 'email',
  organizationText: 'organization name',
}

ProfilePersonalInfo.propTypes = {
  Icon_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  phoneNumber: PropTypes.string,
  sportsText: PropTypes.string,
  cityText: PropTypes.string,
  Icon_src: PropTypes.string,
  email: PropTypes.string,
  organizationText: PropTypes.string,
}

export default ProfilePersonalInfo
