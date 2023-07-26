import React from 'react'

import PropTypes from 'prop-types'

import './games-list-item1.css'

const GamesListItem1 = (props) => {
  return (
    <div className="games-list-item1-games-list-item">
      <div className="games-list-item1-full">
        <div className="games-list-item1-highligted">
          <span GameName="Lakers vs Bulls" className="gameName">
            Lakers vs Bulls
          </span>
          <div className="games-list-item1-game-id-container">
            <div className="gameIdContainer">
              <span className="idValue">#231</span>
            </div>
          </div>
          <div className="games-list-item1-tags-level">
            <span TagValue="12U" className="games-list-item1-tag-value">
              12U
            </span>
          </div>
          <div className="dateContainer">
            <img
              alt="IconI294"
              src="/external/iconi294-5rxo.svg"
              className="games-list-item1-date-icon"
            />
            <span className="games-list-item1-date-value Body2">
              May 8th - 08:00 PM
            </span>
          </div>
          <div className="games-list-item1-venue-container">
            <img
              alt="IconI294"
              src="/external/iconi294-xjg.svg"
              className="games-list-item1-venue-icon"
            />
            <div className="games-list-item1-venue-value-container">
              <span className="games-list-item1-venue-value Body2">CA</span>
              <img
                alt="IconI294"
                src="/external/iconi294-fbv.svg"
                className="games-list-item1-info-icon"
              />
            </div>
          </div>
          <div SportOrg className="games-list-item1-sport-org-container">
            <div className="games-list-item1-sport-org-logo">
              <img
                alt="image"
                src="/sportorglogo-200w.png"
                className="games-list-item1-logo-img"
              />
            </div>
            <span className="games-list-item1-sport-org-value Body2">NBA</span>
          </div>
          <div className="games-list-item1-status-container">
            <div className="games-list-item1-status-label">
              <div className="games-list-item1-published-tag">
                <span className="games-list-item1-published-label">
                  Published
                </span>
              </div>
              <div className="games-list-item1-hidden-tag">
                <span className="games-list-item1-hidden-label">Hidden</span>
              </div>
            </div>
          </div>
          <div className="games-list-item1-referees-container">
            <div className="games-list-item1-referees-row">
              <img
                alt="IconI294"
                src="/external/iconi294-bfp2.svg"
                className="games-list-item1-referee-icon"
              />
              <span className="games-list-item1-referee-value Body2">3</span>
            </div>
          </div>
          <div className="games-list-item1-pay-value">
            <span className="games-list-item1-amount-value">$35</span>
          </div>
          <div className="games-list-item1-referees-amount-container">
            <div className="games-list-item1-incompleted-amount">
              <span className="games-list-item1-referee-amount">2 / 3</span>
              <img
                alt="Incompleted"
                src="/redalert.svg"
                className="games-list-item1-amount-icon"
              />
            </div>
            <div className="games-list-item1-completed-amount">
              <span className="games-list-item1-referee-amount1">3 / 3</span>
              <img
                alt="Completed"
                src="/greencheck.svg"
                className="games-list-item1-amount-icon1"
              />
            </div>
          </div>
          <div className="games-list-item1-dropdown-container">
            <div
              data-thq="thq-dropdown"
              className="games-list-item1-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="games-list-item1-dropdown-toggle"
              >
                <div
                  data-thq="thq-dropdown-arrow"
                  className="games-list-item1-dropdown-arrow"
                >
                  <img
                    alt="image"
                    src="/icondots.svg"
                    className="games-list-item1-image"
                  />
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="games-list-item1-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="games-list-item1-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="games-list-item1-dropdown-toggle1"
                  >
                    <img
                      alt="image"
                      src="/iconeyehide.svg"
                      className="games-list-item1-image1"
                    />
                    <span className="games-list-item1-dropdown-item1">
                      Hide
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="games-list-item1-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="games-list-item1-dropdown-toggle2"
                  >
                    <img
                      alt="image"
                      src="/iconedit.svg"
                      className="games-list-item1-image2"
                    />
                    <span className="games-list-item1-dropdown-item2">
                      Edit
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="games-list-item1-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="games-list-item1-dropdown-toggle3"
                  >
                    <img
                      alt="image"
                      src="/iconremove.svg"
                      className="games-list-item1-image3"
                    />
                    <span className="games-list-item1-drop-down-item3">
                      Remove
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GamesListItem1.defaultProps = {
  rootClassName: '',
}

GamesListItem1.propTypes = {
  rootClassName: PropTypes.string,
}

export default GamesListItem1
