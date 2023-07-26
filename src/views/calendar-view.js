import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import './calendar-view.css'

const CalendarView = (props) => {
  return (
    <div className="calendar-view-container">
      <Helmet>
        <title>Calendar-view - exported project</title>
        <meta property="og:title" content="Calendar-view - exported project" />
      </Helmet>
      <div className="calendar-view-mygames-assigned-games-calendar">
        <div className="calendar-view-navbar-container">
          <NavBar rootClassName="nav-bar-root-class-name8"></NavBar>
        </div>
        <div className="calendar-view-container1">
          <div className="calendar-view-container-elements">
            <div className="calendar-view-container2">
              <div className="calendar-view-frame5988">
                <span className="calendar-view-text Headine1">My games</span>
                <div className="calendar-view-container3">
                  <select className="calendar-view-select Body1">
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
              <Link to="/my-games" className="calendar-view-button">
                <img
                  alt="IconI294"
                  src="/icon-calendar-white.svg"
                  className="calendar-view-icon"
                />
                <span className="calendar-view-text001 ButtonL">
                  <span>Calendar view</span>
                </span>
              </Link>
            </div>
            <div className="calendar-view-monthly-calendar">
              <div className="calendar-view-frame5980">
                <div className="calendar-view-frame5979">
                  <div className="calendar-view-calendar-navigation">
                    <div className="calendar-view-prev">
                      <img
                        alt="IconI278"
                        src="/external/iconi278-3jz.svg"
                        className="calendar-view-icon1"
                      />
                    </div>
                    <div className="calendar-view-next">
                      <img
                        alt="IconI278"
                        src="/external/iconi278-pr9q.svg"
                        className="calendar-view-icon2"
                      />
                    </div>
                  </div>
                </div>
                <span className="calendar-view-text003 Headine2">
                  <span>May 12</span>
                </span>
                <div className="calendar-view-calendar-view">
                  <div className="calendar-view-frame5972">
                    <span className="calendar-view-text005 Body1">
                      <span>month</span>
                    </span>
                  </div>
                  <div className="calendar-view-frame5973">
                    <span className="calendar-view-text007 Body1">
                      <span>week</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="calendar-view-frame5982">
                <div className="calendar-view-days-container">
                  <div className="calendar-view-calendar-month-days">
                    <span className="calendar-view-text009 Subtitle2">
                      <span>Sun</span>
                    </span>
                  </div>
                  <div className="calendar-view-calendar-month-days1">
                    <span className="calendar-view-text011 Subtitle2">
                      <span>Mon</span>
                    </span>
                  </div>
                  <div className="calendar-view-calendar-month-days2">
                    <span className="calendar-view-text013 Subtitle2">
                      <span>Tue</span>
                    </span>
                  </div>
                  <div className="calendar-view-calendar-month-days3">
                    <span className="calendar-view-text015 Subtitle2">
                      <span>Wed</span>
                    </span>
                  </div>
                  <div className="calendar-view-calendar-month-days4">
                    <span className="calendar-view-text017 Subtitle2">
                      <span>Thu</span>
                    </span>
                  </div>
                  <div className="calendar-view-calendar-month-days5">
                    <span className="calendar-view-text019 Subtitle2">
                      <span>Fri</span>
                    </span>
                  </div>
                  <div className="calendar-view-calendar-month-days6">
                    <span className="calendar-view-text021 Subtitle2">
                      <span>Sat</span>
                    </span>
                  </div>
                </div>
                <div className="calendar-view-frame5981">
                  <div className="calendar-view-calendar-days-monthly">
                    <div className="calendar-view-calendar-day-number">
                      <div className="calendar-view-number-container">
                        <span className="calendar-view-text023 Body2">
                          <span>30</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly01">
                    <div className="calendar-view-calendar-day-number01">
                      <div className="calendar-view-number-container01">
                        <span className="calendar-view-text025 Body2">1</span>
                      </div>
                    </div>
                    <div className="calendar-view-frame5974">
                      <div className="calendar-view-calendar-matches">
                        <span className="calendar-view-text026 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                      <div className="calendar-view-calendar-matches1">
                        <span className="calendar-view-text028 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                      <div className="calendar-view-calendar-matches2">
                        <span className="calendar-view-text030 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                      <div className="calendar-view-calendar-more-matches">
                        <span className="calendar-view-text032 Subtitle2">
                          <span>+ 4 games more</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly02">
                    <div className="calendar-view-calendar-day-number02">
                      <div className="calendar-view-number-container02">
                        <span className="calendar-view-text034 Body2">2</span>
                      </div>
                    </div>
                    <div className="calendar-view-frame59741">
                      <div className="calendar-view-calendar-matches3">
                        <span className="calendar-view-text035 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly03">
                    <div className="calendar-view-calendar-day-number03">
                      <div className="calendar-view-number-container03">
                        <span className="calendar-view-text037 Body2">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly04">
                    <div className="calendar-view-calendar-day-number04">
                      <div className="calendar-view-number-container04">
                        <span className="calendar-view-text038 Body2">4</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly05">
                    <div className="calendar-view-calendar-day-number05">
                      <div className="calendar-view-number-container05">
                        <span className="calendar-view-text039 Body2">5</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly06">
                    <div className="calendar-view-calendar-day-number06">
                      <div className="calendar-view-number-container06">
                        <span className="calendar-view-text040 Body2">6</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar-view-frame5975">
                  <div className="calendar-view-calendar-days-monthly07">
                    <div className="calendar-view-calendar-day-number07">
                      <div className="calendar-view-number-container07">
                        <span className="calendar-view-text041 Body2">7</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly08">
                    <div className="calendar-view-calendar-day-number08">
                      <div className="calendar-view-number-container08">
                        <span className="calendar-view-text042 Body2">8</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly09">
                    <div className="calendar-view-calendar-day-number09">
                      <div className="calendar-view-number-container09">
                        <span className="calendar-view-text043 Body2">9</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly10">
                    <div className="calendar-view-calendar-day-number10">
                      <div className="calendar-view-number-container10">
                        <span className="calendar-view-text044 Body2">
                          <span>10</span>
                        </span>
                      </div>
                    </div>
                    <div className="calendar-view-frame59742">
                      <div className="calendar-view-calendar-matches4">
                        <span className="calendar-view-text046 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly11">
                    <div className="calendar-view-calendar-day-number11">
                      <div className="calendar-view-number-container11">
                        <span className="calendar-view-text048 Body2">
                          <span>11</span>
                        </span>
                      </div>
                    </div>
                    <div className="calendar-view-frame59743">
                      <div className="calendar-view-calendar-matches5">
                        <span className="calendar-view-text050 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                      <div className="calendar-view-calendar-matches6">
                        <span className="calendar-view-text052 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                      <div className="calendar-view-calendar-matches7">
                        <span className="calendar-view-text054 Subtitle2">
                          <span>Lakers vs Bulls</span>
                        </span>
                      </div>
                      <div className="calendar-view-calendar-more-matches1">
                        <span className="calendar-view-text056 Subtitle2">
                          <span>+ 4 games more</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly12">
                    <div className="calendar-view-calendar-day-number12">
                      <div className="calendar-view-number-container12">
                        <span className="calendar-view-text058 Body2">
                          <span>12</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly13">
                    <div className="calendar-view-calendar-day-number13">
                      <div className="calendar-view-number-container13">
                        <span className="calendar-view-text060 Body2">
                          <span>13</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar-view-frame5976">
                  <div className="calendar-view-calendar-days-monthly14">
                    <div className="calendar-view-calendar-day-number14">
                      <div className="calendar-view-number-container14">
                        <span className="calendar-view-text062 Body2">
                          <span>14</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly15">
                    <div className="calendar-view-calendar-day-number15">
                      <div className="calendar-view-number-container15">
                        <span className="calendar-view-text064 Body2">
                          <span>15</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly16">
                    <div className="calendar-view-calendar-day-number16">
                      <div className="calendar-view-number-container16">
                        <span className="calendar-view-text066 Body2">
                          <span>16</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly17">
                    <div className="calendar-view-calendar-day-number17">
                      <div className="calendar-view-number-container17">
                        <span className="calendar-view-text068 Body2">
                          <span>17</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly18">
                    <div className="calendar-view-calendar-day-number18">
                      <div className="calendar-view-number-container18">
                        <span className="calendar-view-text070 Body2">
                          <span>18</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly19">
                    <div className="calendar-view-calendar-day-number19">
                      <div className="calendar-view-number-container19">
                        <span className="calendar-view-text072 Body2">
                          <span>19</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly20">
                    <div className="calendar-view-calendar-day-number20">
                      <div className="calendar-view-number-container20">
                        <span className="calendar-view-text074 Body2">
                          <span>20</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar-view-frame5977">
                  <div className="calendar-view-calendar-days-monthly21">
                    <div className="calendar-view-calendar-day-number21">
                      <div className="calendar-view-number-container21">
                        <span className="calendar-view-text076 Body2">
                          <span>21</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly22">
                    <div className="calendar-view-calendar-day-number22">
                      <div className="calendar-view-number-container22">
                        <span className="calendar-view-text078 Body2">
                          <span>22</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly23">
                    <div className="calendar-view-calendar-day-number23">
                      <div className="calendar-view-number-container23">
                        <span className="calendar-view-text080 Body2">
                          <span>23</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly24">
                    <div className="calendar-view-calendar-day-number24">
                      <div className="calendar-view-number-container24">
                        <span className="calendar-view-text082 Body2">
                          <span>24</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly25">
                    <div className="calendar-view-calendar-day-number25">
                      <div className="calendar-view-number-container25">
                        <span className="calendar-view-text084 Body2">
                          <span>25</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly26">
                    <div className="calendar-view-calendar-day-number26">
                      <div className="calendar-view-number-container26">
                        <span className="calendar-view-text086 Body2">
                          <span>26</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly27">
                    <div className="calendar-view-calendar-day-number27">
                      <div className="calendar-view-number-container27">
                        <span className="calendar-view-text088 Body2">
                          <span>27</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="calendar-view-frame5978">
                  <div className="calendar-view-calendar-days-monthly28">
                    <div className="calendar-view-calendar-day-number28">
                      <div className="calendar-view-number-container28">
                        <span className="calendar-view-text090 Body2">
                          <span>28</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly29">
                    <div className="calendar-view-calendar-day-number29">
                      <div className="calendar-view-number-container29">
                        <span className="calendar-view-text092 Body2">
                          <span>29</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly30">
                    <div className="calendar-view-calendar-day-number30">
                      <div className="calendar-view-number-container30">
                        <span className="calendar-view-text094 Body2">
                          <span>30</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly31">
                    <div className="calendar-view-calendar-day-number31">
                      <div className="calendar-view-number-container31">
                        <span className="calendar-view-text096 Body2">
                          <span>31</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly32">
                    <div className="calendar-view-calendar-day-number32">
                      <div className="calendar-view-number-container32">
                        <span className="calendar-view-text098 Body2">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly33">
                    <div className="calendar-view-calendar-day-number33">
                      <div className="calendar-view-number-container33">
                        <span className="calendar-view-text099 Body2">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="calendar-view-calendar-days-monthly34">
                    <div className="calendar-view-calendar-day-number34">
                      <div className="calendar-view-number-container34">
                        <span className="calendar-view-text100 Body2">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarView
