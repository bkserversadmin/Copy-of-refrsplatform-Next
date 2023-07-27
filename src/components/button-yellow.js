import React from 'react'

import PropTypes from 'prop-types'

import './button-yellow.css'

const ButtonYellow = (props) => {
  return (
    <div className={`btnYellow ${props.rootClassName} `}>
      <div className="btnPrimary">
        <div className="button-yellow-container1">
          <span className="button-yellow-primary-text">Button</span>
        </div>
      </div>
      <div className="btnTonal">
        <div className="button-yellow-container2">
          <span className="button-yellow-tonal-text">Button</span>
        </div>
      </div>
      <div className="btnOutline">
        <div className="button-yellow-container3">
          <span className="button-yellow-outlined-text">Button</span>
        </div>
      </div>
      <div className="btnText">
        <div className="button-yellow-container4">
          <span className="button-yellow-only-text">Button</span>
        </div>
      </div>
    </div>
  )
}

ButtonYellow.defaultProps = {
  rootClassName: '',
}

ButtonYellow.propTypes = {
  rootClassName: PropTypes.string,
}

export default ButtonYellow
