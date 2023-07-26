import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GamesListItem from '../components/games-list-item'
import ButtonYellow from '../components/button-yellow'
import WeeklyEarnings from '../components/weekly-earnings'
import NavBar from '../components/nav-bar'
import './welcome.css'

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <Helmet>
        <title>Welcome - exported project</title>
        <meta property="og:title" content="Welcome - exported project" />
      </Helmet>
      <div className="welcome-welcome">
        <div className="welcome-container1">
          <div className="welcome-container2">
            <span className="welcome-text Headine1">
              <span>Welcome John</span>
            </span>
            <div className="welcome-column-left-container">
              <div className="welcome-upcoming-game-schedule-container">
                <span className="welcome-text02 Headine3">
                  <span>Upcoming Game Schedule</span>
                </span>
                <div className="welcome-frame6027">
                  <div className="welcome-games-list-header">
                    <div className="welcome-frame115">
                      <span className="welcome-text04 OverlineL">Teams</span>
                    </div>
                    <div className="welcome-frame122">
                      <span className="welcome-text05 OverlineL">
                        <span>Level</span>
                      </span>
                    </div>
                    <div className="welcome-frame121">
                      <span className="welcome-text07 OverlineL">
                        <span>Date &amp; Time</span>
                      </span>
                    </div>
                    <div className="welcome-frame120">
                      <span className="welcome-text09 OverlineL">
                        <span>Pay</span>
                      </span>
                    </div>
                  </div>
                  <div className="welcome-games-list">
                    <div className="welcome-frame6019">
                      <div className="welcome-games-list-item">
                        <span className="welcome-text11">
                          <span>Edina Vs. MNTK Silver</span>
                        </span>
                        <div className="welcome-tags-level">
                          <span className="welcome-text13">
                            <span>Sb2</span>
                          </span>
                        </div>
                        <span className="welcome-text15 Body3">
                          <span>May 8th - 06:15 PM</span>
                        </span>
                        <span className="welcome-text17">
                          <span>$42</span>
                        </span>
                      </div>
                      <GamesListItem
                        GameName="Lakers vs Chicago"
                        rootClassName="games-list-item-root-class-name8"
                      ></GamesListItem>
                      <div className="welcome-games-list-item1">
                        <span className="welcome-text19">
                          <span>Clippers vs Timberwolves</span>
                        </span>
                        <div className="welcome-tags-level1">
                          <span className="welcome-text21">
                            <span>12U</span>
                          </span>
                        </div>
                        <span className="welcome-text23 Body3">
                          <span>May 8th - 08:00 PM</span>
                        </span>
                        <span className="welcome-text25">
                          <span>$35</span>
                        </span>
                      </div>
                      <GamesListItem rootClassName="games-list-item-root-class-name7"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name12"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name13"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name14"></GamesListItem>
                    </div>
                  </div>
                </div>
              </div>
              <div className="welcome-container3">
                <ButtonYellow
                  tonalText="See all games"
                  rootClassName="button-yellow-root-class-name"
                ></ButtonYellow>
              </div>
            </div>
            <div className="welcome-column-right-container">
              <div className="welcome-available-games-container">
                <span className="welcome-text27 Headine3">
                  <span>Available Games for You</span>
                </span>
                <div className="welcome-frame60271">
                  <div className="welcome-games-list-header1">
                    <div className="welcome-frame1151">
                      <span className="welcome-text29 OverlineL">
                        <span>Teams</span>
                      </span>
                    </div>
                    <div className="welcome-frame1221">
                      <span className="welcome-text31 OverlineL">
                        <span>Level</span>
                      </span>
                    </div>
                    <div className="welcome-frame1211">
                      <span className="welcome-text33 OverlineL">
                        <span>Date &amp; Time</span>
                      </span>
                    </div>
                    <div className="welcome-frame1201">
                      <span className="welcome-text35 OverlineL">
                        <span>Pay</span>
                      </span>
                    </div>
                  </div>
                  <div className="welcome-games-list1">
                    <div className="welcome-frame60191">
                      <div className="welcome-games-list-item2">
                        <span className="welcome-text37">
                          <span>MPLS Black Vs MPLS Silver</span>
                        </span>
                        <div className="welcome-tags-level2">
                          <span className="welcome-text39">
                            <span>12UB</span>
                          </span>
                        </div>
                        <span className="welcome-text41 Body3">
                          <span>May 8th - 08:00 PM</span>
                        </span>
                        <span className="welcome-text43">
                          <span>$43</span>
                        </span>
                      </div>
                      <GamesListItem rootClassName="games-list-item-root-class-name9"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name10"></GamesListItem>
                      <GamesListItem rootClassName="games-list-item-root-class-name11"></GamesListItem>
                    </div>
                  </div>
                </div>
              </div>
              <div className="welcome-earning-balance-container">
                <span className="welcome-text45 Headine3">
                  <span>Earnings Balance</span>
                </span>
                <div className="welcome-earnings-balance">
                  <div className="welcome-viz">
                    <div className="welcome-group">
                      <div className="welcome-group01">
                        <div className="welcome-group02">
                          <img
                            alt="undefinedAmountI304"
                            src="/external/undefinedamounti304-g7wm.svg"
                            className="welcome-undefined-amount"
                          />
                          <span className="welcome-text47">
                            <span>$545</span>
                          </span>
                          <img
                            alt="undefinedAmountI304"
                            src="/external/undefinedamounti304-celd.svg"
                            className="welcome-undefined-amount1"
                          />
                          <span className="welcome-text49">
                            <span>$740</span>
                          </span>
                          <img
                            alt="undefinedAmountI304"
                            src="/external/undefinedamounti304-ajz.svg"
                            className="welcome-undefined-amount2"
                          />
                          <img
                            alt="undefinedAmountI304"
                            src
                            className="welcome-undefined-amount3"
                          />
                          <img
                            alt="undefinedAmountI304"
                            src
                            className="welcome-undefined-amount4"
                          />
                          <span className="welcome-text51">
                            <span>$765</span>
                          </span>
                        </div>
                        <div className="welcome-x-axis">
                          <img
                            alt="VectorI304"
                            src="/external/vectori304-60p8.svg"
                            className="welcome-vector"
                          />
                          <div className="welcome-group03">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-5pwd.svg"
                              className="welcome-vector01"
                            />
                            <span className="welcome-text53">
                              <span>31 Apr - 6 May</span>
                            </span>
                          </div>
                          <div className="welcome-group04">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-3nbc.svg"
                              className="welcome-vector02"
                            />
                            <span className="welcome-text55">
                              <span>7 May - 13 May</span>
                            </span>
                          </div>
                          <div className="welcome-group05">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-psxe.svg"
                              className="welcome-vector03"
                            />
                            <span className="welcome-text57">
                              <span>14 May - 20 May</span>
                            </span>
                          </div>
                          <div className="welcome-group06">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-n007.svg"
                              className="welcome-vector04"
                            />
                            <span className="welcome-text59">
                              <span>21 May - 27 May</span>
                            </span>
                          </div>
                          <div className="welcome-group07">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-z6lm.svg"
                              className="welcome-vector05"
                            />
                            <span className="welcome-text61">
                              <span>28 May - 3 Jun</span>
                            </span>
                          </div>
                        </div>
                        <div className="welcome-y-axis">
                          <img
                            alt="VectorI304"
                            src="/external/vectori304-jq1.svg"
                            className="welcome-vector06"
                          />
                          <div className="welcome-group08">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-v91m.svg"
                              className="welcome-vector07"
                            />
                            <span className="welcome-text63">0</span>
                          </div>
                          <div className="welcome-group09">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-clsi.svg"
                              className="welcome-vector08"
                            />
                            <span className="welcome-text64">
                              <span>100</span>
                            </span>
                          </div>
                          <div className="welcome-group10">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-0b0x.svg"
                              className="welcome-vector09"
                            />
                            <span className="welcome-text66">
                              <span>200</span>
                            </span>
                          </div>
                          <div className="welcome-group11">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-e7cc.svg"
                              className="welcome-vector10"
                            />
                            <span className="welcome-text68">
                              <span>300</span>
                            </span>
                          </div>
                          <div className="welcome-group12">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-x1sg.svg"
                              className="welcome-vector11"
                            />
                            <span className="welcome-text70">
                              <span>400</span>
                            </span>
                          </div>
                          <div className="welcome-group13">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-3zy.svg"
                              className="welcome-vector12"
                            />
                            <span className="welcome-text72">
                              <span>500</span>
                            </span>
                          </div>
                          <div className="welcome-group14">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-nng.svg"
                              className="welcome-vector13"
                            />
                            <span className="welcome-text74">
                              <span>600</span>
                            </span>
                          </div>
                          <div className="welcome-group15">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-qt57.svg"
                              className="welcome-vector14"
                            />
                            <span className="welcome-text76">
                              <span>700</span>
                            </span>
                          </div>
                          <div className="welcome-group16">
                            <img
                              alt="VectorI304"
                              src="/external/vectori304-dgqy.svg"
                              className="welcome-vector15"
                            />
                            <span className="welcome-text78">
                              <span>800</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="welcome-resume-container">
                    <div className="welcome-container4">
                      <WeeklyEarnings Title="Weekly Earnings"></WeeklyEarnings>
                      <WeeklyEarnings
                        Title="Weekly Earnings"
                        TextTitle="Completed Matches"
                      ></WeeklyEarnings>
                    </div>
                    <ButtonYellow
                      onlyText="sarasa"
                      tonalText="See more details"
                      rootClassName="button-yellow-root-class-name1"
                    ></ButtonYellow>
                  </div>
                </div>
                <Link to="/earnings" className="welcome-button">
                  <span className="welcome-text80 ButtonM">
                    <span>View history</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
      </div>
    </div>
  )
}

export default Welcome
