import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer footer">
      <div className="footer-info-container">
        <span className="Body2 footer-copy">{props.Copyright}</span>
        <div className="footer-links">
          <a
            href={props.link_Privacy_Policy}
            target="_blank"
            rel="noreferrer noopener"
            className="Body2 footer-link"
          >
            {props.Privacy_Policy}
          </a>
          <a
            href={props.link_Terms}
            target="_blank"
            rel="noreferrer noopener"
            className="Body2 footer-link"
          >
            {props.Terms}
          </a>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  Terms: 'Terms and Conditions',
  link_Terms: 'https://example.com',
  link_Privacy_Policy: 'https://example.com',
  Privacy_Policy: 'Privacy Policy',
  Copyright: '©2023 Refr Sports',
}

Footer.propTypes = {
  Terms: PropTypes.string,
  link_Terms: PropTypes.string,
  link_Privacy_Policy: PropTypes.string,
  Privacy_Policy: PropTypes.string,
  Copyright: PropTypes.string,
}

export default Footer
