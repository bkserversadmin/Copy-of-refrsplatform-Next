import React, { useState } from 'react'

import './switch.css'

const Switch = (props) => {
  const [isOn, setIsOn] = useState(false)
  return (
    <div>
      <div className="switch-on switchOn">
        <div className="switch-circle"></div>
      </div>
      <div className="switch-off switchOff">
        <div className="switch-circle1"></div>
      </div>
    </div>
  )
}

export default Switch
