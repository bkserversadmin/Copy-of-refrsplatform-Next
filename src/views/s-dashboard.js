import React from 'react'

import { Helmet } from 'react-helmet'

import GamesListItem from '../components/games-list-item'
import ButtonYellow from '../components/button-yellow'
import NavBar from '../components/nav-bar'
import './s-dashboard.css'

const SODashboard = (props) => {
  return (
    <div className="s-dashboard-container">
      <Helmet>
        <title>SODashboard - exported project</title>
        <meta property="og:title" content="SODashboard - exported project" />
      </Helmet>
      <div className="s-dashboard-welcome">
        <div className="s-dashboard-container1">
          <div className="s-dashboard-container2">
            <span className="s-dashboard-text Headine1">
              <span>Welcome John</span>
            </span>
            <div className="s-dashboard-column-left-container">
              <div className="s-dashboard-upcoming-game-schedule-container">
                <span className="s-dashboard-text02 Headine3">
                  <span>Upcoming Game Schedule</span>
                </span>
                <div className="s-dashboard-frame6027">
                  <div className="s-dashboard-games-list-header">
                    <div className="s-dashboard-frame115">
                      <span className="s-dashboard-text04 OverlineL">
                        Teams
                      </span>
                    </div>
                    <div className="s-dashboard-frame122">
                      <span className="s-dashboard-text05 OverlineL">ID</span>
                    </div>
                    <div className="s-dashboard-frame1221">
                      <span className="s-dashboard-text06 OverlineL">
                        <span>Level</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame121">
                      <span className="s-dashboard-text08 OverlineL">
                        <span>Date &amp; Time</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame120">
                      <span className="s-dashboard-text10 OverlineL">ref</span>
                    </div>
                  </div>
                  <div className="s-dashboard-games-list">
                    <div className="s-dashboard-frame6019">
                      <GamesListItem rootClassName="games-list-item-root-class-name16"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name24"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name17"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name18"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name19"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name28"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name27"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name23"></GamesListItem>
                    </div>
                  </div>
                </div>
              </div>
              <div className="s-dashboard-container3">
                <ButtonYellow
                  tonalText="See all games"
                  rootClassName="button-yellow-root-class-name4"
                ></ButtonYellow>
                <div className="s-dashboard-container4">
                  <ButtonYellow
                    tonalText="See all games"
                    rootClassName="button-yellow-root-class-name2"
                  ></ButtonYellow>
                </div>
              </div>
            </div>
            <div className="s-dashboard-column-right-container">
              <div className="s-dashboard-available-games-container">
                <span className="s-dashboard-text11 Headine3">
                  Games Still Needing Referees
                </span>
                <div className="s-dashboard-frame60271">
                  <div className="s-dashboard-games-list-header1">
                    <div className="s-dashboard-frame1151">
                      <span className="s-dashboard-text12 OverlineL">
                        <span>Teams</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame1222">
                      <span className="s-dashboard-text14 OverlineL">id</span>
                    </div>
                    <div className="s-dashboard-frame1223">
                      <span className="s-dashboard-text15 OverlineL">
                        <span>Level</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame1211">
                      <span className="s-dashboard-text17 OverlineL">
                        <span>Date &amp; Time</span>
                      </span>
                    </div>
                    <div className="s-dashboard-frame1201">
                      <span className="s-dashboard-text19 OverlineL">ref</span>
                    </div>
                  </div>
                  <div className="s-dashboard-games-list1">
                    <div className="s-dashboard-frame60191">
                      <GamesListItem rootClassName="games-list-item-root-class-name20"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name21"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name26"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name25"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name22"></GamesListItem>
                    </div>
                  </div>
                </div>
                <div className="s-dashboard-frame6107">
                  <span className="s-dashboard-text20 Headine3">
                    <span>Recent Updates</span>
                  </span>
                  <div className="s-dashboard-recent-updates">
                    <div className="s-dashboard-recent-updates1">
                      <div className="s-dashboard-frame105">
                        <div className="s-dashboard-frame104">
                          <span className="s-dashboard-text22 Body2">
                            <span>A referee picked up</span>
                          </span>
                          <span className="s-dashboard-text24">
                            <span>Pershing vs Pearl</span>
                          </span>
                          <span className="s-dashboard-text26 Body2">
                            <span>game as 12u line referee</span>
                          </span>
                        </div>
                        <span className="s-dashboard-text28">
                          <span>32 min ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="s-dashboard-recent-updates2">
                      <div className="s-dashboard-frame1051">
                        <div className="s-dashboard-frame1041">
                          <span className="s-dashboard-text30 Body2">
                            <span>A referee picked up</span>
                          </span>
                          <span className="s-dashboard-text32">
                            <span>Pearl vs Edina</span>
                          </span>
                          <span className="s-dashboard-text34 Body2">
                            <span>game as 16U main referee</span>
                          </span>
                        </div>
                        <span className="s-dashboard-text36">
                          <span>2 hs ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="s-dashboard-recent-updates3">
                      <div className="s-dashboard-frame1052">
                        <div className="s-dashboard-frame1042">
                          <span className="s-dashboard-text38 Body2">
                            <span>
                              A referee wants to join your referee pool
                            </span>
                          </span>
                        </div>
                        <span className="s-dashboard-text40">
                          <span>4 hs ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="s-dashboard-recent-updates4">
                      <div className="s-dashboard-frame1053">
                        <div className="s-dashboard-frame1043">
                          <span className="s-dashboard-text42">
                            <span>Linden Hills Park</span>
                          </span>
                          <span className="s-dashboard-text44 Body2">
                            <span>Successfully paired with you</span>
                          </span>
                        </div>
                        <span className="s-dashboard-text46">
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
        <NavBar rootClassName="nav-bar-root-class-name4"></NavBar>
      </div>
    </div>
  )
}

export default SODashboard
