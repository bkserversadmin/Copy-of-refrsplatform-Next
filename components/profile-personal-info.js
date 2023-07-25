import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Input from './input'

const ProfilePersonalInfo = (props) => {
  const [isSportOrg, setIsSportOrg] = useState(false)
  return (
    <>
      <div className="profile-personal-info-profile-personal-info">
        <div className="profile-personal-info-tabs">
          <div className="profile-personal-info-tab">
            <span className="profile-personal-info-text Body2">
              {props.text}
            </span>
          </div>
        </div>
        <div className="profile-personal-info-profile-perosonal-info">
          <form className="profile-personal-info-form">
            {!isSportOrg && (
              <div className="profile-personal-info-form-container">
                <div className="profile-personal-info-frame5985">
                  <span className="profile-personal-info-text01 Subtitle1">
                    <span>Detailed information</span>
                  </span>
                  <div className="profile-personal-info-frame5983">
                    <div className="profile-personal-info-general-text-field">
                      <div className="profile-personal-info-label-container">
                        <span className="profile-personal-info-text03 OverlineS">
                          <span>full name</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name10"></Input>
                    </div>
                    <div className="profile-personal-info-general-text-field01">
                      <div className="profile-personal-info-label-container01">
                        <span className="profile-personal-info-text05 OverlineS">
                          <span>Sports</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name11"></Input>
                    </div>
                  </div>
                  <div className="profile-personal-info-frame5984">
                    <div className="profile-personal-info-general-text-field02">
                      <div className="profile-personal-info-label-container02">
                        <span className="profile-personal-info-text07 OverlineS">
                          <span>state</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name12"></Input>
                    </div>
                    <div className="profile-personal-info-general-text-field03">
                      <div className="profile-personal-info-label-container03">
                        <span className="profile-personal-info-text09 OverlineS">
                          <span>city</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name13"></Input>
                    </div>
                  </div>
                  <div className="profile-personal-info-frame59851">
                    <div className="profile-personal-info-general-text-field04">
                      <div className="profile-personal-info-label-container04">
                        <span className="profile-personal-info-text11 OverlineS">
                          <span>contact number</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name14"></Input>
                    </div>
                    <div className="profile-personal-info-general-text-field05">
                      <div className="profile-personal-info-label-container05">
                        <span className="profile-personal-info-text13 OverlineS">
                          <span>email</span>
                        </span>
                      </div>
                      <Input rootClassName="input-root-class-name15"></Input>
                    </div>
                  </div>
                </div>
                <div className="profile-personal-info-frame5986">
                  <span className="profile-personal-info-text15 Subtitle1">
                    <span>Certifications</span>
                  </span>
                  <div className="profile-personal-info-frame6034">
                    <div className="profile-personal-info-frame59831">
                      <div className="profile-personal-info-general-text-field06">
                        <div className="profile-personal-info-label-container06">
                          <span className="profile-personal-info-text17 OverlineS">
                            <span>certification</span>
                          </span>
                        </div>
                        <Input rootClassName="input-root-class-name16"></Input>
                      </div>
                      <div className="profile-personal-info-general-text-field07">
                        <div className="profile-personal-info-label-container07">
                          <span className="profile-personal-info-text19 OverlineS">
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
                      <span className="profile-personal-info-text21 ButtonL">
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
                  <span className="profile-personal-info-text23 Subtitle1">
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
                <span className="profile-personal-info-text25 ButtonL">
                  <span>Save changes</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .profile-personal-info-profile-personal-info {
            gap: 48px;
            width: 1170px;
            display: flex;
            padding: 32px;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .profile-personal-info-tabs {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-tab {
            gap: 10px;
            height: 48px;
            display: flex;
            padding: 17px 16px;
            position: relative;
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .profile-personal-info-tab:active {
            background-color: var(--dl-color-yellow-yellow400);
          }
          .profile-personal-info-text {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .profile-personal-info-profile-perosonal-info {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .profile-personal-info-form {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .profile-personal-info-form-container {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .profile-personal-info-frame5985 {
            gap: 24px;
            width: 532.5px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .profile-personal-info-text01 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-frame5983 {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-general-text-field {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text03 {
            color: var(--dl-color-yellow-yellow700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-general-text-field01 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container01 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text05 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-frame5984 {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-general-text-field02 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container02 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text07 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-general-text-field03 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container03 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text09 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-frame59851 {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-general-text-field04 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container04 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text11 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-general-text-field05 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container05 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text13 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-frame5986 {
            gap: 24px;
            width: 532.5px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .profile-personal-info-text15 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-frame6034 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-frame59831 {
            gap: 30px;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-general-text-field06 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container06 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text17 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-general-text-field07 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container07 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text19 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-button {
            gap: 12px;
            display: flex;
            padding: 14px 24px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: var(--dl-color-yellow-yellow200);
          }
          .profile-personal-info-icon {
            width: 16px;
            height: 16px;
          }
          .profile-personal-info-text21 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .profile-personal-info-form-container1 {
            gap: 40px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .profile-personal-info-frame59852 {
            gap: 24px;
            width: 532.5px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .profile-personal-info-text23 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-frame59832 {
            gap: 30px;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-general-text-field08 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container08 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-organization-text {
            color: var(--dl-color-yellow-yellow700);
            height: auto;
            text-align: left;
            line-height: normal;
            text-transform: uppercase;
          }
          .profile-personal-info-general-text-field09 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container09 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-sports-text {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
            text-transform: uppercase;
          }
          .profile-personal-info-general-text-field10 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container10 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-city-text {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
            text-transform: uppercase;
          }
          .profile-personal-info-frame59841 {
            gap: 30px;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .profile-personal-info-general-text-field11 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container11 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-phone-number {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
            text-transform: uppercase;
          }
          .profile-personal-info-general-text-field12 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container12 {
            gap: 10px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-email {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
            text-transform: uppercase;
          }
          .profile-personal-info-general-text-field13 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-label-container13 {
            gap: 10px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: 0 0 0 16px;
            align-items: flex-start;
          }
          .profile-personal-info-text-block {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-personal-info-about-message {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .profile-personal-info-textarea {
            width: 100%;
            height: 100px;
            border-color: var(--dl-color-grey-grey500);
          }
          .profile-personal-info-button-container {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .profile-personal-info-button1 {
            gap: 12px;
            display: flex;
            padding: 14px 24px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .profile-personal-info-text25 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
        `}
      </style>
    </>
  )
}

ProfilePersonalInfo.defaultProps = {
  cityText: 'city',
  Icon_src: '/external/iconi296-mbl1.svg',
  text: 'Personal Information',
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

ProfilePersonalInfo.propTypes = {
  cityText: PropTypes.string,
  Icon_src: PropTypes.string,
  text: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  sportsText: PropTypes.string,
  Icon_alt: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  Icon_alt1: PropTypes.string,
  Icon_src1: PropTypes.string,
  organizationText: PropTypes.string,
}

export default ProfilePersonalInfo
