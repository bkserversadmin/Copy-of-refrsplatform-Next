import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import GameItem from '../components/game-item'
import './s-my-games.css'

const SOMyGames = (props) => {
  return (
    <div className="s-my-games-container">
      <Helmet>
        <title>SOMyGames - exported project</title>
        <meta property="og:title" content="SOMyGames - exported project" />
      </Helmet>
      <div className="s-my-games-my-games">
        <NavBar rootClassName="nav-bar-root-class-name5"></NavBar>
        <div className="s-my-games-container1">
          <span className="s-my-games-my-games-title Headine1 page-title">
            My games
          </span>
          <div className="s-my-games-search searchContainer">
            <span className="s-my-games-text OverlineL overlineL">
              search games
            </span>
            <div className="searchFields">
              <span className="Body2 filterByDates">Filter by dates:</span>
              <div className="dateFilterContainer">
                <span className="s-my-games-text02 OverlineS overlineS">
                  from
                </span>
                <input
                  type="date"
                  placeholder="Jan 1"
                  className="input dateFromInput"
                />
              </div>
              <div className="s-my-games-to-container dateFilterContainer">
                <span className="s-my-games-text03 OverlineS overlineS">
                  to
                </span>
                <input
                  type="date"
                  placeholder="Mar 1"
                  className="input dateToInput"
                />
              </div>
              <div className="filtersSeparator"></div>
              <select className="sportFilter">
                <option value="Sport" selected>
                  Sport
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
              <select className="gameLevelFilter">
                <option value="Game Level" selected>
                  Game Level
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
              <select className="gameStatusFilter">
                <option value="Game Status" selected>
                  Game Status
                </option>
                <option value="Option 2">Option 2</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="s-my-games-upcoming-games-schedule">
            <span className="s-my-games-upcoming-game-schedule Headine3 column-title">
              Upcoming game schedule
            </span>
            <div className="gamesListContainer">
              <div className="s-my-games-games-list-header">
                <div className="s-my-games-teams-container">
                  <span className="s-my-games-text04 OverlineL">
                    <span>Teams</span>
                  </span>
                </div>
                <div className="s-my-games-id-container">
                  <span className="s-my-games-text06 OverlineL">id</span>
                </div>
                <div className="s-my-games-frame116">
                  <span className="s-my-games-text07 OverlineL">
                    <span>Level</span>
                  </span>
                </div>
                <div className="s-my-games-frame121">
                  <span className="s-my-games-text09 OverlineL">
                    <span>Date &amp; Time</span>
                  </span>
                </div>
                <div className="s-my-games-frame117">
                  <span className="s-my-games-text11 OverlineL">
                    <span>Address</span>
                  </span>
                </div>
                <div className="s-my-games-frame40">
                  <span className="s-my-games-text13 OverlineL">
                    <span>Sport Org</span>
                  </span>
                </div>
                <div className="s-my-games-frame401">
                  <span className="s-my-games-text15 OverlineL">status</span>
                </div>
                <div className="s-my-games-frame118">
                  <span className="s-my-games-text16 OverlineL">
                    <span>Referees</span>
                  </span>
                </div>
              </div>
              <div className="s-my-games-games-list">
                <div className="s-my-games-games-list-inner">
                  <GameItem GameName="knfjslkgnerlge"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name29"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name30"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name31"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name32"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name33"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name34"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name35"></GameItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SOMyGames
