import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import GamesListItem from '../components/games-list-item'
import ButtonPrimary from '../components/button-primary'
import WeeklyEarnings from '../components/weekly-earnings'
import NavBar from '../components/nav-bar'

const Welcome = (props) => {
  return (
    <>
      <div className="welcome-container">
        <Head>
          <title>Welcome - exported project</title>
          <meta property="og:title" content="Welcome - exported project" />
        </Head>
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
                  <ButtonPrimary
                    tonalText="See all games"
                    rootClassName="button-primary-root-class-name"
                  ></ButtonPrimary>
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
                      <ButtonPrimary
                        onlyText="sarasa"
                        tonalText="See more details"
                        rootClassName="button-primary-root-class-name1"
                      ></ButtonPrimary>
                    </div>
                  </div>
                  <Link href="/earnings">
                    <a className="welcome-link">
                      <span className="welcome-text80 ButtonM">
                        <span>View history</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <NavBar rootClassName="nav-bar-root-class-name3"></NavBar>
        </div>
      </div>
      <style jsx>
        {`
          .welcome-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .welcome-welcome {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: center;
            background-color: var(--dl-color-grey-grey200);
          }
          .welcome-container1 {
            top: 120px;
            left: 0px;
            right: 0px;
            width: 1170px;
            height: 862px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .welcome-container2 {
            top: 0px;
            left: 0px;
            width: 1170px;
            height: 862px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .welcome-text {
            top: 0px;
            left: 0px;
            color: var(--dl-color-grey-grey800);
            height: auto;
            position: absolute;
            text-align: left;
            line-height: normal;
          }
          .welcome-column-left-container {
            top: 71px;
            left: 0px;
            width: 570px;
            height: 791px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            justify-content: center;
          }
          .welcome-upcoming-game-schedule-container {
            gap: 24px;
            top: 0px;
            left: 0px;
            width: 570px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-text02 {
            color: rgba(61, 61, 61, 1);
            height: auto;
            opacity: 0.7;
            align-self: stretch;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame6027 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-games-list-header {
            width: 570px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
          }
          .welcome-frame115 {
            gap: 10px;
            display: flex;
            padding: 8px 0;
            flex-grow: 1;
            align-items: center;
          }
          .welcome-text04 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame122 {
            gap: 10px;
            display: flex;
            padding: 8px 0;
            align-items: center;
            justify-content: center;
          }
          .welcome-text05 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame121 {
            gap: 10px;
            display: flex;
            padding: 8px 40px;
            align-items: center;
            justify-content: center;
          }
          .welcome-text07 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame120 {
            gap: 10px;
            display: flex;
            padding: 8px 36px;
            align-items: center;
            border-radius: 4px;
            justify-content: center;
          }
          .welcome-text09 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-games-list {
            gap: 4px;
            width: 570px;
            height: 620px;
            display: flex;
            padding: 16px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(255, 255, 255, 1);
          }
          .welcome-frame6019 {
            gap: 8px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-games-list-item {
            gap: 24px;
            display: flex;
            padding: 15px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(251, 226, 137, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-yellow-yellow50);
          }
          .welcome-text11 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-tags-level {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .welcome-text13 {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-text15 {
            color: var(--dl-color-grey-grey800);
            width: 131px;
            height: auto;
            text-align: center;
            line-height: 16px;
          }
          .welcome-text17 {
            color: var(--dl-color-grey-grey800);
            width: 56px;
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: right;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-games-list-item1 {
            gap: 24px;
            display: flex;
            padding: 15px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-default-white);
          }
          .welcome-text19 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-tags-level1 {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .welcome-text21 {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-text23 {
            color: var(--dl-color-grey-grey800);
            width: 131px;
            height: auto;
            text-align: center;
            line-height: 16px;
          }
          .welcome-text25 {
            color: var(--dl-color-grey-grey800);
            width: 56px;
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: right;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .welcome-column-right-container {
            top: 71px;
            right: 0px;
            width: 570px;
            height: 791px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .welcome-available-games-container {
            gap: 24px;
            top: 0px;
            left: 0px;
            width: 570px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-text27 {
            color: rgba(61, 61, 61, 1);
            height: auto;
            opacity: 0.7;
            align-self: stretch;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame60271 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-games-list-header1 {
            width: 570px;
            display: flex;
            padding: 0 24px 0 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            justify-content: space-between;
          }
          .welcome-frame1151 {
            gap: 10px;
            width: 246px;
            display: flex;
            padding: 8px 16px;
            align-items: center;
            flex-shrink: 0;
          }
          .welcome-text29 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame1221 {
            gap: 10px;
            display: flex;
            padding: 8px 0;
            align-items: center;
            justify-content: center;
          }
          .welcome-text31 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame1211 {
            gap: 10px;
            display: flex;
            padding: 8px 40px;
            align-items: center;
            justify-content: center;
          }
          .welcome-text33 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-frame1201 {
            gap: 10px;
            display: flex;
            padding: 8px 16px;
            align-items: center;
            border-radius: 4px;
            justify-content: center;
          }
          .welcome-text35 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .welcome-games-list1 {
            gap: 4px;
            width: 570px;
            height: 340px;
            display: flex;
            padding: 16px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(255, 255, 255, 1);
          }
          .welcome-frame60191 {
            gap: 8px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .welcome-games-list-item2 {
            gap: 24px;
            display: flex;
            padding: 15px 16px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 8px;
            background-color: var(--dl-color-default-white);
          }
          .welcome-text37 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 16px;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-tags-level2 {
            gap: 8px;
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 4px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .welcome-text39 {
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            font-size: 12px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-text41 {
            color: var(--dl-color-grey-grey800);
            width: 131px;
            height: auto;
            text-align: center;
            line-height: 16px;
          }
          .welcome-text43 {
            color: var(--dl-color-grey-grey800);
            width: 56px;
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: right;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-earning-balance-container {
            left: 0px;
            width: 570px;
            bottom: 0px;
            height: 325px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .welcome-text45 {
            top: 9px;
            left: 0px;
            color: rgba(61, 61, 61, 1);
            width: 570px;
            height: auto;
            opacity: 0.7;
            position: absolute;
            align-self: stretch;
            text-align: left;
            line-height: normal;
          }
          .welcome-earnings-balance {
            gap: 24px;
            top: 57px;
            left: 0px;
            width: 570px;
            height: 268px;
            display: flex;
            padding: 11px 24px;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .welcome-viz {
            width: 486px;
            height: 173.39999389648438px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-group {
            top: 0px;
            left: 0px;
            width: 486.5px;
            height: 173.39999389648438px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-group01 {
            top: 0px;
            left: 0px;
            width: 486.5px;
            height: 173.39999389648438px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-group02 {
            top: 12.81874942779541px;
            left: 32.953983306884766px;
            width: 448.092041015625px;
            height: 142.4812469482422px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-undefined-amount {
            top: 40.97500228881836px;
            left: 0px;
            width: 85px;
            height: 102px;
            position: absolute;
          }
          .welcome-text47 {
            top: 47.0146484375px;
            left: 29.579345703125px;
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-undefined-amount1 {
            top: 4.65625px;
            left: 90.80692291259766px;
            width: 85px;
            height: 138px;
            position: absolute;
          }
          .welcome-text49 {
            top: 10.0146484375px;
            left: 120.579345703125px;
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-undefined-amount2 {
            top: 0px;
            left: 181.61386108398438px;
            width: 85px;
            height: 142px;
            position: absolute;
          }
          .welcome-undefined-amount3 {
            top: 142.4812469482422px;
            left: 272.4207763671875px;
            width: 85px;
            height: 1px;
            position: absolute;
          }
          .welcome-undefined-amount4 {
            top: 142.4812469482422px;
            left: 363.22772216796875px;
            width: 85px;
            height: 1px;
            position: absolute;
          }
          .welcome-text51 {
            top: 6.0146484375px;
            left: 210.579345703125px;
            color: var(--dl-color-bluegreen-bluegreen800);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-x-axis {
            top: 155.3000030517578px;
            left: 28.5px;
            width: 458px;
            height: 18.100000381469727px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector {
            top: 0.5px;
            left: 0px;
            width: 458px;
            height: 1px;
            position: absolute;
          }
          .welcome-group03 {
            top: 0px;
            left: 11.886146545410156px;
            width: 70px;
            height: 18.100000381469727px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector01 {
            top: 0px;
            left: 35px;
            width: 0px;
            height: 6px;
            position: absolute;
          }
          .welcome-text53 {
            top: 6.099999904632568px;
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group04 {
            top: 0px;
            left: 101.19306945800781px;
            width: 73px;
            height: 18.100000381469727px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector02 {
            top: 0px;
            left: 36.5px;
            width: 0px;
            height: 6px;
            position: absolute;
          }
          .welcome-text55 {
            top: 6.099999904632568px;
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group05 {
            top: 0px;
            left: 188.5px;
            width: 80px;
            height: 18.100000381469727px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector03 {
            top: 0px;
            left: 40px;
            width: 0px;
            height: 6px;
            position: absolute;
          }
          .welcome-text57 {
            top: 6.099999904632568px;
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group06 {
            top: 0px;
            left: 279.8069152832031px;
            width: 79px;
            height: 18.100000381469727px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector04 {
            top: 0px;
            left: 39.5px;
            width: 0px;
            height: 6px;
            position: absolute;
          }
          .welcome-text59 {
            top: 6.099999904632568px;
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group07 {
            top: 0px;
            left: 374.1138610839844px;
            width: 72px;
            height: 18.100000381469727px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector05 {
            top: 0px;
            left: 36px;
            width: 0px;
            height: 6px;
            position: absolute;
          }
          .welcome-text61 {
            top: 6.099999904632568px;
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-y-axis {
            top: 0px;
            left: 0px;
            width: 28.5px;
            height: 161px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector06 {
            top: 6.800000190734863px;
            left: 28.5px;
            width: 0px;
            height: 149px;
            position: absolute;
          }
          .welcome-group08 {
            top: 149px;
            left: 12px;
            width: 16px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector07 {
            top: 6.800000190734863px;
            left: 10px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text63 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group09 {
            top: 130.375px;
            left: 1px;
            width: 27px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector08 {
            top: 6.800000190734863px;
            left: 21px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text64 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group10 {
            top: 111.75px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector09 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text66 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group11 {
            top: 93.125px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector10 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text68 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group12 {
            top: 74.5px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector11 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text70 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group13 {
            top: 55.875px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector12 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text72 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group14 {
            top: 37.25px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector13 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text74 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group15 {
            top: 18.625px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector14 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text76 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-group16 {
            top: 0px;
            left: 0px;
            width: 28px;
            height: 12px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .welcome-vector15 {
            top: 6.800000190734863px;
            left: 22px;
            width: 6px;
            height: 1px;
            position: absolute;
          }
          .welcome-text78 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Regular;
            text-align: right;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .welcome-resume-container {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .welcome-container4 {
            display: flex;
            align-items: center;
          }
          .welcome-link {
            gap: 10px;
            top: 0px;
            right: 0px;
            width: 98px;
            display: flex;
            padding: 14px 0;
            position: absolute;
            align-items: flex-start;
            border-radius: 100px;
            text-decoration: none;
          }
          .welcome-text80 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
        `}
      </style>
    </>
  )
}

export default Welcome
