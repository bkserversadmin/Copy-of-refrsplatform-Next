import React from 'react'

import PropTypes from 'prop-types'

import './weeks-resume-list-item.css'

const WeeksResumeListItem = (props) => {
  return (
    <div className="weeks-resume-list-item-weeks-resume-list-item">
      <div className="weeks-resume-list-item-container">
        <span className="weeks-resume-list-item-text Body1 body-1">
          {props.text}
        </span>
        <div className="weeks-resume-list-item-games-and-amount">
          <span className="weeks-resume-list-item-text1 Body1 body-1">
            {props.text1}
          </span>
          <span className="paymentsAmount">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

WeeksResumeListItem.defaultProps = {
  text1: '20 Games',
  text: 'May 14 - 20',
  text2: '$3860.00',
}

WeeksResumeListItem.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default WeeksResumeListItem
