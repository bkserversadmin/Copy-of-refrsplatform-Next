import React from 'react'

import PropTypes from 'prop-types'

import './game-item.css'

const GameItem = (props) => {
  return (
    <div className={`gameItem ${props.rootClassName} `}>
      <div className="game-item-normal gameItem-container">
        <span className="game-item-game-name gameName">Lakers vs Bulls</span>
        <div className="game-item-game-id-container gameId-container">
          <div className="game-item-game-id-tag gameId-tag">
            <span className="game-item-game-id">#231</span>
          </div>
        </div>
        <div className="game-item-tags-level tagLevel-container">
          <span className="game-item-tag-value tagLevel-value">12U</span>
        </div>
        <div className="game-item-date-container date-container">
          <img
            alt="IconI294"
            src="/external/iconi294-5rxo.svg"
            className="date-icon"
          />
          <span className="game-item-date-value Body2 date-value">
            May 8th - 08:00 PM
          </span>
        </div>
        <div className="venue-container">
          <img
            alt="IconI294"
            src="/external/iconi294-xjg.svg"
            className="venue-icon"
          />
          <div className="venueValue-container">
            <span className="Body2 venueValue">CA</span>
            <img
              alt="IconI294"
              src="/external/iconi294-fbv.svg"
              className="venueInfoIcon"
            />
          </div>
        </div>
        <div SportOrg className="sportOrg-container">
          <div className="sportOrg-logo">
            <img
              alt="NBA"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="sportOrgLogo-im"
            />
          </div>
          <span className="Body2 sportOrg-value">NBA</span>
        </div>
        <div className="status-container">
          <div className="status-label">
            <div className="status-publishedTag">
              <span className="game-item-published-label">Published</span>
            </div>
            <div className="status-hiddenTag">
              <span className="game-item-hidden-label">Hidden</span>
            </div>
          </div>
        </div>
        <div className="game-item-referees-container refereeCount-container">
          <img
            alt="IconI294"
            src="/external/iconi294-bfp2.svg"
            className="refereesCount-icon"
          />
          <span className="Body2 refereesCount-value">3</span>
        </div>
        <div className="game-item-pay-value pay-container">
          <span className="game-item-amount-value pay-value">$35</span>
        </div>
        <div className="game-item-referees-amount-container refereesAmount-container">
          <div className="game-item-incompleted-amount amount-incompleted">
            <span className="game-item-referee-amount refereeIncompleted-value">
              2 / 3
            </span>
            <img
              alt="Incompleted"
              src="/redalert.svg"
              className="game-item-amount-icon amount-icon"
            />
          </div>
          <div className="game-item-completed-amount amount-completed">
            <span className="game-item-referee-amount1 refereeCompleted-value">
              3 / 3
            </span>
            <img
              alt="Completed"
              src="/greencheck.svg"
              className="game-item-amount-icon1 amount-icon"
            />
          </div>
        </div>
        <div className="game-item-dropdown-container">
          <div
            data-thq="thq-dropdown"
            className="game-item-thq-dropdown list-item"
          >
            <div data-thq="thq-dropdown-toggle" className="dropdown-toggle">
              <div data-thq="thq-dropdown-arrow" className="dropdown-arrow">
                <img
                  alt="image"
                  src="/icondots.svg"
                  className="dropdown-dots"
                />
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="dropdown-list">
              <li
                data-thq="thq-dropdown"
                className="game-item-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="game-item-dropdown-toggle1"
                >
                  <img
                    alt="image"
                    src="/iconeyehide.svg"
                    className="game-item-image1"
                  />
                  <span className="game-item-dropdown-item1">Hide</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="game-item-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="game-item-dropdown-toggle2"
                >
                  <img
                    alt="image"
                    src="/iconedit.svg"
                    className="game-item-image2"
                  />
                  <span className="game-item-dropdown-item2">
                    Sub-menu Item
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="game-item-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="game-item-dropdown-toggle3"
                >
                  <img
                    alt="image"
                    src="/iconremove.svg"
                    className="game-item-image3"
                  />
                  <span className="game-item-drop-down-item3">
                    Sub-menu Item
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

GameItem.defaultProps = {
  image_src: '',
  rootClassName: '',
}

GameItem.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GameItem
