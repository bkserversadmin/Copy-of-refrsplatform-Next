import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './weekly-earnings.css'

const WeeklyEarnings = (props) => {
  const [isEarning, setIsEarning] = useState(false)
  const [isMatches, setIsMatches] = useState(false)
  return (
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
