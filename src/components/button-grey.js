import React from 'react'

import PropTypes from 'prop-types'

import './button-grey.css'

const ButtonGrey = (props) => {
  return (
    <div className={`btnGrey ${props.rootClassName} `}>
      <div className="btnGreyPrimary">
        <div className="button-grey-container1">
          <span className="button-grey-primary-text">Button</span>
        </div>
      </div>
      <div className="btnGreyTonal">
        <div className="button-grey-container2">
          <span className="button-grey-tonal-text">Button</span>
        </div>
      </div>
      <div className="btnGreyOutline">
        <div className="button-grey-container3">
          <span className="button-grey-outlined-text">Button</span>
        </div>
      </div>
      <div className="btnGreyText">
        <div className="button-grey-container4">
          <span className="button-grey-only-text">Button</span>
        </div>
      </div>
    </div>
  )
}

ButtonGrey.defaultProps = {
  rootClassName: '',
}

ButtonGrey.propTypes = {
  rootClassName: PropTypes.string,
}

export default ButtonGrey
