import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ButtonGrey = (props) => {
  const [isTonal, setIsTonal] = useState(false)
  const [isOutlined, setIsOutlined] = useState(false)
  const [isText, setIsText] = useState(false)
  const [isPrimary, setIsPrimary] = useState(false)
  return (
    <>
      <div className={`button-grey-container ${props.rootClassName} `}>
        {!isPrimary && (
          <div className="button-grey-button">
            <div className="button-grey-container1">
              <span className="button-grey-primary-text">
                {props.primaryText}
              </span>
            </div>
          </div>
        )}
        {isTonal && (
          <div className="button-grey-button1">
            <div className="button-grey-container2">
              <span className="button-grey-tonal-text">{props.tonalText}</span>
            </div>
          </div>
        )}
        {isOutlined && (
          <div className="button-grey-button2">
            <div className="button-grey-container3">
              <span className="button-grey-outlined-text">
                {props.outlinedText}
              </span>
            </div>
          </div>
        )}
        {isText && (
          <div className="button-grey-button3">
            <div className="button-grey-container4">
              <span className="button-grey-only-text">{props.onlyText}</span>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .button-grey-container {
            width: 106px;
            height: 46px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .button-grey-button {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            height: auto;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: 14px;
            padding-left: 24px;
            border-radius: 100px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 14px;
            justify-content: center;
            background-color: var(--dl-color-grey-grey900);
          }
          .button-grey-button:hover {
            background-color: #fbe289;
          }
          .button-grey-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-grey-primary-text {
            color: var(--dl-color-gray-white);
          }
          .button-grey-button1 {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: 14px;
            padding-left: 24px;
            border-radius: 100px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 14px;
            justify-content: center;
            background-color: var(--dl-color-grey-grey200);
          }
          .button-grey-button1:hover {
            background-color: #fbe289;
          }
          .button-grey-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-grey-tonal-text {
            color: var(--dl-color-grey-grey800);
          }
          .button-grey-button2 {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: 14px;
            border-color: var(--dl-color-grey-grey500);
            border-width: 1px;
            padding-left: 24px;
            border-radius: 100px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 14px;
            justify-content: center;
            background-color: white;
          }
          .button-grey-button2:hover {
            background-color: #fbe289;
          }
          .button-grey-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-grey-outlined-text {
            color: var(--dl-color-grey-grey800);
          }
          .button-grey-button3 {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: 14px;
            padding-left: 24px;
            border-radius: 100px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 14px;
            justify-content: center;
          }
          .button-grey-button3:hover {
            background-color: #fbe289;
          }
          .button-grey-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-grey-only-text {
            color: var(--dl-color-grey-grey700);
          }
          .button-grey-root-class-name {
            width: auto;
          }
        `}
      </style>
    </>
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
