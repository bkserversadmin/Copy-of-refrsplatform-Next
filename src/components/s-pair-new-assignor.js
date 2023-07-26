import React from 'react'

import PropTypes from 'prop-types'

import './s-pair-new-assignor.css'

const SOPairNewAssignor = (props) => {
  return (
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
