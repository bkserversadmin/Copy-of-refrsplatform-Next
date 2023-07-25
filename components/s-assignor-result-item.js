import React from 'react'

import PropTypes from 'prop-types'

const SOAssignorResultItem = (props) => {
  return (
    <>
      <div
        className={`s-assignor-result-item-container ${props.rootClassName} `}
      >
        <div className="s-assignor-result-item-assignors-results default">
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
          <input type="checkbox" className="s-assignor-result-item-checkbox" />
        </div>
      </div>
      <style jsx>
        {`
          .s-assignor-result-item-container {
            width: 100%;
            height: 72px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-assignor-result-item-assignors-results {
            transition: 0.3s;
          }

          .s-assignor-result-item-assignor-container {
            gap: 229px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: space-between;
          }
          .s-assignor-result-item-assignor-info {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-assignor-result-item-avatar {
            width: 40px;
            height: 40px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .s-assignor-result-item-ellipse36 {
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            position: absolute;
            transition: 0.3s;
            border-color: var(--dl-color-grey-grey500);
            border-width: 2px;
            border-radius: var(--dl-radius-radius-round);
          }
          .s-assignor-result-item-ellipse36:active {
            border-color: var(--dl-color-yellow-yellow600);
          }
          .s-assignor-result-item-text-container {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-assignor-result-item-title {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-assignor-result-item-subtitle {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .s-assignor-result-item-frame183 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-assignor-result-item-image {
            width: 16px;
            height: 16px;
            align-self: center;
            object-fit: cover;
          }
          .s-assignor-result-item-location-text {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .s-assignor-result-item-checkbox {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            border-color: var(--dl-color-grey-grey400);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
        `}
      </style>
    </>
  )
}

SOAssignorResultItem.defaultProps = {
  image_alt: 'image',
  image_src: '/iconlocation.svg',
  subtitle: 'Rec Sports Referee Assigning',
  rootClassName: '',
  title: 'Rec Multi-Sports Assignor',
  locationText: 'Bloomington MN',
}

SOAssignorResultItem.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  locationText: PropTypes.string,
}

export default SOAssignorResultItem
