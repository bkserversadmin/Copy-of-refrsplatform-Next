import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './s-assignor-result-item.css'

const SOAssignorResultItem = (props) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={`s-assignor-result-item-container ${props.rootClassName} `}>
      {!isChecked && (
        <div
          onFocus={() => setIsChecked(true)}
          className="s-assignor-result-item-assignors-results default"
        >
          <div className="s-assignor-result-item-assignor-container">
            <div className="s-assignor-result-item-assignor-info">
              <div className="s-assignor-result-item-avatar">
                <img
                  alt="Ellipse36I486"
                  src="/avatar-2-200h.png"
                  loading="lazy"
                  className="s-assignor-result-item-ellipse36"
                />
              </div>
              <div className="s-assignor-result-item-text-container">
                <span className="s-assignor-result-item-title Subtitle1">
                  {props.title}
                </span>
                <span className="s-assignor-result-item-subtitle Body3">
                  {props.subtitle}
                </span>
              </div>
            </div>
            <div className="s-assignor-result-item-frame183">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="s-assignor-result-item-image"
              />
              <span className="s-assignor-result-item-location-text Subtitle2">
                {props.locationText}
              </span>
            </div>
          </div>
          <input
            type="checkbox"
            onClick={() => setIsChecked(true)}
            className="s-assignor-result-item-checkbox"
          />
        </div>
      )}
      {isChecked && (
        <div className="s-assignor-result-item-assignors-results1 default">
          <div className="s-assignor-result-item-assignor-container1">
            <div className="s-assignor-result-item-assignor-info1">
              <div className="s-assignor-result-item-avatar1">
                <img
                  alt="Ellipse36I486"
                  src="/avatar-2-200h.png"
                  loading="lazy"
                  className="s-assignor-result-item-ellipse361"
                />
              </div>
              <div className="s-assignor-result-item-text-container1">
                <span className="s-assignor-result-item-title1 Subtitle1">
                  {props.title1}
                </span>
                <span className="s-assignor-result-item-subtitle1 Body3">
                  {props.subtitle1}
                </span>
              </div>
            </div>
            <div className="s-assignor-result-item-frame1831">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="s-assignor-result-item-image1"
              />
              <span className="s-assignor-result-item-location-text1 Subtitle2">
                {props.locationText1}
              </span>
            </div>
          </div>
          <input
            type="checkbox"
            checked
            className="s-assignor-result-item-checkbox1"
          />
        </div>
      )}
    </div>
  )
}

SOAssignorResultItem.defaultProps = {
  image_alt: 'image',
  locationText1: 'Bloomington MN',
  subtitle1: 'Rec Sports Referee Assigning',
  title1: 'Rec Multi-Sports Assignor',
  image_src: '/iconlocation.svg',
  subtitle: 'Rec Sports Referee Assigning',
  rootClassName: '',
  title: 'Rec Multi-Sports Assignor',
  locationText: 'Bloomington MN',
  image_src1: '/iconlocation.svg',
  image_alt1: 'image',
}

SOAssignorResultItem.propTypes = {
  image_alt: PropTypes.string,
  locationText1: PropTypes.string,
  subtitle1: PropTypes.string,
  title1: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  locationText: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default SOAssignorResultItem
