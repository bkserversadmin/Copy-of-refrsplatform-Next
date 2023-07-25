import React, { useState } from 'react'

import PropTypes from 'prop-types'

const WeeklyEarnings = (props) => {
  const [isEarning, setIsEarning] = useState(false)
  const [isMatches, setIsMatches] = useState(false)
  return (
    <>
      <div className="weekly-earnings-weekly-earnings">
        <span className="weekly-earnings-text-title Caption">
          {props.TextTitle}
        </span>
        {isEarning && (
          <div className="weekly-earnings-price-container">
            <span className="weekly-earnings-price-simbol ButtonS">
              {props.priceSimbol}
            </span>
            <span className="weekly-earnings-number-value">
              {props.numberValue}
            </span>
          </div>
        )}
        <div className="weekly-earnings-price-container1">
          {isMatches && (
            <span className="weekly-earnings-matches-value">
              {props.matchesValue}
            </span>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .weekly-earnings-weekly-earnings {
            gap: 11px;
            width: 140px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .weekly-earnings-text-title {
            color: var(--dl-color-grey-grey500);
          }
          .weekly-earnings-price-container {
            gap: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .weekly-earnings-price-simbol {
            color: var(--dl-color-grey-grey500);
            width: 8px;
            height: auto;
            text-align: left;
            line-height: 12px;
          }
          .weekly-earnings-number-value {
            color: var(--dl-color-yellow-yellow800);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .weekly-earnings-price-container1 {
            gap: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .weekly-earnings-matches-value {
            color: var(--dl-color-yellow-yellow800);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

WeeklyEarnings.defaultProps = {
  TextTitle: 'Weekly Earning',
  matchesValue: '23',
  priceSimbol: '$',
  numberValue: '765',
}

WeeklyEarnings.propTypes = {
  TextTitle: PropTypes.string,
  matchesValue: PropTypes.string,
  priceSimbol: PropTypes.string,
  numberValue: PropTypes.string,
}

export default WeeklyEarnings
