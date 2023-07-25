import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'

const CalendarView = (props) => {
  return (
    <>
      <div className="calendar-view-container">
        <Head>
          <title>Calendar-view - exported project</title>
          <meta
            property="og:title"
            content="Calendar-view - exported project"
          />
        </Head>
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
                <Link href="/my-games">
                  <a className="calendar-view-link">
                    <img
                      alt="IconI294"
                      src="/icon-calendar-white.svg"
                      className="calendar-view-icon"
                    />
                    <span className="calendar-view-text001 ButtonL">
                      <span>Calendar view</span>
                    </span>
                  </a>
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
      <style jsx>
        {`
          .calendar-view-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .calendar-view-mygames-assigned-games-calendar {
            width: 100%;
            height: 1129px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .calendar-view-navbar-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-container1 {
            flex: 0 0 auto;
            width: 1170px;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .calendar-view-container-elements {
            gap: 48px;
            width: 1169px;
            height: auto;
            display: flex;
            position: relative;
            margin-top: 48px;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-container2 {
            flex: initial;
            width: 100%;
            height: 44px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .calendar-view-frame5988 {
            gap: 24px;
            width: 432px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .calendar-view-text {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .calendar-view-container3 {
            flex: 0 0 auto;
            width: 240px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .calendar-view-select {
            height: 44px;
            padding-top: 10px;
            border-color: #7a7a7a;
            border-width: 2px;
            padding-left: 8px;
            border-radius: 0px;
            padding-right: 8px;
            padding-bottom: 10px;
            background-color: transparent;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .calendar-view-link {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 14px 24px;
            transition: 0.3s;
            align-items: flex-start;
            padding-left: 14px 24px;
            border-radius: 100px;
            text-decoration: none;
            background-color: #000000;
          }
          .calendar-view-link:hover {
            background-color: var(--dl-color-grey-grey700);
          }
          .calendar-view-icon {
            width: 16px;
            height: 16px;
          }
          .calendar-view-text001 {
            color: #ffffff;
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .calendar-view-monthly-calendar {
            gap: 24px;
            display: flex;
            padding: 38px;
            align-items: flex-start;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .calendar-view-frame5980 {
            gap: 367px;
            display: flex;
            align-items: center;
          }
          .calendar-view-frame5979 {
            gap: 10px;
            width: 139px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .calendar-view-calendar-navigation {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-prev {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 4px 0 0 4px;
            background-color: var(--dl-color-grey-grey700);
          }
          .calendar-view-icon1 {
            width: 20px;
            height: 20px;
          }
          .calendar-view-next {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 4px 0 0 4px;
            background-color: var(--dl-color-grey-grey700);
          }
          .calendar-view-icon2 {
            width: 20px;
            height: 20px;
          }
          .calendar-view-text003 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: center;
            line-height: normal;
          }
          .calendar-view-calendar-view {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-frame5972 {
            gap: 10px;
            display: flex;
            padding: 10px 12px;
            align-items: flex-start;
            border-radius: 4px 0 0 4px;
            background-color: var(--dl-color-grey-grey900);
          }
          .calendar-view-text005 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .calendar-view-frame5973 {
            gap: 10px;
            display: flex;
            padding: 10px 12px;
            align-items: flex-start;
            border-radius: 0 4px 4px 0;
            background-color: var(--dl-color-grey-grey700);
          }
          .calendar-view-text007 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .calendar-view-frame5982 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-days-container {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-calendar-month-days {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text009 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-calendar-month-days1 {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text011 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-calendar-month-days2 {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text013 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-calendar-month-days3 {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text015 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-calendar-month-days4 {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text017 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-calendar-month-days5 {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text019 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-calendar-month-days6 {
            gap: 10px;
            width: 156px;
            height: 25px;
            display: flex;
            padding: 6px 10px;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-default-white);
          }
          .calendar-view-text021 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .calendar-view-frame5981 {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-calendar-days-monthly {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container {
            gap: 10px;
            width: 148px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .calendar-view-text023 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            align-self: stretch;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly01 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number01 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container01 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text025 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame5974 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-calendar-matches {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text026 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-matches1 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text028 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-matches2 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text030 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-more-matches {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .calendar-view-text032 {
            color: var(--dl-color-bluegreen-bluegreen700);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly02 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number02 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container02 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text034 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame59741 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-calendar-matches3 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text035 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly03 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number03 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container03 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text037 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly04 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number04 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container04 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text038 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly05 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number05 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container05 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text039 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly06 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number06 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container06 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text040 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame5975 {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-calendar-days-monthly07 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number07 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container07 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text041 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly08 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number08 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container08 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text042 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly09 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number09 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container09 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text043 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly10 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number10 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container10 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text044 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame59742 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-calendar-matches4 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text046 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly11 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number11 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container11 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text048 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame59743 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .calendar-view-calendar-matches5 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text050 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-matches6 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text052 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-matches7 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen600);
          }
          .calendar-view-text054 {
            color: var(--dl-color-default-white);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-more-matches1 {
            gap: 10px;
            width: 147px;
            display: flex;
            padding: 4px 2px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 4px;
            justify-content: center;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .calendar-view-text056 {
            color: var(--dl-color-bluegreen-bluegreen700);
            height: auto;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly12 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number12 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container12 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text058 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly13 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number13 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container13 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text060 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame5976 {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-calendar-days-monthly14 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number14 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container14 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text062 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly15 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number15 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container15 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text064 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly16 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number16 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container16 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text066 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly17 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number17 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container17 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text068 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly18 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number18 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container18 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text070 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly19 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number19 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container19 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text072 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly20 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number20 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container20 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text074 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame5977 {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-calendar-days-monthly21 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number21 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container21 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text076 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly22 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number22 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container22 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text078 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly23 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number23 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container23 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text080 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly24 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number24 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container24 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text082 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly25 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number25 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container25 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text084 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly26 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number26 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container26 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text086 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly27 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number27 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container27 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text088 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-frame5978 {
            display: flex;
            align-items: flex-start;
          }
          .calendar-view-calendar-days-monthly28 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number28 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container28 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text090 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly29 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number29 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container29 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text092 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly30 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number30 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container30 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text094 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly31 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number31 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container31 {
            gap: 10px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
          }
          .calendar-view-text096 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly32 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number32 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container32 {
            gap: 10px;
            width: 148px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .calendar-view-text098 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            align-self: stretch;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly33 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number33 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container33 {
            gap: 10px;
            width: 148px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .calendar-view-text099 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            align-self: stretch;
            text-align: right;
            line-height: 14px;
          }
          .calendar-view-calendar-days-monthly34 {
            gap: 4px;
            width: 156px;
            height: 130px;
            display: flex;
            padding: 4px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .calendar-view-calendar-day-number34 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .calendar-view-number-container34 {
            gap: 10px;
            width: 148px;
            display: flex;
            padding: 2px;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .calendar-view-text100 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            align-self: stretch;
            text-align: right;
            line-height: 14px;
          }
        `}
      </style>
    </>
  )
}

export default CalendarView
