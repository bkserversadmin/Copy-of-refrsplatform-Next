import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import GameItem from '../components/game-item'
import './my-games.css'

const MyGames = (props) => {
  return (
    <div className="my-games-container">
      <Helmet>
        <title>My-games - exported project</title>
        <meta property="og:title" content="My-games - exported project" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name10"></NavBar>
      <div className="my-games-mygames-assigned-games-listview">
        <div className="my-games-container1">
          <div className="my-games-container2">
            <div className="my-games-frame5988">
              <span className="my-games-text Headine1">My games</span>
              <div className="my-games-container3">
                <select className="my-games-select Body1">
                  <option value="Assigned games" selected>
                    Assigned games
                  </option>
                  <option value="Available games">Available games</option>
                </select>
              </div>
            </div>
            <Link to="/calendar-view" className="my-games-button">
              <img
                alt="IconI294"
                src="/external/iconi294-mfo.svg"
                className="my-games-icon"
              />
              <span className="my-games-text01 ButtonL">
                <span>Calendar view</span>
              </span>
            </Link>
          </div>
          <div className="my-games-search">
            <span className="my-games-text03 OverlineL">
              <span>Search games</span>
            </span>
            <div className="my-games-search-fields">
              <input
                type="text"
                placeholder="Search"
                className="my-games-textinput input"
              />
              <select className="my-games-select1">
                <option value="State">State</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <select className="my-games-select2">
                <option value="City " selected>
                  City
                </option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
              <select className="my-games-select3">
                <option value="Level" selected>
                  Sport
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
              <select className="my-games-select4">
                <option value="Sport" selected>
                  Level
                </option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="my-games-compensation-range">
                <span className="my-games-text05 OverlineS">
                  <span>Minimum compensation</span>
                </span>
                <div className="my-games-range-tracker">
                  <div className="my-games-tracker-line">
                    <span className="my-games-text07 OverlineS">0</span>
                    <div className="my-games-group10"></div>
                    <div className="my-games-group101"></div>
                  </div>
                  <span className="my-games-text08">
                    <span>$44</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="my-games-frame6020">
            <span className="my-games-text10 Headine3">
              <span>Upcoming game schedule</span>
            </span>
            <div className="my-games-frame6019">
              <div className="my-games-games-list-header">
                <div className="my-games-frame115">
                  <span className="my-games-text12 OverlineL">
                    <span>Teams</span>
                  </span>
                </div>
                <div className="my-games-frame116">
                  <span className="my-games-text14 OverlineL">
                    <span>Level</span>
                  </span>
                </div>
                <div className="my-games-frame121">
                  <span className="my-games-text16 OverlineL">
                    <span>Date &amp; Time</span>
                  </span>
                </div>
                <div className="my-games-frame117">
                  <span className="my-games-text18 OverlineL">
                    <span>Address</span>
                  </span>
                </div>
                <div className="my-games-frame40">
                  <span className="my-games-text20 OverlineL">
                    <span>Sport Org</span>
                  </span>
                </div>
                <div className="my-games-frame118">
                  <span className="my-games-text22 OverlineL">
                    <span>Referees</span>
                  </span>
                </div>
                <div className="my-games-frame120">
                  <span className="my-games-text24 OverlineL">
                    <span>Pay</span>
                  </span>
                </div>
              </div>
              <div className="my-games-games-list">
                <div className="my-games-games-list-inner">
                  <GameItem GameName="knfjslkgnerlge"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name1"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name2"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name3"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name4"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name5"></GameItem>
                  <GameItem rootClassName="game-item-root-class-name6"></GameItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-games-container4"></div>
    </div>
  )
}

export default MyGames
