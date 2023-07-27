import React from 'react'

import PropTypes from 'prop-types'

import ButtonYellow from './button-yellow'
import './assignor-item.css'

const AssignorItem = (props) => {
  return (
    <div className={`assignor-item-container ${props.rootClassName} `}>
      <div className="assignorListItem">
        <div className="userInfo">
          <div className="profileContainer">
            <div className="assignor-item-avatar">
              <img
                alt="Ellipse36I486"
                src="/avatar-2-200h.png"
                className="profileAvatar"
              />
            </div>
            <div className="assignor-item-info-container">
              <span className="Body1 profileName">Peter Nyaboke</span>
              <span className="Body3 sportOrgName">
                Sport organization name
              </span>
            </div>
          </div>
        </div>
        <div className="contactInfoContainer">
          <div className="contactItem">
            <img
              alt="IconI486"
              src="/external/iconi486-koxh.svg"
              className="assignor-item-phone-icon"
            />
            <span className="assignor-item-phone-number Body2">
              (603) 555-0123
            </span>
          </div>
          <div className="assignor-item-email contactItem">
            <img
              alt="IconI486"
              src="/external/iconi486-wynp.svg"
              className="assignor-item-email-icon"
            />
            <span className="assignor-item-email1 Body2">petern@mail.com</span>
          </div>
          <div className="assignor-item-location contactItem">
            <img
              alt="IconI486"
              src="/external/iconi486-dpzv.svg"
              className="assignor-item-location-icon"
            />
            <span className="assignor-item-location1 Body2">Santa Ana</span>
          </div>
        </div>
        <ButtonYellow
          primaryText="Add to pool"
          rootClassName="button-yellow-root-class-name8"
          className=""
        ></ButtonYellow>
      </div>
      <div className="assignorListItemActive">
        <div className="assignor-item-userinfo1 userInfo">
          <div className="assignor-item-profile-container1 profileContainer">
            <div className="assignor-item-avatar1">
              <img
                alt="Ellipse36I486"
                src="/avatar-2-200h.png"
                className="assignor-item-ellipse361 profileAvatar"
              />
            </div>
            <div className="assignor-item-info-container1">
              <span className="assignor-item-name1 Body1 profileName">
                Peter Nyaboke
              </span>
              <span className="assignor-item-sport-org-name1 Body3 sportOrgName">
                Sport organization name
              </span>
            </div>
          </div>
        </div>
        <div className="assignor-item-contact-info-container1 contactInfoContainer">
          <div className="assignor-item-phone1 contactItem">
            <img
              alt="IconI486"
              src="/external/iconi486-koxh.svg"
              className="assignor-item-phone-icon1"
            />
            <span className="assignor-item-phone-number1 Body2">
              (603) 555-0123
            </span>
          </div>
          <div className="assignor-item-email2 contactItem">
            <img
              alt="IconI486"
              src="/external/iconi486-wynp.svg"
              className="assignor-item-email-icon1"
            />
            <span className="assignor-item-email3 Body2">petern@mail.com</span>
          </div>
          <div className="assignor-item-location2 contactItem">
            <img
              alt="IconI486"
              src="/external/iconi486-dpzv.svg"
              className="assignor-item-location-icon1"
            />
            <span className="assignor-item-location3 Body2">Santa Ana</span>
          </div>
        </div>
        <ButtonYellow
          primaryText="Add to pool"
          rootClassName="button-yellow-root-class-name9"
          className=""
        ></ButtonYellow>
      </div>
    </div>
  )
}

AssignorItem.defaultProps = {
  rootClassName: '',
}

AssignorItem.propTypes = {
  rootClassName: PropTypes.string,
}

export default AssignorItem
