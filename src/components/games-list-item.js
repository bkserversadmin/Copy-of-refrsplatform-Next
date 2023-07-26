import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './games-list-item.css'

const GamesListItem = (props) => {
  const [isAssignor, setIsAssignor] = useState(false)
  const [isRefereesFull, setIsRefereesFull] = useState(false)
  const [isPublished, setIsPublished] = useState(false)
  const [isFullView, setIsFullView] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)
  return (
    <div className="gameItem">
      {isFullView && (
        <div className="games-list-item-full">
          {isHighlighted && (
            <div className="games-list-item-highligted">
              <span
                GameName="Lakers vs Bulls"
                className="games-list-item-game-name"
              >
                {props.GameName}
              </span>
              <div className="games-list-item-game-id-container">
                <div className="games-list-item-game-id-tag">
                  <span className="games-list-item-game-id">
                    {props.GameID}
                  </span>
                </div>
              </div>
              <div className="games-list-item-tags-level">
                <span TagValue="12U" className="games-list-item-tag-value">
                  {props.TagValue}
                </span>
              </div>
              <div className="games-list-item-date-container">
                <img
                  alt="IconI294"
                  src="/external/iconi294-5rxo.svg"
                  className="games-list-item-date-icon"
                />
                <span className="games-list-item-date-value Body2">
                  {props.DateValue}
                </span>
              </div>
              <div className="games-list-item-venue-container">
                <img
                  alt="IconI294"
                  src="/external/iconi294-xjg.svg"
                  className="games-list-item-venue-icon"
                />
                <div className="games-list-item-venue-value-container">
                  <span className="games-list-item-venue-value Body2">
                    {props.VenueValue}
                  </span>
                  <img
                    alt="IconI294"
                    src="/external/iconi294-fbv.svg"
                    className="games-list-item-info-icon"
                  />
                </div>
              </div>
              <div SportOrg className="games-list-item-sport-org-container">
                <div className="games-list-item-sport-org-logo">
                  <img
                    alt={props.SportOrgLogoAlt}
                    src={props.SportOrgLogo}
                    className="games-list-item-logo-img"
                  />
                </div>
                <span className="games-list-item-sport-org-value Body2">
                  {props.SportOrgValue}
                </span>
              </div>
              {isAssignor && (
                <div className="games-list-item-status-container">
                  <div className="games-list-item-status-label">
                    {isPublished && (
                      <div className="games-list-item-published-tag">
                        <span className="games-list-item-published-label">
                          Published
                        </span>
                      </div>
                    )}
                    {!isPublished && (
                      <div className="games-list-item-hidden-tag">
                        <span className="games-list-item-hidden-label">
                          Hidden
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {!isAssignor && (
                <div className="games-list-item-referees-container">
                  <div className="games-list-item-referees-row">
                    <img
                      alt="IconI294"
                      src="/external/iconi294-bfp2.svg"
                      className="games-list-item-referee-icon"
                    />
                    <span className="games-list-item-referee-value Body2">
                      {props.RefereeValue}
                    </span>
                  </div>
                </div>
              )}
              {!isAssignor && (
                <div className="games-list-item-pay-value">
                  <span className="games-list-item-amount-value">
                    {props.AmountValue}
                  </span>
                </div>
              )}
              {isAssignor && (
                <div className="games-list-item-referees-amount-container">
                  {!isRefereesFull && (
                    <div className="games-list-item-incompleted-amount">
                      <span className="games-list-item-referee-amount">
                        {props.RefereeAmount}
                      </span>
                      <img
                        alt="Incompleted"
                        src={props.AmountIcon}
                        className="games-list-item-amount-icon"
                      />
                    </div>
                  )}
                  {isRefereesFull && (
                    <div className="games-list-item-completed-amount">
                      <span className="games-list-item-referee-amount1">
                        {props.RefereeAmountCompleted}
                      </span>
                      <img
                        alt="Completed"
                        src={props.AmountIconCompleted}
                        className="games-list-item-amount-icon1"
                      />
                    </div>
                  )}
                </div>
              )}
              {isAssignor && (
                <div className="games-list-item-dropdown-container">
                  <div
                    data-thq="thq-dropdown"
                    className="games-list-item-thq-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="games-list-item-dropdown-toggle"
                    >
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="games-list-item-dropdown-arrow"
                      >
                        <img
                          alt="image"
                          src="/icondots.svg"
                          className="games-list-item-image"
                        />
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="games-list-item-dropdown-list"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="games-list-item-dropdown list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="games-list-item-dropdown-toggle1"
                        >
                          <img
                            alt="image"
                            src="/iconeyehide.svg"
                            className="games-list-item-image1"
                          />
                          <span className="games-list-item-dropdown-item1">
                            Hide
                          </span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="games-list-item-dropdown1 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="games-list-item-dropdown-toggle2"
                        >
                          <img
                            alt="image"
                            src="/iconedit.svg"
                            className="games-list-item-image2"
                          />
                          <span className="games-list-item-dropdown-item2">
                            Edit
                          </span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="games-list-item-dropdown2 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="games-list-item-dropdown-toggle3"
                        >
                          <img
                            alt="image"
                            src="/iconremove.svg"
                            className="games-list-item-image3"
                          />
                          <span className="games-list-item-drop-down-item3">
                            Remove
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
          {!isHighlighted && (
            <div className="games-list-item-normal">
              <span
                GameName="Lakers vs Bulls"
                className="games-list-item-game-name1"
              >
                {props.GameName}
              </span>
              <div className="games-list-item-game-id-container1">
                <div className="games-list-item-game-id-tag1">
                  <span className="games-list-item-game-id1">
                    {props.GameID}
                  </span>
                </div>
              </div>
              <div className="games-list-item-tags-level1">
                <span TagValue="12U" className="games-list-item-tag-value1">
                  {props.TagValue}
                </span>
              </div>
              <div className="games-list-item-date-container1">
                <img
                  alt="IconI294"
                  src="/external/iconi294-5rxo.svg"
                  className="games-list-item-date-icon1"
                />
                <span className="games-list-item-date-value1 Body2">
                  {props.DateValue}
                </span>
              </div>
              <div className="games-list-item-venue-container1">
                <img
                  alt="IconI294"
                  src="/external/iconi294-xjg.svg"
                  className="games-list-item-venue-icon1"
                />
                <div className="games-list-item-venue-value-container1">
                  <span className="games-list-item-venue-value1 Body2">
                    {props.VenueValue}
                  </span>
                  <img
                    alt="IconI294"
                    src="/external/iconi294-fbv.svg"
                    className="games-list-item-info-icon1"
                  />
                </div>
              </div>
              <div SportOrg className="games-list-item-sport-org-container1">
                <div className="games-list-item-sport-org-logo1">
                  <img
                    alt={props.SportOrgLogoAlt}
                    src={props.SportOrgLogo}
                    className="games-list-item-logo-img1"
                  />
                </div>
                <span className="games-list-item-sport-org-value1 Body2">
                  {props.SportOrgValue}
                </span>
              </div>
              {isAssignor && (
                <div className="games-list-item-status-container1">
                  <div className="games-list-item-status-label1">
                    {isPublished && (
                      <div className="games-list-item-published-tag1">
                        <span className="games-list-item-published-label1">
                          Published
                        </span>
                      </div>
                    )}
                    {!isPublished && (
                      <div className="games-list-item-hidden-tag1">
                        <span className="games-list-item-hidden-label1">
                          Hidden
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {!isAssignor && (
                <div className="games-list-item-referees-container1">
                  <div className="games-list-item-referees-row1">
                    <img
                      alt="IconI294"
                      src="/external/iconi294-bfp2.svg"
                      className="games-list-item-referee-icon1"
                    />
                    <span className="games-list-item-referee-value1 Body2">
                      {props.RefereeValue}
                    </span>
                  </div>
                </div>
              )}
              {!isAssignor && (
                <div className="games-list-item-pay-value1">
                  <span className="games-list-item-amount-value1">
                    {props.AmountValue}
                  </span>
                </div>
              )}
              {isAssignor && (
                <div className="games-list-item-referees-amount-container1">
                  {!isRefereesFull && (
                    <div className="games-list-item-incompleted-amount1">
                      <span className="games-list-item-referee-amount2">
                        {props.RefereeAmount}
                      </span>
                      <img
                        alt="Incompleted"
                        src={props.AmountIcon}
                        className="games-list-item-amount-icon2"
                      />
                    </div>
                  )}
                  {isRefereesFull && (
                    <div className="games-list-item-completed-amount1">
                      <span className="games-list-item-referee-amount3">
                        {props.RefereeAmountCompleted}
                      </span>
                      <img
                        alt="Completed"
                        src={props.AmountIconCompleted}
                        className="games-list-item-amount-icon3"
                      />
                    </div>
                  )}
                </div>
              )}
              {isAssignor && (
                <div className="games-list-item-dropdown-container1">
                  <div
                    data-thq="thq-dropdown"
                    className="games-list-item-thq-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="games-list-item-dropdown-toggle4"
                    >
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="games-list-item-dropdown-arrow1"
                      >
                        <img
                          alt="image"
                          src="/icondots.svg"
                          className="games-list-item-image4"
                        />
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="games-list-item-dropdown-list1"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="games-list-item-dropdown3 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="games-list-item-dropdown-toggle5"
                        >
                          <img
                            alt="image"
                            src="/iconeyehide.svg"
                            className="games-list-item-image5"
                          />
                          <span className="games-list-item-dropdown-item11">
                            Hide
                          </span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="games-list-item-dropdown4 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="games-list-item-dropdown-toggle6"
                        >
                          <img
                            alt="image"
                            src="/iconedit.svg"
                            className="games-list-item-image6"
                          />
                          <span className="games-list-item-dropdown-item21">
                            Sub-menu Item
                          </span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="games-list-item-dropdown5 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="games-list-item-dropdown-toggle7"
                        >
                          <img
                            alt="image"
                            src="/iconremove.svg"
                            className="games-list-item-image7"
                          />
                          <span className="games-list-item-drop-down-item31">
                            Sub-menu Item
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {!isFullView && (
        <div className="games-list-item-resumed">
          {isHighlighted && (
            <div className="games-list-item-highligted1">
              <span
                GameName="Lakers vs Bulls"
                className="games-list-item-game-name2"
              >
                {props.GameName}
              </span>
              <div className="games-list-item-game-id-container2">
                <div className="games-list-item-game-id-tag2">
                  <span className="games-list-item-game-id2">
                    {props.GameID}
                  </span>
                </div>
              </div>
              <div className="games-list-item-tags-level2">
                <span TagValue="12U" className="games-list-item-tag-value2">
                  {props.TagValue}
                </span>
              </div>
              <div className="games-list-item-date-container2">
                <span className="games-list-item-date-value2 Body2">
                  {props.DateValue}
                </span>
              </div>
              {!isAssignor && (
                <div className="games-list-item-pay-value2">
                  <span className="games-list-item-amount-value2">
                    {props.AmountValue}
                  </span>
                </div>
              )}
              {isAssignor && (
                <div className="games-list-item-referees-amount-container2">
                  {!isRefereesFull && (
                    <div className="games-list-item-incompleted-amount2">
                      <span className="games-list-item-referee-amount4">
                        {props.RefereeAmount}
                      </span>
                      <img
                        alt="Incompleted"
                        src={props.AmountIcon}
                        className="games-list-item-amount-icon4"
                      />
                    </div>
                  )}
                  {isRefereesFull && (
                    <div className="games-list-item-completed-amount2">
                      <span className="games-list-item-referee-amount5">
                        {props.RefereeAmountCompleted}
                      </span>
                      <img
                        alt="Completed"
                        src={props.AmountIconCompleted}
                        className="games-list-item-amount-icon5"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          {!isHighlighted && (
            <div className="games-list-item-normal1">
              <span
                GameName="Lakers vs Bulls"
                className="games-list-item-game-name3"
              >
                {props.GameName}
              </span>
              <div className="games-list-item-game-id-container3">
                <div className="games-list-item-game-id-tag3">
                  <span className="games-list-item-game-id3">
                    {props.GameID}
                  </span>
                </div>
              </div>
              <div className="games-list-item-tags-level3">
                <span TagValue="12U" className="games-list-item-tag-value3">
                  {props.TagValue}
                </span>
              </div>
              <div className="games-list-item-date-container3">
                <span className="games-list-item-date-value3 Body2">
                  {props.DateValue}
                </span>
              </div>
              {!isAssignor && (
                <div className="games-list-item-pay-value3">
                  <span className="games-list-item-amount-value3">
                    {props.AmountValue}
                  </span>
                </div>
              )}
              {isAssignor && (
                <div className="games-list-item-referees-amount-container3">
                  {!isRefereesFull && (
                    <div className="games-list-item-incompleted-amount3">
                      <span className="games-list-item-referee-amount6">
                        {props.RefereeAmount}
                      </span>
                      <img
                        alt="Incompleted"
                        src={props.AmountIcon}
                        className="games-list-item-amount-icon6"
                      />
                    </div>
                  )}
                  {isRefereesFull && (
                    <div className="games-list-item-completed-amount3">
                      <span className="games-list-item-referee-amount7">
                        {props.RefereeAmountCompleted}
                      </span>
                      <img
                        alt="Completed"
                        src={props.AmountIconCompleted}
                        className="games-list-item-amount-icon7"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

GamesListItem.defaultProps = {
  RefereeValue: '3',
  AmountIconCompleted: '/greencheck.svg',
  GameName: 'Lakers vs Bulls',
  AmountIcon: '/redalert.svg',
  SportOrgValue: 'NBA',
  GameID: '#231',
  SportOrgLogoAlt: 'NBA',
  image_src: 'b88aa812-047f-4583-bd05-44d2f6d61c68',
  rootClassName: '',
  RefereeAmount: '2 / 3',
  SportOrgLogo: '/sportorglogo-200w.png',
  DateValue: 'May 8th - 08:00 PM',
  VenueValue: 'CA',
  IdNumberOrg: '#2302',
  AmountValue: '$35',
  TagValue: '12U',
  RefereeAmountCompleted: '3 / 3',
}

GamesListItem.propTypes = {
  RefereeValue: PropTypes.string,
  AmountIconCompleted: PropTypes.string,
  GameName: PropTypes.string,
  AmountIcon: PropTypes.string,
  SportOrgValue: PropTypes.string,
  GameID: PropTypes.string,
  SportOrgLogoAlt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  RefereeAmount: PropTypes.string,
  SportOrgLogo: PropTypes.string,
  DateValue: PropTypes.string,
  VenueValue: PropTypes.string,
  IdNumberOrg: PropTypes.string,
  AmountValue: PropTypes.string,
  TagValue: PropTypes.string,
  RefereeAmountCompleted: PropTypes.string,
}

export default GamesListItem
