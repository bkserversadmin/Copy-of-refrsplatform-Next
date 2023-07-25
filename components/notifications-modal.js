import React from 'react'

const NotificationsModal = (props) => {
  return (
    <>
      <div className="notifications-modal-container">
        <div className="notifications-modal-notifications-modal">
          <div className="notifications-modal-header">
            <span className="notifications-modal-notifications-title Subtitle1">
              Notifications
            </span>
          </div>
          <div className="notifications-modal-notifications-and-tracker">
            <div className="notifications-modal-notifications-container">
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
      <style jsx>
        {`
          .notifications-modal-container {
            width: 500px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .notifications-modal-notifications-modal {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.05000000074505806);
            align-items: flex-start;
            border-radius: 8px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .notifications-modal-header {
            gap: 10px;
            display: flex;
            padding: 16px;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 0 0 1px;
          }
          .notifications-modal-notifications-title {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notifications-modal-notifications-and-tracker {
            width: 100%;
            display: flex;
            align-items: flex-end;
          }
          .notifications-modal-notifications-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .notifications-modal-notifications-notification {
            gap: 8px;
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: var(--dl-color-yellow-yellow50);
          }
          .notifications-modal-left-container {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .notifications-modal-avatar {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .notifications-modal-ellipse36 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .notifications-modal-message-and-time {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notifications-modal-message {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notifications-modal-text {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .notifications-modal-text02 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .notifications-modal-text04 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .notifications-modal-text06 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .notifications-modal-text08 {
            color: var(--dl-color-yellow-yellow700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notifications-modal-ellipse43 {
            width: 8px;
            height: 8px;
          }
          .notifications-modal-notifications-notification1 {
            gap: 8px;
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: var(--dl-color-yellow-yellow50);
          }
          .notifications-modal-left-container1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .notifications-modal-newmatch {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notifications-modal-icon {
            width: 24px;
            height: 24px;
          }
          .notifications-modal-message-and-time1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notifications-modal-message1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notifications-modal-text10 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .notifications-modal-text12 {
            color: var(--dl-color-yellow-yellow700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notifications-modal-ellipse431 {
            width: 8px;
            height: 8px;
          }
          .notifications-modal-notifications-notification2 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .notifications-modal-left-container2 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .notifications-modal-newmatch1 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notifications-modal-icon1 {
            width: 24px;
            height: 24px;
          }
          .notifications-modal-message-and-time2 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notifications-modal-message2 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notifications-modal-text14 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .notifications-modal-text16 {
            color: var(--dl-color-yellow-yellow700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notifications-modal-notifications-notification3 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .notifications-modal-left-container3 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .notifications-modal-newmatch2 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notifications-modal-icon2 {
            width: 24px;
            height: 24px;
          }
          .notifications-modal-message-and-time3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notifications-modal-message3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notifications-modal-text18 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .notifications-modal-text20 {
            color: var(--dl-color-yellow-yellow700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
        `}
      </style>
    </>
  )
}

export default NotificationsModal
