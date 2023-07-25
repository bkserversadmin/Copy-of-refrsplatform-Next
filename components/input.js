import React from 'react'

import PropTypes from 'prop-types'

const Input = (props) => {
  return (
    <>
      <div className={`input-container ${props.rootClassName} `}>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="input-textinput input"
        />
      </div>
      <style jsx>
        {`
          .input-container {
            width: 404px;
            height: 62px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .input-textinput {
            color: var(--dl-color-grey-grey600);
            width: 100%;
            transition: 0.3s;
            padding-top: 20px;
            border-style: hidden;
            border-width: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 20px;
            background-color: var(--dl-color-grey-grey200);
          }
          .input-textinput:focus {
            border: 1px solid #f6c513;
          }
          .input-textinput:active {
            border: 1px solid #f6c513;
          }
          .input-textinput:focus-visible {
            border: 1px solid #f6c513;
          }

          .input-root-class-name2 {
            width: 100%;
          }
          .input-root-class-name3 {
            width: 100%;
          }
          .input-root-class-name4 {
            width: 100%;
          }
          .input-root-class-name5 {
            width: 100%;
          }
          .input-root-class-name6 {
            width: 100%;
          }

          .input-root-class-name10 {
            width: 240px;
          }
          .input-root-class-name11 {
            width: 240px;
          }
          .input-root-class-name12 {
            width: 240px;
          }
          .input-root-class-name13 {
            width: 240px;
          }
          .input-root-class-name14 {
            width: 240px;
          }
          .input-root-class-name15 {
            width: 240px;
          }
          .input-root-class-name16 {
            width: 240px;
          }
          .input-root-class-name17 {
            width: 240px;
          }
          .input-root-class-name18 {
            width: 100%;
          }
          .input-root-class-name19 {
            width: 100%;
          }
          .input-root-class-name20 {
            width: 100%;
          }
          .input-root-class-name21 {
            width: 100%;
          }
          .input-root-class-name22 {
            width: 240px;
          }
          .input-root-class-name23 {
            width: 240px;
          }
          .input-root-class-name24 {
            width: 240px;
          }
          .input-root-class-name25 {
            width: 240px;
          }
          .input-root-class-name26 {
            width: 100%;
          }
        `}
      </style>
    </>
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
