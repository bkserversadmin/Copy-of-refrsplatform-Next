import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './button-yellow.css'

const ButtonYellow = (props) => {
  const [isPrimary, setIsPrimary] = useState(false)
  const [isTonal, setIsTonal] = useState(false)
  const [isOutlined, setIsOutlined] = useState(false)
  const [isText, setIsText] = useState(false)
  return (
    <div className={`btnYellow ${props.rootClassName} `}>
      {isPrimary && (
        <div className="btnPrimary">
          <div className="button-yellow-container1">
            <span className="button-yellow-primary-text">
              {props.primaryText}
            </span>
          </div>
        </div>
      )}
      {isTonal && (
        <div className="btnTonal">
          <div className="button-yellow-container2">
            <span className="button-yellow-tonal-text">{props.tonalText}</span>
          </div>
        </div>
      )}
      {isOutlined && (
        <div className="btnOutline">
          <div className="button-yellow-container3">
            <span className="button-yellow-outlined-text">
              {props.outlinedText}
            </span>
          </div>
        </div>
      )}
      {isText && (
        <div className="btnText">
          <div className="button-yellow-container4">
            <span className="button-yellow-only-text">{props.onlyText}</span>
          </div>
        </div>
      )}
    </div>
  )
}

ButtonYellow.defaultProps = {
  onlyText: 'Button',
  rootClassName: '',
  primaryText: 'Button',
  tonalText: 'Button',
  outlinedText: 'Button',
}

ButtonYellow.propTypes = {
  onlyText: PropTypes.string,
  rootClassName: PropTypes.string,
  primaryText: PropTypes.string,
  tonalText: PropTypes.string,
  outlinedText: PropTypes.string,
}

export default ButtonYellow
