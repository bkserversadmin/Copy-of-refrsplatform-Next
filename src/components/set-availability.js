import React from 'react'

import PropTypes from 'prop-types'

import Switch from './switch'
import './set-availability.css'

const SetAvailability = (props) => {
  return (
    <div className="set-availability-container">
      <div className="set-availability-set-availability-modal">
        <div className="set-availability-content-container">
          <span className="Headine3 modalTitle">
            <span>Set availability</span>
          </span>
          <span className="set-availability-text02 Headine2">
            <span>Friday April 10</span>
          </span>
          <div className="set-availability-date-range-section">
            <span className="set-availability-text04 Body2">
              You won’t be available
            </span>
            <div className="set-availability-from-container">
              <div className="set-availability-text-field-horizontal">
                <div className="set-availability-label-container">
                  <span className="OverlineS fieldLabel">
                    <span>from</span>
                  </span>
                </div>
                <input
                  type="date"
                  placeholder={props.textinput_placeholder}
                  className="set-availability-textinput input selectDate"
                />
              </div>
              <div className="set-availability-text-field-horizontal1">
                <div className="set-availability-label-container1">
                  <span className="set-availability-text07 OverlineS fieldLabel">
                    <span>at</span>
                  </span>
                </div>
                <input
                  type="date"
                  placeholder={props.textinput_placeholder1}
                  className="set-availability-textinput1 input selectDate"
                />
              </div>
            </div>
            <div className="set-availability-to-container">
              <div className="set-availability-text-field-horizontal2">
                <div className="set-availability-label-container2">
                  <span className="set-availability-text09 OverlineS fieldLabel">
                    <span>to</span>
                  </span>
                </div>
                <input
                  type="date"
                  placeholder={props.textinput_placeholder2}
                  className="set-availability-textinput2 input selectDate"
                />
              </div>
              <div className="set-availability-text-field-horizontal3">
                <div className="set-availability-label-container3">
                  <span className="set-availability-text11 OverlineS fieldLabel">
                    <span>at</span>
                  </span>
                </div>
                <input
                  type="date"
                  placeholder={props.textinput_placeholder3}
                  className="set-availability-textinput3 input selectDate"
                />
              </div>
            </div>
          </div>
          <div className="set-availability-set-recurring-section">
            <Switch></Switch>
            <span className="set-availability-text13 Body2">
              <span>Set this as recurring</span>
            </span>
          </div>
        </div>
        <button className="set-availability-button button">
          <span className="set-availability-text15 ButtonL">
            <span>Save changes</span>
          </span>
        </button>
      </div>
    </div>
  )
}

SetAvailability.defaultProps = {
  textinput_placeholder: 'placeholder',
  textinput_placeholder1: 'placeholder',
  textinput_placeholder3: 'placeholder',
  textinput_placeholder2: 'placeholder',
}

SetAvailability.propTypes = {
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
}

export default SetAvailability
