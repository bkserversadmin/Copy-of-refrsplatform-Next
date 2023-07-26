import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Tab from './tab'
import Input from './input'
import './profile-personal-info.css'

const ProfilePersonalInfo = (props) => {
  const [isSportOrg, setIsSportOrg] = useState(false)
  return (
    <div className="profile-personal-info-profile-personal-info">
      <div className="profile-personal-info-tabs">
        <Tab></Tab>
        <Tab text="Payout Information"></Tab>
      </div>
      <div className="profile-personal-info-profile-perosonal-info">
        <form className="profile-personal-info-form">
          {!isSportOrg && (
            <div className="profile-personal-info-form-container">
              <div className="profile-personal-info-frame5985">
                <span className="profile-personal-info-text Subtitle1">
                  <span>Detailed information</span>
                </span>
                <div className="profile-personal-info-frame5983">
                  <div className="profile-personal-info-general-text-field">
                    <div className="profile-personal-info-label-container">
                      <span className="profile-personal-info-text02 OverlineS">
                        <span>full name</span>
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name10"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field01">
                    <div className="profile-personal-info-label-container01">
                      <span className="profile-personal-info-text04 OverlineS">
                        <span>Sports</span>
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name11"></Input>
                  </div>
                </div>
                <div className="profile-personal-info-frame5984">
                  <div className="profile-personal-info-general-text-field02">
                    <div className="profile-personal-info-label-container02">
                      <span className="profile-personal-info-text06 OverlineS">
                        <span>state</span>
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name12"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field03">
                    <div className="profile-personal-info-label-container03">
                      <span className="profile-personal-info-text08 OverlineS">
                        <span>city</span>
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name13"></Input>
                  </div>
                </div>
                <div className="profile-personal-info-frame59851">
                  <div className="profile-personal-info-general-text-field04">
                    <div className="profile-personal-info-label-container04">
                      <span className="profile-personal-info-text10 OverlineS">
                        <span>contact number</span>
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name14"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field05">
                    <div className="profile-personal-info-label-container05">
                      <span className="profile-personal-info-text12 OverlineS">
                        <span>email</span>
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name15"></Input>
                  </div>
                </div>
              </div>
              <div className="profile-personal-info-frame5986">
                <span className="profile-personal-info-text14 Subtitle1">
                  <span>Certifications</span>
                </span>
                <div className="profile-personal-info-frame6034">
                  <div className="profile-personal-info-frame59831">
                    <div className="profile-personal-info-general-text-field06">
                      <div className="profile-personal-info-label-container06">
                        <span className="profile-personal-info-text16 OverlineS">
                          <span>certification</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name16"></Input>
                    </div>
                    <div className="profile-personal-info-general-text-field07">
                      <div className="profile-personal-info-label-container07">
                        <span className="profile-personal-info-text18 OverlineS">
                          <span>certification level</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name17"></Input>
                    </div>
                  </div>
                  <button className="profile-personal-info-button">
                    <img
                      alt={props.Icon_alt}
                      src={props.Icon_src}
                      className="profile-personal-info-icon"
                    />
                    <span className="profile-personal-info-text20 ButtonL">
                      <span>Add new certification</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
          {isSportOrg && (
            <div className="profile-personal-info-form-container1">
              <div className="profile-personal-info-frame59852">
                <span className="profile-personal-info-text22 Subtitle1">
                  <span>Detailed information</span>
                </span>
                <div className="profile-personal-info-frame59832">
                  <div className="profile-personal-info-general-text-field08">
                    <div className="profile-personal-info-label-container08">
                      <span className="profile-personal-info-organization-text OverlineS">
                        {props.organizationText}
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name18"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field09">
                    <div className="profile-personal-info-label-container09">
                      <span className="profile-personal-info-sports-text OverlineS">
                        {props.sportsText}
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name19"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field10">
                    <div className="profile-personal-info-label-container10">
                      <span className="profile-personal-info-city-text OverlineS">
                        {props.cityText}
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name26"></Input>
                  </div>
                </div>
                <div className="profile-personal-info-frame59841">
                  <div className="profile-personal-info-general-text-field11">
                    <div className="profile-personal-info-label-container11">
                      <span className="profile-personal-info-phone-number OverlineS">
                        {props.phoneNumber}
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name20"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field12">
                    <div className="profile-personal-info-label-container12">
                      <span className="profile-personal-info-email OverlineS">
                        {props.email}
                      </span>
                    </div>
                    <Input rootClassName="input-root-class-name21"></Input>
                  </div>
                  <div className="profile-personal-info-general-text-field13">
                    <div className="profile-personal-info-label-container13"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="profile-personal-info-text-block">
            <span className="profile-personal-info-about-message Subtitle1">
              Experience
            </span>
            <textarea
              placeholder={props.textarea_placeholder}
              className="profile-personal-info-textarea textarea"
            ></textarea>
          </div>
          <div className="profile-personal-info-button-container">
            <button className="profile-personal-info-button1">
              <span className="profile-personal-info-text24 ButtonL">
                <span>Save changes</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

ProfilePersonalInfo.defaultProps = {
  cityText: 'city',
  Icon_src: '/external/iconi296-mbl1.svg',
  phoneNumber: 'contact number',
  email: 'email',
  sportsText: 'Sports',
  Icon_alt: 'IconI296',
  textarea_placeholder: 'placeholder',
  Icon_alt1: 'IconI296',
  Icon_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4fe647b-7cb7-4c59-9d19-82408bba165d/1d7a08d0-ab63-4e42-b6d0-35bfea4fe823?org_if_sml=11280',
  organizationText: 'organization name',
  text1: 'Personal Information',
}

ProfilePersonalInfo.propTypes = {
  cityText: PropTypes.string,
  Icon_src: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  sportsText: PropTypes.string,
  Icon_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  Icon_alt1: PropTypes.string,
  Icon_src1: PropTypes.string,
  organizationText: PropTypes.string,
  text1: PropTypes.string,
}

export default ProfilePersonalInfo
