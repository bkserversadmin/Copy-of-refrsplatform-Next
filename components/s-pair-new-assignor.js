import React from 'react'

import PropTypes from 'prop-types'

const SOPairNewAssignor = (props) => {
  return (
    <>
      <div className="s-pair-new-assignor-container">
        <div className="s-pair-new-assignor-pair-new-assignor">
          <div className="s-pair-new-assignor-modal-header">
            <div className="s-pair-new-assignor-title-close-row">
              <span className="s-pair-new-assignor-pair-a-new-assignor Headine3">
                <span>Pair a new assignor</span>
              </span>
              <img
                alt="materialsymbolscloseI488"
                src="/external/materialsymbolsclosei488-klsg.svg"
                className="s-pair-new-assignor-materialsymbolsclose"
              />
            </div>
            <span className="s-pair-new-assignor-subtitle Body3">
              <span>
                Search and pair new assignors with your sport organization
              </span>
            </span>
          </div>
          <div className="s-pair-new-assignor-modal-body">
            <div className="s-pair-new-assignor-search-and-filters">
              <span className="s-pair-new-assignor-text2">
                <span>search assignors</span>
              </span>
              <div className="s-pair-new-assignor-search-bar">
                <img
                  alt="IconI488"
                  src="/external/iconi488-in3i.svg"
                  className="s-pair-new-assignor-icon"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="s-pair-new-assignor-textinput input"
                />
              </div>
              <div className="s-pair-new-assignor-filters">
                <span className="s-pair-new-assignor-filter-by">
                  <span>Filter by:</span>
                </span>
                <div className="s-pair-new-assignor-sport-container">
                  <select className="s-pair-new-assignor-sport">
                    <option value="Sport">Sport</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div className="s-pair-new-assignor-location-container">
                  <select className="s-pair-new-assignor-location">
                    <option value="Location" selected>
                      Location
                    </option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="s-pair-new-assignor-assignor-results">
              <div className="s-pair-new-assignor-result-selected">
                <div className="s-pair-new-assignor-result-info">
                  <div className="s-pair-new-assignor-avatar-name-role">
                    <div className="s-pair-new-assignor-avatar">
                      <img
                        alt={props.avatarAlt}
                        src={props.userAvatar}
                        className="s-pair-new-assignor-user-avatar"
                      />
                    </div>
                    <div className="s-pair-new-assignor-name-and-role">
                      <span className="s-pair-new-assignor-name Subtitle1">
                        {props.userName}
                      </span>
                      <span className="s-pair-new-assignor-role">
                        {props.userRole}
                      </span>
                    </div>
                  </div>
                  <div className="s-pair-new-assignor-city">
                    <img
                      alt="image"
                      src="/mapicon.svg"
                      className="s-pair-new-assignor-icon1"
                    />
                    <span className="s-pair-new-assignor-city-name Subtitle2">
                      {props.cityName}
                    </span>
                  </div>
                </div>
                <div className="s-pair-new-assignor-check">
                  <img
                    alt="IconI488"
                    src="/external/iconi488-bc1.svg"
                    className="s-pair-new-assignor-icon2"
                  />
                </div>
              </div>
              <div className="s-pair-new-assignor-result-normal">
                <div className="s-pair-new-assignor-result-info1">
                  <div className="s-pair-new-assignor-avatar-name-role1">
                    <div className="s-pair-new-assignor-avatar1">
                      <img
                        alt="Ronald Richards"
                        src={props.userAvatar}
                        className="s-pair-new-assignor-user-avatar1"
                      />
                    </div>
                    <div className="s-pair-new-assignor-name-and-role1">
                      <span className="s-pair-new-assignor-name1 Subtitle1">
                        {props.userName}
                      </span>
                      <span className="s-pair-new-assignor-role1">
                        {props.userRole}
                      </span>
                    </div>
                  </div>
                  <div className="s-pair-new-assignor-city1">
                    <img
                      alt="image"
                      src="/mapicon.svg"
                      className="s-pair-new-assignor-icon3"
                    />
                    <span className="s-pair-new-assignor-city-name1 Subtitle2">
                      {props.cityName}
                    </span>
                  </div>
                </div>
                <div className="s-pair-new-assignor-check1"></div>
              </div>
            </div>
          </div>
          <div className="s-pair-new-assignor-modal-footer">
            <button className="s-pair-new-assignor-cancel-btn">
              <span className="s-pair-new-assignor-cancel ButtonL">
                <span>Cancel</span>
              </span>
            </button>
            <button className="s-pair-new-assignor-pair-btn">
              <span className="s-pair-new-assignor-pair-assignor ButtonL">
                <span>Pair assignor</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .s-pair-new-assignor-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 590px;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-pair-new-assignor {
            gap: 40px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 32px;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .s-pair-new-assignor-modal-header {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-title-close-row {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .s-pair-new-assignor-pair-a-new-assignor {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-pair-new-assignor-materialsymbolsclose {
            width: 24px;
            height: 24px;
          }
          .s-pair-new-assignor-subtitle {
            color: var(--dl-color-grey-grey700);
            height: auto;
            opacity: 0.5;
            text-align: left;
            line-height: 16px;
          }
          .s-pair-new-assignor-modal-body {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-search-and-filters {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-text2 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            opacity: 0.7;
            font-size: 10px;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 500px;
            line-height: normal;
            font-stretch: normal;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .s-pair-new-assignor-search-bar {
            gap: 16px;
            height: 44px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: 0px;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 0px;
            padding-bottom: 0px;
            background-color: var(--dl-color-default-white);
          }
          .s-pair-new-assignor-icon {
            width: 16px;
            height: 16px;
          }
          .s-pair-new-assignor-textinput {
            color: var(--dl-color-grey-grey700);
            width: 100%;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
          }
          .s-pair-new-assignor-filters {
            gap: 12px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
          }
          .s-pair-new-assignor-filter-by {
            color: var(--dl-color-grey-grey700);
            width: 14%;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-pair-new-assignor-sport-container {
            flex: 0 0 auto;
            width: 42%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            flex-direction: row;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-pair-new-assignor-sport {
            color: var(--dl-color-grey-grey600);
            width: 100%;
            height: 44px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-pair-new-assignor-location-container {
            flex: 0 0 auto;
            width: 42%;
            height: auto;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            flex-direction: row;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-pair-new-assignor-location {
            color: var(--dl-color-grey-grey600);
            width: 100%;
            height: 44px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-pair-new-assignor-assignor-results {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-result-selected {
            gap: 24px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            background-color: var(--dl-color-yellow-yellow300);
          }
          .s-pair-new-assignor-result-info {
            gap: 109px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: space-between;
          }
          .s-pair-new-assignor-avatar-name-role {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-pair-new-assignor-avatar {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .s-pair-new-assignor-user-avatar {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
            border-color: rgba(197, 156, 7, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 100%;
          }
          .s-pair-new-assignor-name-and-role {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-name {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-pair-new-assignor-role {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            opacity: 0.7;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-pair-new-assignor-city {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-pair-new-assignor-icon1 {
            width: 20px;
            object-fit: cover;
          }
          .s-pair-new-assignor-city-name {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .s-pair-new-assignor-check {
            gap: 10px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            border-radius: 4px;
            background-color: var(--dl-color-default-white);
          }
          .s-pair-new-assignor-icon2 {
            width: 16px;
            height: 16px;
          }
          .s-pair-new-assignor-result-normal {
            gap: 24px;
            display: flex;
            padding: 16px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-pair-new-assignor-result-info1 {
            gap: 109px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: space-between;
          }
          .s-pair-new-assignor-avatar-name-role1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-pair-new-assignor-avatar1 {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .s-pair-new-assignor-user-avatar1 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
            border-color: var(--dl-color-grey-grey400);
            border-style: solid;
            border-width: 2px;
            border-radius: 100%;
          }
          .s-pair-new-assignor-name-and-role1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-pair-new-assignor-name1 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-pair-new-assignor-role1 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            opacity: 0.7;
            font-size: 12px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-pair-new-assignor-city1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-pair-new-assignor-icon3 {
            width: 20px;
            object-fit: cover;
          }
          .s-pair-new-assignor-city-name1 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .s-pair-new-assignor-check1 {
            gap: 10px;
            width: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 24px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            border-radius: 4px;
            background-color: var(--dl-color-default-white);
          }
          .s-pair-new-assignor-modal-footer {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-end;
          }
          .s-pair-new-assignor-cancel-btn {
            gap: 10px;
            display: flex;
            padding: 14px 24px;
            align-items: flex-start;
            border-radius: 100px;
          }
          .s-pair-new-assignor-cancel {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .s-pair-new-assignor-pair-btn {
            gap: 12px;
            display: flex;
            padding: 14px 24px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .s-pair-new-assignor-pair-assignor {
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

SOPairNewAssignor.defaultProps = {
  userRole: 'Hockey referee',
  userAvatar: '/external/ellipse36i488-quhq-200h.png',
  avatarAlt: 'Ronald Richards',
  cityName: 'California',
  userName: 'Ronald Richards',
}

SOPairNewAssignor.propTypes = {
  userRole: PropTypes.string,
  userAvatar: PropTypes.string,
  avatarAlt: PropTypes.string,
  cityName: PropTypes.string,
  userName: PropTypes.string,
}

export default SOPairNewAssignor
