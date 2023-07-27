import React from 'react'

import PropTypes from 'prop-types'

import './earnings-indicators.css'

const EarningsIndicators = (props) => {
  return (
    <div className="earnings-indicators-earnings-indicators earningsIndicator">
      <div className="earningsInner">
        <div className="earningsData">
          <span className="Body1 earningsDate body-1">{props.text}</span>
          <span className="earningsValue">{props.text1}</span>
          <span className="Body1 body-1">{props.text2}</span>
        </div>
        <div className="earnings-indicators-right-col">
          <span className="earnings-indicators-text3 Body1 body-1">
            {props.text3}
          </span>
          <span className="earnings-indicators-text4 Body1 body-1">
            {props.text4}
          </span>
        </div>
      </div>
    </div>
  )
}

EarningsIndicators.defaultProps = {
  text1: '$3860.00',
  text: 'May 14 - 20',
  text2: 'Balance will be charged Jun 5th',
  text3: '20 Completed Games',
  text4: '60 Referees Worked',
}

EarningsIndicators.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
}

export default EarningsIndicators
