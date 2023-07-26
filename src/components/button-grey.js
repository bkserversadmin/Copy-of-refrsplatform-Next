import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './button-grey.css'

const ButtonGrey = (props) => {
  const [isTonal, setIsTonal] = useState(false)
  const [isOutlined, setIsOutlined] = useState(false)
  const [isText, setIsText] = useState(false)
  const [isPrimary, setIsPrimary] = useState(false)
  return (
    <div className={`btnGrey ${props.rootClassName} `}>
      {!isPrimary && (
        <div className="btnGreyPrimary">
          <div className="button-grey-container1">
            <span className="button-grey-primary-text">
              {props.primaryText}
            </span>
          </div>
        </div>
      )}
      {isTonal && (
        <div className="btnGreyTonal">
          <div className="button-grey-container2">
            <span className="button-grey-tonal-text">{props.tonalText}</span>
          </div>
        </div>
      )}
      {isOutlined && (
        <div className="btnGreyOutline">
          <div className="button-grey-container3">
            <span className="button-grey-outlined-text">
              {props.outlinedText}
            </span>
          </div>
        </div>
      )}
      {isText && (
        <div className="btnGreyText">
          <div className="button-grey-container4">
            <span className="button-grey-only-text">{props.onlyText}</span>
          </div>
        </div>
      )}
    </div>
  )
}

ButtonGrey.defaultProps = {
  primaryText: 'Button',
  rootClassName: '',
  outlinedText: 'Button',
  onlyText: 'Button',
  tonalText: 'Button',
}

ButtonGrey.propTypes = {
  primaryText: PropTypes.string,
  rootClassName: PropTypes.string,
  outlinedText: PropTypes.string,
  onlyText: PropTypes.string,
  tonalText: PropTypes.string,
}

export default ButtonGrey
