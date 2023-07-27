import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './tab.css'

const Tab = (props) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="tab-tab tab">
      {!isActive && (
        <div className="tabDefault">
          <span className="tab-text Body2">{props.text}</span>
        </div>
      )}
      {isActive && (
        <div className="tabActive">
          <span className="tab-text1 Body2">{props.text1}</span>
        </div>
      )}
    </div>
  )
}

Tab.defaultProps = {
  text: 'Personal Information',
  text1: 'Personal Information',
}

Tab.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Tab
