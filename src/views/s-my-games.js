import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import GamesListItem from '../components/games-list-item'
import './s-my-games.css'

const SOMyGames = (props) => {
  return (
    <div className="s-my-games-container">
      <Helmet>
        <title>SOMyGames - exported project</title>
        <meta property="og:title" content="SOMyGames - exported project" />
      </Helmet>
      <div className="s-my-games-mygames-assigned-games-listview">
        <NavBar rootClassName="nav-bar-root-class-name5"></NavBar>
        <div className="s-my-games-container1">
          <div className="s-my-games-container2">
            <div className="s-my-games-frame5988">
              <span className="s-my-games-text Headine1">My games</span>
              <div className="s-my-games-container3">
                <select className="s-my-games-select Body1">
                  <option value="Assigned games" selected>
                    Assigned games
                  </option>
                  <option value="Option 1">Option 1</option>
                  <option value="Available games">Available games</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <Link to="/calendar-view" className="s-my-games-button">
              <img
                alt="IconI294"
                src="/external/iconi294-mfo.svg"
                className="s-my-games-icon"
              />
              <span className="s-my-games-text01 ButtonL">
                <span>Calendar view</span>
              </span>
            </Link>
          </div>
          <div className="s-my-games-search">
            <span className="s-my-games-text03">search games</span>
            <div className="s-my-games-search-fields">
              <span className="s-my-games-text04 Body2">Filter by dates:</span>
              <div className="s-my-games-container4">
                <span className="s-my-games-text05">from</span>
                <input
                  type="text"
                  placeholder="Jan 1"
                  className="s-my-games-textinput input"
                />
              </div>
              <div className="s-my-games-container5">
                <span className="s-my-games-text06">to</span>
                <input
                  type="text"
                  placeholder="Mar 1"
                  className="s-my-games-textinput1 input"
                />
              </div>
              <div className="s-my-games-container6">
                <img
                  alt="Line5I1077"
                  src="/external/line5i1077-miia.svg"
                  className="s-my-games-line5"
                />
              </div>
              <select className="s-my-games-select1">
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
              <select className="s-my-games-select2">
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
              <select className="s-my-games-select3">
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
              <img
                alt="Line5I1077"
                src="/external/line5i1077-eovbj.svg"
                className="s-my-games-line51"
              />
              <img
                alt="Line5I1077"
                src="/external/line5i1077-y4gf.svg"
                className="s-my-games-line52"
              />
              <img
                alt="Line5I1077"
                src="/external/line5i1077-pnk.svg"
                className="s-my-games-line53"
              />
            </div>
          </div>
          <div className="s-my-games-frame6020">
            <span className="s-my-games-text07 Headine3">
              <span>Upcoming game schedule</span>
            </span>
            <div className="s-my-games-frame6019">
              <div className="s-my-games-games-list-header">
                <div className="s-my-games-teams-container">
                  <span className="s-my-games-text09 OverlineL">
                    <span>Teams</span>
                  </span>
                </div>
                <div className="s-my-games-id-container">
                  <span className="s-my-games-text11 OverlineL">id</span>
                </div>
                <div className="s-my-games-frame116">
                  <span className="s-my-games-text12 OverlineL">
                    <span>Level</span>
                  </span>
                </div>
                <div className="s-my-games-frame121">
                  <span className="s-my-games-text14 OverlineL">
                    <span>Date &amp; Time</span>
                  </span>
                </div>
                <div className="s-my-games-frame117">
                  <span className="s-my-games-text16 OverlineL">
                    <span>Address</span>
                  </span>
                </div>
                <div className="s-my-games-frame40">
                  <span className="s-my-games-text18 OverlineL">
                    <span>Sport Org</span>
                  </span>
                </div>
                <div className="s-my-games-frame401">
                  <span className="s-my-games-text20 OverlineL">status</span>
                </div>
                <div className="s-my-games-frame118">
                  <span className="s-my-games-text21 OverlineL">
                    <span>Referees</span>
                  </span>
                </div>
              </div>
              <div className="s-my-games-games-list">
                <div className="s-my-games-games-list-inner">
                  <GamesListItem GameName="knfjslkgnerlge"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name29"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name30"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name31"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name32"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name33"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name34"></GamesListItem>
                  <GamesListItem rootClassName="games-list-item-root-class-name35"></GamesListItem>
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
