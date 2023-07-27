import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import GameItem from '../components/game-item'
import './s-dashboard.css'

const SODashboard = (props) => {
  return (
    <div className="s-dashboard-container">
      <Helmet>
        <title>SODashboard - exported project</title>
        <meta property="og:title" content="SODashboard - exported project" />
      </Helmet>
      <main className="s-dashboard-dashboard">
        <NavBar rootClassName="nav-bar-root-class-name4"></NavBar>
        <div className="s-dashboard-content-container content-container">
          <span className="Headine1 page-title">Welcome John</span>
          <div className="s-dashboard-lists-container">
            <div className="s-dashboard-column-left dashboard-column-50">
              <div className="column-inner">
                <span className="Headine3 column-title">
                  Upcoming Game Schedule
                </span>
                <div className="list-container">
                  <div className="game-list-header">
                    <div className="s-dashboard-frame115">
                      <span className="s-dashboard-text OverlineL">Teams</span>
                    </div>
                    <div className="s-dashboard-frame122">
                      <span className="s-dashboard-text01 OverlineL">ID</span>
                    </div>
                    <div className="s-dashboard-frame1221">
                      <span className="s-dashboard-text02 OverlineL">
                        <span>Level</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame121">
                      <span className="s-dashboard-text04 OverlineL">
                        <span>Date &amp; Time</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame120">
                      <span className="s-dashboard-text06 OverlineL">ref</span>
                    </div>
                  </div>
                  <div className="games-list">
                    <div className="s-dashboard-game-list-inner gameList-inner">
                      <GameItem rootClassName="game-item-root-class-name15"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name16"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name22"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name21"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name20"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name19"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name18"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name17"></GameItem>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="s-dashboard-button btnTonal">
                <span>
                  <span>See all games</span>
                  <br></br>
                </span>
              </button>
            </div>
            <div className="s-dashboard-column-right dashboard-column-50">
              <div className="s-dashboard-column-inner1 column-inner">
                <span className="s-dashboard-column-title1 Headine3 column-title">
                  Games Still Needing Referees
                </span>
                <div className="s-dashboard-list-container1 list-container">
                  <div className="s-dashboard-games-list-header1 game-list-header">
                    <div className="s-dashboard-frame1151">
                      <span className="s-dashboard-text10 OverlineL">
                        <span>Teams</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame1222">
                      <span className="s-dashboard-text12 OverlineL">id</span>
                    </div>
                    <div className="s-dashboard-frame1223">
                      <span className="s-dashboard-text13 OverlineL">
                        <span>Level</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame1211">
                      <span className="s-dashboard-text15 OverlineL">
                        <span>Date &amp; Time</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame1201">
                      <span className="s-dashboard-text17 OverlineL">ref</span>
                    </div>
                  </div>
                  <div className="s-dashboard-games-list1 games-list">
                    <div className="s-dashboard-game-list-inner1 gameList-inner">
                      <GameItem rootClassName="game-item-root-class-name23"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name24"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name25"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name26"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name27"></GameItem>
                      <GameItem rootClassName="game-item-root-class-name28"></GameItem>
                    </div>
                  </div>
                </div>
                <div className="s-dashboard-recent-updates">
                  <span className="s-dashboard-recent-updates Headine3 column-title">
                    Recent Updates
                  </span>
                  <div className="recent-updates">
                    <div className="s-dashboard-recent-update">
                      <div className="s-dashboard-frame105">
                        <div className="s-dashboard-frame104">
                          <span className="s-dashboard-text18 Body2">
                            <span>A referee picked up</span>
                          </span>
                          <span className="s-dashboard-text20">
                            <span>Pershing vs Pearl</span>
                          </span>
                          <span className="s-dashboard-text22 Body2">
                            <span>game as 12u line referee</span>
                          </span>
                        </div>
                        <span className="s-dashboard-text24">
                          <span>32 min ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="s-dashboard-recent-update1">
                      <div className="s-dashboard-frame1051">
                        <div className="s-dashboard-frame1041">
                          <span className="s-dashboard-text26 Body2">
                            <span>A referee picked up</span>
                          </span>
                          <span className="s-dashboard-text28">
                            <span>Pearl vs Edina</span>
                          </span>
                          <span className="s-dashboard-text30 Body2">
                            <span>game as 16U main referee</span>
                          </span>
                        </div>
                        <span className="s-dashboard-text32">
                          <span>2 hs ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="s-dashboard-recent-update2">
                      <div className="s-dashboard-frame1052">
                        <div className="s-dashboard-frame1042">
                          <span className="s-dashboard-text34 Body2">
                            <span>
                              A referee wants to join your referee pool
                            </span>
                          </span>
                        </div>
                        <span className="s-dashboard-text36">
                          <span>4 hs ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="s-dashboard-recent-update3">
                      <div className="s-dashboard-frame1053">
                        <div className="s-dashboard-frame1043">
                          <span className="s-dashboard-text38">
                            <span>Linden Hills Park</span>
                          </span>
                          <span className="s-dashboard-text40 Body2">
                            <span>Successfully paired with you</span>
                          </span>
                        </div>
                        <span className="s-dashboard-text42">
                          <span>1 day ago</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SODashboard
