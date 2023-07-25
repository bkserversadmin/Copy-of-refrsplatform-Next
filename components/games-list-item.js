import React, { useState } from 'react'

import PropTypes from 'prop-types'

const GamesListItem = (props) => {
  const [isAssignor, setIsAssignor] = useState(false)
  const [isRefereesFull, setIsRefereesFull] = useState(false)
  const [isPublished, setIsPublished] = useState(false)
  const [isFullView, setIsFullView] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)
  return (
    <>
      <div
        className={`games-list-item-games-list-item ${props.rootClassName} `}
      >
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
      <style jsx>
        {`
          .games-list-item-games-list-item {
            width: 100%;
            height: 72px;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .games-list-item-full {
            flex: 0 0 auto;
            width: 100%;
            height: 72px;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-highligted {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 12px;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 12px;
            background-color: var(--dl-color-yellow-yellow50);
          }
          .games-list-item-game-name {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-game-id-container {
            flex: 0 0 auto;
            width: 50px;
            height: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .games-list-item-game-id-tag {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .games-list-item-game-id {
            color: var(--dl-color-grey-grey900);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .games-list-item-tags-level {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .games-list-item-tag-value {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-date-container {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .games-list-item-date-icon {
            width: 14px;
            height: 14px;
          }
          .games-list-item-date-value {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-venue-container {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-venue-icon {
            width: 14px;
            height: 14px;
          }
          .games-list-item-venue-value-container {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-venue-value {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-info-icon {
            width: 12px;
            height: 12px;
          }
          .games-list-item-sport-org-container {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .games-list-item-sport-org-logo {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .games-list-item-logo-img {
            top: 0px;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .games-list-item-sport-org-value {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-status-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-status-label {
            flex: 0 0 auto;
            width: 97px;
            height: 33px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .games-list-item-published-tag {
            flex: 0 0 auto;
            width: 100%;
            height: 33px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-default-success100);
            border-top-right-radius: var(--dl-radius-radius-radius4);
          }
          .games-list-item-published-label {
            color: var(--dl-color-default-success800);
            font-size: 14px;
            align-self: center;
          }
          .games-list-item-hidden-tag {
            flex: 0 0 auto;
            width: 100%;
            height: 33px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-grey-grey300);
            border-top-right-radius: var(--dl-radius-radius-radius4);
          }
          .games-list-item-hidden-label {
            color: var(--dl-color-grey-grey700);
            font-size: 14px;
            align-self: center;
          }
          .games-list-item-referees-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-referees-row {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .games-list-item-referee-icon {
            width: 14px;
            height: 14px;
          }
          .games-list-item-referee-value {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-pay-value {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .games-list-item-amount-value {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-referees-amount-container {
            flex: 0 0 auto;
            width: 44px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-end;
            margin-right: -16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .games-list-item-incompleted-amount {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount {
            color: var(--dl-color-default-error700);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-completed-amount {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount1 {
            color: var(--dl-color-default-success500);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon1 {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-dropdown-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .games-list-item-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            height: auto;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .games-list-item-dropdown-arrow {
            transition: 0.3s;
          }
          .games-list-item-image {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .games-list-item-dropdown-list {
            top: 0;
            right: 100%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .games-list-item-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle1 {
            gap: 6px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .games-list-item-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .games-list-item-image1 {
            width: 15px;
            height: 15px;
            object-fit: cover;
          }
          .games-list-item-dropdown-item1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .games-list-item-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle2 {
            gap: 6px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .games-list-item-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .games-list-item-image2 {
            width: 15px;
            height: 15px;
            object-fit: cover;
          }
          .games-list-item-dropdown-item2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .games-list-item-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle3 {
            gap: 6px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .games-list-item-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .games-list-item-image3 {
            width: 15px;
            height: 15px;
            object-fit: cover;
          }
          .games-list-item-drop-down-item3 {
            color: var(--dl-color-system-error500);
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .games-list-item-normal {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 12px;
            border-color: var(--dl-color-grey-grey300);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 12px;
            background-color: var(--dl-color-gray-white);
          }
          .games-list-item-game-name1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-game-id-container1 {
            flex: 0 0 auto;
            width: 50px;
            height: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .games-list-item-game-id-tag1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .games-list-item-game-id1 {
            color: var(--dl-color-grey-grey900);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .games-list-item-tags-level1 {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .games-list-item-tag-value1 {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-date-container1 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .games-list-item-date-icon1 {
            width: 14px;
            height: 14px;
          }
          .games-list-item-date-value1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-venue-container1 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-venue-icon1 {
            width: 14px;
            height: 14px;
          }
          .games-list-item-venue-value-container1 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-venue-value1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-info-icon1 {
            width: 12px;
            height: 12px;
          }
          .games-list-item-sport-org-container1 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .games-list-item-sport-org-logo1 {
            width: 24px;
            height: 24px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .games-list-item-logo-img1 {
            top: 0px;
            left: 0px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .games-list-item-sport-org-value1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-status-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-status-label1 {
            flex: 0 0 auto;
            width: 97px;
            height: 33px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .games-list-item-published-tag1 {
            flex: 0 0 auto;
            width: 100%;
            height: 33px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-default-success100);
            border-top-right-radius: var(--dl-radius-radius-radius4);
          }
          .games-list-item-published-label1 {
            color: var(--dl-color-default-success800);
            font-size: 14px;
            align-self: center;
          }
          .games-list-item-hidden-tag1 {
            flex: 0 0 auto;
            width: 100%;
            height: 33px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-grey-grey300);
            border-top-right-radius: var(--dl-radius-radius-radius4);
          }
          .games-list-item-hidden-label1 {
            color: var(--dl-color-grey-grey700);
            font-size: 14px;
            align-self: center;
          }
          .games-list-item-referees-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .games-list-item-referees-row1 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .games-list-item-referee-icon1 {
            width: 14px;
            height: 14px;
          }
          .games-list-item-referee-value1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-pay-value1 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .games-list-item-amount-value1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-referees-amount-container1 {
            flex: 0 0 auto;
            width: 44px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-end;
            margin-right: -16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .games-list-item-incompleted-amount1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount2 {
            color: var(--dl-color-default-error700);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon2 {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-completed-amount1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount3 {
            color: var(--dl-color-default-success500);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon3 {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-dropdown-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .games-list-item-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle4 {
            fill: #595959;
            color: #595959;
            width: 100%;
            height: auto;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .games-list-item-dropdown-arrow1 {
            transition: 0.3s;
          }
          .games-list-item-image4 {
            width: 24px;
            height: 24px;
            object-fit: cover;
          }
          .games-list-item-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .games-list-item-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle5 {
            gap: 6px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .games-list-item-dropdown-toggle5:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .games-list-item-image5 {
            width: 15px;
            height: 15px;
            object-fit: cover;
          }
          .games-list-item-dropdown-item11 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .games-list-item-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle6 {
            gap: 6px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .games-list-item-dropdown-toggle6:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .games-list-item-image6 {
            width: 15px;
            height: 15px;
            object-fit: cover;
          }
          .games-list-item-dropdown-item21 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .games-list-item-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .games-list-item-dropdown-toggle7 {
            gap: 6px;
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .games-list-item-dropdown-toggle7:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .games-list-item-image7 {
            width: 15px;
            height: 15px;
            object-fit: cover;
          }
          .games-list-item-drop-down-item31 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .games-list-item-resumed {
            flex: 0 0 auto;
            width: 100%;
            height: 72px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .games-list-item-highligted1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 12px;
            border-color: var(--dl-color-yellow-yellow300);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 12px;
            background-color: var(--dl-color-yellow-yellow50);
          }
          .games-list-item-game-name2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-game-id-container2 {
            flex: 0 0 auto;
            width: 50px;
            height: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .games-list-item-game-id-tag2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .games-list-item-game-id2 {
            color: var(--dl-color-grey-grey900);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .games-list-item-tags-level2 {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .games-list-item-tag-value2 {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-date-container2 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .games-list-item-date-value2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-pay-value2 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .games-list-item-amount-value2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-referees-amount-container2 {
            flex: 0 0 auto;
            width: 44px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .games-list-item-incompleted-amount2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount4 {
            color: var(--dl-color-default-error700);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon4 {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-completed-amount2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount5 {
            color: var(--dl-color-default-success500);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon5 {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-normal1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 12px;
            border-color: var(--dl-color-grey-grey300);
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 12px;
            background-color: var(--dl-color-gray-white);
          }
          .games-list-item-game-name3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 16px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-game-id-container3 {
            flex: 0 0 auto;
            width: 50px;
            height: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .games-list-item-game-id-tag3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .games-list-item-game-id3 {
            color: var(--dl-color-grey-grey900);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }
          .games-list-item-tags-level3 {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .games-list-item-tag-value3 {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-date-container3 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .games-list-item-date-value3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .games-list-item-pay-value3 {
            gap: 8px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .games-list-item-amount-value3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .games-list-item-referees-amount-container3 {
            flex: 0 0 auto;
            width: 44px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .games-list-item-incompleted-amount3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount6 {
            color: var(--dl-color-default-error700);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon6 {
            width: 14px;
            object-fit: cover;
          }
          .games-list-item-completed-amount3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .games-list-item-referee-amount7 {
            color: var(--dl-color-default-success500);
            font-size: 12px;
            letter-spacing: 0.4px;
          }
          .games-list-item-amount-icon7 {
            width: 14px;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .games-list-item-games-list-item {
              height: var(--dl-size-size-medium);
            }
          }
          @media (max-width: 767px) {
            .games-list-item-highligted {
              gap: var(--dl-space-space-twounits);
            }
            .games-list-item-normal {
              gap: var(--dl-space-space-twounits);
            }
            .games-list-item-highligted1 {
              gap: var(--dl-space-space-twounits);
            }
            .games-list-item-normal1 {
              gap: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
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
