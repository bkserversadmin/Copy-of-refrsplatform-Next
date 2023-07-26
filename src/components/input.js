import React from 'react'

import PropTypes from 'prop-types'

import './input.css'

const Input = (props) => {
  return (
    <div className={`input-container ${props.rootClassName} `}>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="input-textinput input"
      />
    </div>
  )
}

Input.defaultProps = {
  text: 'Your email account',
  rootClassName: '',
  textinput_placeholder: 'placeholder',
}

Input.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Input
