import React from 'react'

import PropTypes from 'prop-types'

import './test-game-item.css'

const TestGameItem = (props) => {
  return (
    <div className="test-game-item-container">
      <div className="test-game-item-container01 bg-white">
        <div className="test-game-item-container02 px-3">
          <p className="font-bold test-game-item-text">{props.game_title}</p>
        </div>
        <div className="test-game-item-container03">
          <span className="p-1 bg-gray-300 block rounded-sm test-game-item-text1">
            {props.game_id}
          </span>
        </div>
        <div className="test-game-item-container04">
          <span className="bg-bluegreen-bluegreen200 block rounded-sm p-3 test-game-item-text2">
            {props.game_level}
          </span>
        </div>
        <div className="test-game-item-container05"></div>
        <div className="test-game-item-container06"></div>
        <div className="test-game-item-container07"></div>
        <div className="test-game-item-container08"></div>
        <div className="test-game-item-container09"></div>
      </div>
    </div>
  )
}

TestGameItem.defaultProps = {
  game_level: '12U',
  game_title: 'Team A vs Team B',
  game_id: '#231',
}

TestGameItem.propTypes = {
  game_level: PropTypes.string,
  game_title: PropTypes.string,
  game_id: PropTypes.string,
}

export default TestGameItem
