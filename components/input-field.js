import React from 'react'

import PropTypes from 'prop-types'

const InputField = (props) => {
  return (
    <>
      <div className="input-field-container">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="input-field-textinput"
        />
      </div>
      <style jsx>
        {`
          .input-field-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .input-field-textinput {
            z-index: 100;
          }
        `}
      </style>
    </>
  )
}

InputField.defaultProps = {
  textinput_placeholder: 'placeholder',
}

InputField.propTypes = {
  textinput_placeholder: PropTypes.string,
}

export default InputField
