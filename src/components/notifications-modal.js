import React from 'react'

import NotificationItem from './notification-item'
import './notifications-modal.css'

const NotificationsModal = (props) => {
  return (
    <div className="notifications-modal-container">
      <div className="notifications-modal-notifications-modal">
        <div className="notifications-modal-header">
          <span className="notifications-modal-notifications-title Subtitle1">
            Notifications
          </span>
        </div>
        <div className="notifications-modal-notifications-and-tracker">
          <div className="notifications-modal-notifications-container">
            <NotificationItem rootClassName="notification-item-root-class-name"></NotificationItem>
            <div className="notifications-modal-notifications-notification">
              <div className="notifications-modal-left-container">
                <div className="notifications-modal-avatar">
                  <img
                    alt="Ellipse36I256"
                    src="/external/ellipse36i256-xjj-200h.png"
                    className="notifications-modal-ellipse36"
                  />
                </div>
                <div className="notifications-modal-message-and-time">
                  <div className="notifications-modal-message">
                    <span className="notifications-modal-text">
                      <span>Marvin</span>
                    </span>
                    <span className="notifications-modal-text02 Body2">
                      <span>assigned you to</span>
                    </span>
                    <span className="notifications-modal-text04">
                      <span>Seattle vs Dallas</span>
                    </span>
                    <span className="notifications-modal-text06 Body2">
                      <span>game.</span>
                    </span>
                  </div>
                  <span className="notifications-modal-text08 Caption">
                    <span>3 hours ago</span>
                  </span>
                </div>
              </div>
              <img
                alt="Ellipse43I256"
                src="/external/ellipse43i256-jpm-200h.png"
                className="notifications-modal-ellipse43"
              />
            </div>
            <div className="notifications-modal-notifications-notification1">
              <div className="notifications-modal-left-container1">
                <div className="notifications-modal-newmatch">
                  <img
                    alt="IconI256"
                    src="/external/iconi256-dalo.svg"
                    className="notifications-modal-icon"
                  />
                </div>
                <div className="notifications-modal-message-and-time1">
                  <div className="notifications-modal-message1">
                    <span className="notifications-modal-text10 Body2">
                      <span>There are new games available for you.</span>
                    </span>
                  </div>
                  <span className="notifications-modal-text12 Caption">
                    <span>1 day ago</span>
                  </span>
                </div>
              </div>
              <img
                alt="Ellipse43I256"
                src="/external/ellipse43i256-71zh-200h.png"
                className="notifications-modal-ellipse431"
              />
            </div>
            <div className="notifications-modal-notifications-notification2">
              <div className="notifications-modal-left-container2">
                <div className="notifications-modal-newmatch1">
                  <img
                    alt="IconI256"
                    src="/external/iconi256-mdzs.svg"
                    className="notifications-modal-icon1"
                  />
                </div>
                <div className="notifications-modal-message-and-time2">
                  <div className="notifications-modal-message2">
                    <span className="notifications-modal-text14 Body2">
                      <span>You received new payments.</span>
                    </span>
                  </div>
                  <span className="notifications-modal-text16 Caption">
                    <span>1 day ago</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="notifications-modal-notifications-notification3">
              <div className="notifications-modal-left-container3">
                <div className="notifications-modal-newmatch2">
                  <img
                    alt="IconI256"
                    src="/external/iconi256-jer.svg"
                    className="notifications-modal-icon2"
                  />
                </div>
                <div className="notifications-modal-message-and-time3">
                  <div className="notifications-modal-message3">
                    <span className="notifications-modal-text18 Body2">
                      <span>There are new games available for you.</span>
                    </span>
                  </div>
                  <span className="notifications-modal-text20 Caption">
                    <span>1 week ago</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsModal
