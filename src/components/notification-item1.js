import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './notification-item1.css'

const NotificationItem1 = (props) => {
  const [isViewed, setIsViewed] = useState(false)
  const [Variant, setVariant] = useState('success')
  const [NotificationType, setNotificationType] = useState('payments')
  return (
    <div className="notification-item1-container">
      <div className="notification-item1-notification">
        <div className="notification-item1-left-container">
          <div className="notification-item1-icon-container">
            <img
              alt="IconI256"
              src="/external/iconi256-mdzs.svg"
              className="notification-item1-notification-icon"
            />
          </div>
          <div className="notification-item1-message-and-time">
            <div className="notification-item1-notification-message">
              <span className="notification-item1-payment-initiated-for">
                {props.Content}
              </span>
            </div>
            <span className="notification-item1-notification-time Caption">
              {props.Date}
            </span>
          </div>
        </div>
        <div className="notification-item1-new-indicator"></div>
      </div>
    </div>
  )
}

NotificationItem1.defaultProps = {
  Date: '1 day ago',
  Content: 'Payment initiated for [amountValue] amount.',
  rootClassName: '',
}

NotificationItem1.propTypes = {
  Date: PropTypes.string,
  Content: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NotificationItem1
