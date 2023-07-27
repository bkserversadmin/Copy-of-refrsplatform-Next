import React from 'react'

import PropTypes from 'prop-types'

import Tab from './tab'
import Input from './input'
import './s-profile-info.css'

const SOProfileInfo = (props) => {
  return (
    <div className="s-profile-info-profile-personal-info">
      <div className="s-profile-info-tabs">
        <Tab></Tab>
        <Tab text="Payout Information"></Tab>
      </div>
      <div className="s-profile-info-info-container">
        <form className="s-profile-info-form">
          <div className="s-profile-info-form-container formContainer">
            <span className="Subtitle1 subtitle-1">Detailed information</span>
            <div className="formRow">
              <div className="s-profile-info-general-text-field input-container">
                <div className="s-profile-info-label-container label-container">
                  <span className="s-profile-info-organization-text OverlineS overlineS">
                    {props.organizationText}
                  </span>
                </div>
                <Input rootClassName="input-root-class-name18"></Input>
              </div>
              <div className="s-profile-info-general-text-field1 input-container">
                <div className="s-profile-info-label-container1 label-container">
                  <span className="s-profile-info-sports-text OverlineS overlineS">
                    {props.sportsText}
                  </span>
                </div>
                <Input rootClassName="input-root-class-name19"></Input>
              </div>
              <div className="s-profile-info-general-text-field2 input-container">
                <div className="s-profile-info-label-container2 label-container">
                  <span className="s-profile-info-city-text OverlineS overlineS">
                    {props.cityText}
                  </span>
                </div>
                <Input rootClassName="input-root-class-name26"></Input>
              </div>
            </div>
            <div className="s-profile-info-form-row1 formRow">
              <div className="s-profile-info-general-text-field3 input-container">
                <div className="s-profile-info-label-container3 label-container">
                  <span className="s-profile-info-phone-number OverlineS overlineS">
                    {props.phoneNumber}
                  </span>
                </div>
                <Input rootClassName="input-root-class-name20"></Input>
              </div>
              <div className="s-profile-info-general-text-field4 input-container">
                <div className="s-profile-info-label-container4 label-container">
                  <span className="s-profile-info-email OverlineS overlineS">
                    {props.email}
                  </span>
                </div>
                <Input rootClassName="input-root-class-name21"></Input>
              </div>
              <div className="s-profile-info-general-text-field5 input-container">
                <div className="s-profile-info-label-container5"></div>
              </div>
            </div>
          </div>
          <div className="s-profile-info-experience-container">
            <span className="s-profile-info-about-message OverlineS overlineS Subtitle1">
              Experience
            </span>
            <textarea
              placeholder={props.textarea_placeholder}
              className="s-profile-info-textarea textarea"
            ></textarea>
          </div>
          <div className="btnContainer">
            <button className="s-profile-info-button btnYellow">
              <span className="s-profile-info-text1 ButtonL">
                <span>Save changes</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

SOProfileInfo.defaultProps = {
  cityText: 'city',
  Icon_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4fe647b-7cb7-4c59-9d19-82408bba165d/1d7a08d0-ab63-4e42-b6d0-35bfea4fe823?org_if_sml=11280',
  text1: 'Personal Information',
  phoneNumber: 'contact number',
  email: 'email',
  sportsText: 'Sports',
  Icon_alt: 'IconI296',
  textarea_placeholder: 'placeholder',
  Icon_alt1: 'IconI296',
  Icon_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c4fe647b-7cb7-4c59-9d19-82408bba165d/1d7a08d0-ab63-4e42-b6d0-35bfea4fe823?org_if_sml=11280',
  organizationText: 'organization name',
}

SOProfileInfo.propTypes = {
  cityText: PropTypes.string,
  Icon_src: PropTypes.string,
  text1: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  sportsText: PropTypes.string,
  Icon_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  Icon_alt1: PropTypes.string,
  Icon_src1: PropTypes.string,
  organizationText: PropTypes.string,
}

export default SOProfileInfo
