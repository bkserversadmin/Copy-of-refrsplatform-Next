import React from 'react'

import PropTypes from 'prop-types'

import './input-field.css'

const InputField = (props) => {
  return (
    <div className="input-field-container">
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="input-field-textinput"
      />
    </div>
  )
}

InputField.defaultProps = {
  textinput_placeholder: 'placeholder',
}

InputField.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default InputField
