import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ButtonPrimary = (props) => {
  const [isPrimary, setIsPrimary] = useState(false)
  const [isTonal, setIsTonal] = useState(false)
  const [isOutlined, setIsOutlined] = useState(false)
  const [isText, setIsText] = useState(false)
  return (
    <>
      <div className={`button-primary-container ${props.rootClassName} `}>
        {isPrimary && (
          <div className="button-primary-button">
            <div className="button-primary-container1">
              <span className="button-primary-primary-text">
                {props.primaryText}
              </span>
            </div>
          </div>
        )}
        {isTonal && (
          <div className="button-primary-button1">
            <div className="button-primary-container2">
              <span className="button-primary-tonal-text">
                {props.tonalText}
              </span>
            </div>
          </div>
        )}
        {isOutlined && (
          <div className="button-primary-button2">
            <div className="button-primary-container3">
              <span className="button-primary-outlined-text">
                {props.outlinedText}
              </span>
            </div>
          </div>
        )}
        {isText && (
          <div className="button-primary-button3">
            <div className="button-primary-container4">
              <span className="button-primary-only-text">{props.onlyText}</span>
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .button-primary-container {
            width: 106px;
            height: 46px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .button-primary-button {
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
            background-color: var(--dl-color-yellow-yellow400);
          }
          .button-primary-button:hover {
            background-color: #fbe289;
          }
          .button-primary-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-primary-primary-text {
            color: var(--dl-color-yellow-yellow900);
          }
          .button-primary-button1 {
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
            background-color: var(--dl-color-yellow-yellow200);
          }
          .button-primary-button1:hover {
            background-color: #fbe289;
          }
          .button-primary-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-primary-tonal-text {
            color: var(--dl-color-yellow-yellow900);
          }
          .button-primary-button2 {
            gap: 12px;
            width: 100%;
            cursor: pointer;
            height: 100%;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: 14px;
            border-color: var(--dl-color-yellow-yellow600);
            border-width: 1px;
            padding-left: 24px;
            border-radius: 100px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 14px;
            justify-content: center;
            background-color: white;
          }
          .button-primary-button2:hover {
            background-color: #fbe289;
          }
          .button-primary-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-primary-outlined-text {
            color: var(--dl-color-yellow-yellow800);
          }
          .button-primary-button3 {
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
          .button-primary-button3:hover {
            background-color: #fbe289;
          }
          .button-primary-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .button-primary-only-text {
            color: var(--dl-color-yellow-yellow800);
          }
          .button-primary-root-class-name {
            width: auto;
            height: auto;
          }
          .button-primary-root-class-name1 {
            width: auto;
          }
          .button-primary-root-class-name2 {
            width: auto;
            height: auto;
          }
          .button-primary-root-class-name3 {
            width: auto;
          }
          .button-primary-root-class-name4 {
            width: auto;
          }
          .button-primary-root-class-name5 {
            width: auto;
          }
          .button-primary-root-class-name6 {
            width: auto;
          }
          .button-primary-root-class-name8 {
            width: 140px;
          }
          .button-primary-root-class-name9 {
            width: 140px;
          }
        `}
      </style>
    </>
  )
}

ButtonPrimary.defaultProps = {
  onlyText: 'Button',
  rootClassName: '',
  primaryText: 'Button',
  tonalText: 'Button',
  outlinedText: 'Button',
}

ButtonPrimary.propTypes = {
  onlyText: PropTypes.string,
  rootClassName: PropTypes.string,
  primaryText: PropTypes.string,
  tonalText: PropTypes.string,
  outlinedText: PropTypes.string,
}

export default ButtonPrimary
