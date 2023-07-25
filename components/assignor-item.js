import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ButtonPrimary from './button-primary'

const AssignorItem = (props) => {
  const [isPaired, setIsPaired] = useState(false)
  return (
    <>
      <div className={`assignor-item-container ${props.rootClassName} `}>
        {!isPaired && (
          <div className="assignor-item-assignor-list-item">
            <div className="assignor-item-userinfo">
              <div className="assignor-item-profile-container">
                <div className="assignor-item-avatar">
                  <img
                    alt={props.Ellipse36_alt}
                    src={props.Ellipse36_src}
                    className="assignor-item-ellipse36"
                  />
                </div>
                <div className="assignor-item-info-container">
                  <span className="assignor-item-name Body1">{props.Name}</span>
                  <span className="assignor-item-sport-org-name Body3">
                    {props.sportOrgName}
                  </span>
                </div>
              </div>
            </div>
            <div className="assignor-item-contact-info-container">
              <div className="assignor-item-phone">
                <img
                  alt={props.phoneIcon_alt}
                  src={props.phoneIcon_src}
                  className="assignor-item-phone-icon"
                />
                <span className="assignor-item-phone-number Body2">
                  {props.phoneNumber}
                </span>
              </div>
              <div className="assignor-item-email">
                <img
                  alt={props.emailIcon_alt}
                  src={props.emailIcon_src}
                  className="assignor-item-email-icon"
                />
                <span className="assignor-item-email1 Body2">
                  {props.email}
                </span>
              </div>
              <div className="assignor-item-location">
                <img
                  alt={props.locationIcon_alt}
                  src={props.locationIcon_src}
                  className="assignor-item-location-icon"
                />
                <span className="assignor-item-location1 Body2">
                  {props.location}
                </span>
              </div>
            </div>
            <ButtonPrimary
              primaryText="Add to pool"
              rootClassName="button-primary-root-class-name8"
            ></ButtonPrimary>
          </div>
        )}
        {isPaired && (
          <div className="assignor-item-assignor-list-item1">
            <div className="assignor-item-userinfo1">
              <div className="assignor-item-profile-container1">
                <div className="assignor-item-avatar1">
                  <img
                    alt={props.Ellipse36_alt1}
                    src={props.Ellipse36_src1}
                    className="assignor-item-ellipse361"
                  />
                </div>
                <div className="assignor-item-info-container1">
                  <span className="assignor-item-name1 Body1">
                    {props.Name1}
                  </span>
                  <span className="assignor-item-sport-org-name1 Body3">
                    {props.sportOrgName1}
                  </span>
                </div>
              </div>
            </div>
            <div className="assignor-item-contact-info-container1">
              <div className="assignor-item-phone1">
                <img
                  alt={props.phoneIcon_alt1}
                  src={props.phoneIcon_src1}
                  className="assignor-item-phone-icon1"
                />
                <span className="assignor-item-phone-number1 Body2">
                  {props.phoneNumber1}
                </span>
              </div>
              <div className="assignor-item-email2">
                <img
                  alt={props.emailIcon_alt1}
                  src={props.emailIcon_src1}
                  className="assignor-item-email-icon1"
                />
                <span className="assignor-item-email3 Body2">
                  {props.email1}
                </span>
              </div>
              <div className="assignor-item-location2">
                <img
                  alt={props.locationIcon_alt1}
                  src={props.locationIcon_src1}
                  className="assignor-item-location-icon1"
                />
                <span className="assignor-item-location3 Body2">
                  {props.location1}
                </span>
              </div>
            </div>
            <ButtonPrimary
              primaryText="Add to pool"
              rootClassName="button-primary-root-class-name9"
            ></ButtonPrimary>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .assignor-item-container {
            width: 100%;
            height: 95px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .assignor-item-assignor-list-item {
            gap: 32px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 24px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            padding-right: 24px 16px;
            background-color: rgba(255, 255, 255, 1);
          }
          .assignor-item-userinfo {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .assignor-item-profile-container {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .assignor-item-avatar {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .assignor-item-ellipse36 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .assignor-item-info-container {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .assignor-item-name {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .assignor-item-sport-org-name {
            color: var(--dl-color-grey-grey700);
            height: auto;
            opacity: 0.7;
            text-align: left;
            line-height: 16px;
          }
          .assignor-item-contact-info-container {
            gap: 48px;
            display: flex;
            align-items: flex-start;
          }
          .assignor-item-phone {
            gap: 8px;
            width: 160px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .assignor-item-phone-icon {
            width: 20px;
            height: 20px;
          }
          .assignor-item-phone-number {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .assignor-item-email {
            gap: 8px;
            width: 170px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .assignor-item-email-icon {
            width: 20px;
            height: 20px;
          }
          .assignor-item-email1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .assignor-item-location {
            gap: 8px;
            width: 130px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .assignor-item-location-icon {
            width: 20px;
            height: 20px;
          }
          .assignor-item-location1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .assignor-item-assignor-list-item1 {
            gap: 32px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 24px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-yellow-yellow300);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            padding-right: 24px 16px;
            background-color: var(--dl-color-yellow-yellow100);
          }
          .assignor-item-userinfo1 {
            gap: 12px;
            display: flex;
            flex-grow: 1;
            align-items: center;
          }
          .assignor-item-profile-container1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .assignor-item-avatar1 {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .assignor-item-ellipse361 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .assignor-item-info-container1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .assignor-item-name1 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .assignor-item-sport-org-name1 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            opacity: 0.7;
            text-align: left;
            line-height: 16px;
          }
          .assignor-item-contact-info-container1 {
            gap: 48px;
            display: flex;
            align-items: flex-start;
          }
          .assignor-item-phone1 {
            gap: 8px;
            width: 160px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .assignor-item-phone-icon1 {
            width: 20px;
            height: 20px;
          }
          .assignor-item-phone-number1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .assignor-item-email2 {
            gap: 8px;
            width: 170px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .assignor-item-email-icon1 {
            width: 20px;
            height: 20px;
          }
          .assignor-item-email3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .assignor-item-location2 {
            gap: 8px;
            width: 130px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .assignor-item-location-icon1 {
            width: 20px;
            height: 20px;
          }
          .assignor-item-location3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .assignor-item-root-class-name {
            height: auto;
          }
          .assignor-item-root-class-name1 {
            height: auto;
          }
          .assignor-item-root-class-name2 {
            height: auto;
          }
          .assignor-item-root-class-name3 {
            height: auto;
          }
          .assignor-item-root-class-name4 {
            height: auto;
          }
          .assignor-item-root-class-name5 {
            height: 95px;
          }
        `}
      </style>
    </>
  )
}

AssignorItem.defaultProps = {
  Ellipse36_alt: 'Ellipse36I486',
  sportOrgName1: 'Sport organization name',
  location1: 'Santa Ana',
  location: 'Santa Ana',
  email1: 'petern@mail.com',
  phoneNumber1: '(603) 555-0123',
  locationIcon_alt: 'IconI486',
  phoneIcon_alt1: 'IconI486',
  emailIcon_src: '/external/iconi486-wynp.svg',
  emailIcon_src1: '/external/iconi486-wynp.svg',
  sportOrgName: 'Sport organization name',
  phoneIcon_alt: 'IconI486',
  phoneIcon_src1: '/external/iconi486-koxh.svg',
  phoneIcon_src: '/external/iconi486-koxh.svg',
  rootClassName: '',
  locationIcon_src1: '/external/iconi486-dpzv.svg',
  locationIcon_src: '/external/iconi486-dpzv.svg',
  emailIcon_alt1: 'IconI486',
  Name: 'Peter Nyaboke',
  email: 'petern@mail.com',
  Ellipse36_src: '/avatar-2-200h.png',
  emailIcon_alt: 'IconI486',
  Ellipse36_alt1: 'Ellipse36I486',
  Ellipse36_src1: '/avatar-2-200h.png',
  phoneNumber: '(603) 555-0123',
  Name1: 'Peter Nyaboke',
  locationIcon_alt1: 'IconI486',
}

AssignorItem.propTypes = {
  Ellipse36_alt: PropTypes.string,
  sportOrgName1: PropTypes.string,
  location1: PropTypes.string,
  location: PropTypes.string,
  email1: PropTypes.string,
  phoneNumber1: PropTypes.string,
  locationIcon_alt: PropTypes.string,
  phoneIcon_alt1: PropTypes.string,
  emailIcon_src: PropTypes.string,
  emailIcon_src1: PropTypes.string,
  sportOrgName: PropTypes.string,
  phoneIcon_alt: PropTypes.string,
  phoneIcon_src1: PropTypes.string,
  phoneIcon_src: PropTypes.string,
  rootClassName: PropTypes.string,
  locationIcon_src1: PropTypes.string,
  locationIcon_src: PropTypes.string,
  emailIcon_alt1: PropTypes.string,
  Name: PropTypes.string,
  email: PropTypes.string,
  Ellipse36_src: PropTypes.string,
  emailIcon_alt: PropTypes.string,
  Ellipse36_alt1: PropTypes.string,
  Ellipse36_src1: PropTypes.string,
  phoneNumber: PropTypes.string,
  Name1: PropTypes.string,
  locationIcon_alt1: PropTypes.string,
}

export default AssignorItem
