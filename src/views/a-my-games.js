import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import GameItem from '../components/game-item'
import './a-my-games.css'

const ASMyGames = (props) => {
  return (
    <div className="a-my-games-container">
      <Helmet>
        <title>ASMyGames - exported project</title>
        <meta property="og:title" content="ASMyGames - exported project" />
      </Helmet>
      <div className="a-my-games-my-games">
        <NavBar rootClassName="nav-bar-root-class-name16"></NavBar>
        <div className="a-my-games-container1">
          <span className="a-my-games-my-games-title Headine1 page-title">
            My games
          </span>
          <div className="a-my-games-search searchContainer">
            <span className="a-my-games-text OverlineL overlineL">
              search games
            </span>
            <div className="searchFields a-my-games-search-fields">
              <span className="Body2 filterByDates">Filter by dates:</span>
              <div className="dateFilterContainer">
                <span className="a-my-games-text02 OverlineS overlineS">
                  from
                </span>
                <input
                  type="date"
                  placeholder="Jan 1"
                  className="input dateFromInput"
                />
              </div>
              <div className="a-my-games-to-container dateFilterContainer">
                <span className="a-my-games-text03 OverlineS overlineS">
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
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
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
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
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
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="a-my-games-upcoming-games-schedule">
            <span className="a-my-games-upcoming-game-schedule Headine3 column-title">
              Upcoming game schedule
            </span>
            <div className="gamesListContainer a-my-games-games-list-container">
              <div className="gamesListHeader">
                <div className="a-my-games-teams-container">
                  <span className="a-my-games-text04 OverlineL">
                    <span>Teams</span>
                  </span>
                </div>
                <div className="a-my-games-id-container">
                  <span className="a-my-games-text06 OverlineL">id</span>
                </div>
                <div className="a-my-games-frame116">
                  <span className="a-my-games-text07 OverlineL">
                    <span>Level</span>
                  </span>
                </div>
                <div className="a-my-games-frame121">
                  <span className="a-my-games-text09 OverlineL">
                    <span>Date &amp; Time</span>
                  </span>
                </div>
                <div className="a-my-games-frame117">
                  <span className="a-my-games-text11 OverlineL">
                    <span>Address</span>
                  </span>
                </div>
                <div className="a-my-games-frame40">
                  <span className="a-my-games-text13 OverlineL">
                    <span>Sport Org</span>
                  </span>
                </div>
                <div className="a-my-games-frame401">
                  <span className="a-my-games-text15 OverlineL">status</span>
                </div>
                <div className="a-my-games-frame118">
                  <span className="a-my-games-text16 OverlineL">
                    <span>Referees</span>
                  </span>
                </div>
              </div>
              <div className="a-my-games-games-list games-list">
                <div className="a-my-games-games-list-inner gameList-inner">
                  <GameItem GameName="knfjslkgnerlge"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name36"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name37"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name38"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name39"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name40"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name41"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name42"></GameItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ASMyGames
