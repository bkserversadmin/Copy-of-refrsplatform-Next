import React from 'react'
import Head from 'next/head'

import GamesListItem from '../components/games-list-item'
import ButtonPrimary from '../components/button-primary'
import NavBar from '../components/nav-bar'

const SODashboard = (props) => {
  return (
    <>
      <div className="s-dashboard-container">
        <Head>
          <title>SODashboard - exported project</title>
          <meta property="og:title" content="SODashboard - exported project" />
        </Head>
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
                        <span className="s-dashboard-text10 OverlineL">
                          ref
                        </span>
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
                  <ButtonPrimary
                    tonalText="See all games"
                    rootClassName="button-primary-root-class-name4"
                  ></ButtonPrimary>
                  <div className="s-dashboard-container4">
                    <ButtonPrimary
                      tonalText="See all games"
                      rootClassName="button-primary-root-class-name2"
                    ></ButtonPrimary>
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
                        <span className="s-dashboard-text19 OverlineL">
                          ref
                        </span>
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
      <style jsx>
        {`
          .s-dashboard-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .s-dashboard-welcome {
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
          .s-dashboard-container1 {
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
          .s-dashboard-container2 {
            top: 0px;
            left: 0px;
            width: 1170px;
            height: 862px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .s-dashboard-text {
            top: 0px;
            left: 0px;
            color: var(--dl-color-grey-grey800);
            height: auto;
            position: absolute;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-column-left-container {
            top: 71px;
            left: 0px;
            width: 570px;
            height: 791px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            justify-content: center;
          }
          .s-dashboard-upcoming-game-schedule-container {
            gap: 24px;
            top: 0px;
            left: 0px;
            width: 570px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-text02 {
            color: rgba(61, 61, 61, 1);
            height: auto;
            opacity: 0.7;
            align-self: stretch;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame6027 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-games-list-header {
            gap: 16;
            width: 570px;
            display: flex;
            padding: 0 0 0 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
          }
          .s-dashboard-frame115 {
            gap: 10px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            padding-top: 8px 0;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 8px 0;
          }
          .s-dashboard-text04 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame122 {
            gap: 10px;
            width: auto;
            display: flex;
            align-items: center;
            padding-top: 8px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 8px;
            justify-content: center;
          }
          .s-dashboard-text05 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame1221 {
            gap: 10px;
            display: flex;
            align-items: center;
            padding-top: 8px 0;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 8px 0;
            justify-content: center;
          }
          .s-dashboard-text06 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame121 {
            gap: 10px;
            display: flex;
            align-items: center;
            padding-top: 8px;
            padding-left: 34px;
            padding-right: 34px;
            padding-bottom: 8px;
            justify-content: center;
          }
          .s-dashboard-text08 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame120 {
            gap: 10px;
            display: flex;
            align-items: center;
            padding-top: 8px 36px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 4px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: 8px 36px;
            justify-content: center;
          }
          .s-dashboard-text10 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-games-list {
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
          .s-dashboard-frame6019 {
            gap: 8px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            overflow-y: scroll;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .s-dashboard-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .s-dashboard-column-right-container {
            top: 71px;
            right: 0px;
            width: 570px;
            height: 791px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .s-dashboard-available-games-container {
            gap: 24px;
            top: 0px;
            left: 0px;
            width: 570px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-text11 {
            color: rgba(61, 61, 61, 1);
            height: auto;
            opacity: 0.7;
            align-self: stretch;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame60271 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-games-list-header1 {
            width: 570px;
            display: flex;
            padding: 0 24px 0 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            justify-content: space-between;
          }
          .s-dashboard-frame1151 {
            gap: 10px;
            width: 246px;
            display: flex;
            padding: 8px 16px;
            align-items: center;
            flex-shrink: 0;
          }
          .s-dashboard-text12 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame1222 {
            gap: 10px;
            display: flex;
            align-items: center;
            padding-top: 8px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 8px;
            justify-content: center;
          }
          .s-dashboard-text14 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame1223 {
            gap: 10px;
            display: flex;
            padding: 8px 0;
            align-items: center;
            justify-content: center;
          }
          .s-dashboard-text15 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame1211 {
            gap: 10px;
            display: flex;
            padding: 8px 40px;
            align-items: center;
            justify-content: center;
          }
          .s-dashboard-text17 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-frame1201 {
            gap: 10px;
            display: flex;
            padding: 8px 16px;
            align-items: center;
            border-radius: 4px;
            justify-content: center;
          }
          .s-dashboard-text19 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-games-list1 {
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
          .s-dashboard-frame60191 {
            gap: 8px;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            overflow-y: scroll;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-frame6107 {
            gap: 16px;
            width: 570px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-text20 {
            color: rgba(61, 61, 61, 1);
            width: 570px;
            height: auto;
            opacity: 0.7;
            text-align: left;
            line-height: normal;
          }
          .s-dashboard-recent-updates {
            gap: 24px;
            width: 570px;
            height: 276px;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .s-dashboard-recent-updates1 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-dashboard-frame105 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-frame104 {
            gap: 6px;
            display: flex;
            align-items: flex-end;
          }
          .s-dashboard-text22 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            opacity: 0.8;
            text-align: left;
            line-height: 14px;
          }
          .s-dashboard-text24 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-dashboard-text26 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            opacity: 0.8;
            text-align: left;
            line-height: 14px;
          }
          .s-dashboard-text28 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            font-size: 10px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-dashboard-recent-updates2 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-dashboard-frame1051 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-frame1041 {
            gap: 6px;
            display: flex;
            align-items: flex-end;
          }
          .s-dashboard-text30 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            opacity: 0.8;
            text-align: left;
            line-height: 14px;
          }
          .s-dashboard-text32 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-dashboard-text34 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            opacity: 0.8;
            text-align: left;
            line-height: 14px;
          }
          .s-dashboard-text36 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            font-size: 10px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-dashboard-recent-updates3 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-dashboard-frame1052 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-frame1042 {
            gap: 6px;
            display: flex;
            align-items: flex-end;
          }
          .s-dashboard-text38 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            opacity: 0.8;
            text-align: left;
            line-height: 14px;
          }
          .s-dashboard-text40 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            font-size: 10px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-dashboard-recent-updates4 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .s-dashboard-frame1053 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-dashboard-frame1043 {
            gap: 6px;
            display: flex;
            align-items: flex-end;
          }
          .s-dashboard-text42 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .s-dashboard-text44 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            opacity: 0.8;
            text-align: left;
            line-height: 14px;
          }
          .s-dashboard-text46 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            font-size: 10px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default SODashboard
