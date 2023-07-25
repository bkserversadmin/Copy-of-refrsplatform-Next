import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import GamesListItem from '../components/games-list-item'

const SOMyGames = (props) => {
  return (
    <>
      <div className="s-my-games-container">
        <Head>
          <title>SOMyGames - exported project</title>
          <meta property="og:title" content="SOMyGames - exported project" />
        </Head>
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
              <Link href="/calendar-view">
                <a className="s-my-games-link">
                  <img
                    alt="IconI294"
                    src="/external/iconi294-mfo.svg"
                    className="s-my-games-icon"
                  />
                  <span className="s-my-games-text01 ButtonL">
                    <span>Calendar view</span>
                  </span>
                </a>
              </Link>
            </div>
            <div className="s-my-games-search">
              <span className="s-my-games-text03">search games</span>
              <div className="s-my-games-search-fields">
                <span className="s-my-games-text04 Body2">
                  Filter by dates:
                </span>
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
      <style jsx>
        {`
          .s-my-games-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .s-my-games-mygames-assigned-games-listview {
            width: 100%;
            height: 1121px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-my-games-container1 {
            gap: 40px;
            top: 129px;
            left: 135px;
            width: 1170px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .s-my-games-container2 {
            flex: initial;
            width: 100%;
            height: 44px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .s-my-games-frame5988 {
            gap: 24px;
            width: 432px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .s-my-games-text {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-container3 {
            flex: 0 0 auto;
            width: 240px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .s-my-games-select {
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
          .s-my-games-link {
            gap: 12px;
            cursor: pointer;
            display: flex;
            padding: 14px 24px;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 100px;
            text-decoration: none;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .s-my-games-link:hover {
            background-color: var(--dl-color-yellow-yellow300);
          }
          .s-my-games-icon {
            width: 16px;
            height: 16px;
          }
          .s-my-games-text01 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .s-my-games-search {
            gap: 12px;
            width: 1170px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-my-games-text03 {
            color: var(--dl-color-grey-grey500);
            font-size: 12px;
            font-style: normal;
            font-family: Inter;
            font-weight: 400px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .s-my-games-search-fields {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .s-my-games-text04 {
            color: var(--dl-color-grey-grey700);
          }
          .s-my-games-container4 {
            gap: 8px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .s-my-games-text05 {
            color: var(--dl-color-grey-grey600);
            font-size: 10px;
            align-self: center;
            font-style: normal;
            font-family: Inter;
            font-weight: 500;
            font-stretch: normal;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .s-my-games-textinput {
            color: #a3a3a3;
            width: 120px;
            height: 44px;
            font-size: 14px;
            padding-top: 10px;
            border-width: 0px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .s-my-games-container5 {
            gap: 8px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .s-my-games-text06 {
            color: var(--dl-color-grey-grey600);
            font-size: 10px;
            align-self: center;
            font-style: normal;
            font-family: Inter;
            font-weight: 500;
            font-stretch: normal;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .s-my-games-textinput1 {
            color: #a3a3a3;
            width: 120px;
            height: 44px;
            font-size: 14px;
            padding-top: 10px;
            border-width: 0px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .s-my-games-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            transform: rotate(90deg);
            align-items: flex-start;
            background-color: var(--dl-color-grey-grey500);
          }
          .s-my-games-line5 {
            width: 44px;
            height: 1px;
            opacity: 0.3;
          }
          .s-my-games-select1 {
            color: #a3a3a3;
            width: 150px;
            height: 44px;
            font-size: 14px;
            font-weight: 400;
            padding-top: 10px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .s-my-games-select2 {
            color: #a3a3a3;
            width: auto;
            height: 44px;
            font-size: 14px;
            font-weight: 400;
            padding-top: 10px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .s-my-games-select3 {
            color: #a3a3a3;
            width: auto;
            height: 44px;
            font-size: 14px;
            font-weight: 400;
            padding-top: 10px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .s-my-games-line51 {
            width: 44px;
            height: 1px;
            opacity: 0.3;
          }
          .s-my-games-line52 {
            width: 44px;
            height: 1px;
            opacity: 0.3;
          }
          .s-my-games-line53 {
            width: 44px;
            height: 1px;
            opacity: 0.3;
          }
          .s-my-games-frame6020 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-my-games-text07 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-frame6019 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-my-games-games-list-header {
            width: 1170px;
            display: flex;
            padding: 0 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
          }
          .s-my-games-teams-container {
            gap: 10px;
            width: 196px;
            display: flex;
            padding: 8px 0;
            align-items: center;
          }
          .s-my-games-text09 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-id-container {
            gap: 10px;
            width: 60px;
            display: flex;
            padding: 8px 0;
            align-self: center;
            align-items: center;
            padding-left: 8px 0;
            justify-content: center;
          }
          .s-my-games-text11 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: center;
            line-height: normal;
          }
          .s-my-games-frame116 {
            gap: 10px;
            width: 137px;
            display: flex;
            align-items: center;
            padding-top: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 8px;
            justify-content: center;
          }
          .s-my-games-text12 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-frame121 {
            gap: 10px;
            width: 167px;
            display: flex;
            padding: 8px;
            align-items: center;
            justify-content: flex-start;
          }
          .s-my-games-text14 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-frame117 {
            gap: 10px;
            width: 135px;
            display: flex;
            align-items: center;
            padding-top: 8px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 8px;
            justify-content: center;
          }
          .s-my-games-text16 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-frame40 {
            gap: 8px;
            display: flex;
            padding: 8px 12px;
            align-items: center;
            justify-content: center;
          }
          .s-my-games-text18 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-frame401 {
            gap: 8px;
            width: 120px;
            display: flex;
            padding: 8px 12px;
            align-items: center;
            justify-content: center;
          }
          .s-my-games-text20 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-frame118 {
            gap: 10px;
            display: flex;
            padding: 8px 40px;
            align-items: flex-start;
            justify-content: center;
          }
          .s-my-games-text21 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-my-games-games-list {
            gap: 4px;
            width: 1170px;
            height: 590px;
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
          .s-my-games-games-list-inner {
            gap: 8px;
            width: 100%;
            height: 550px;
            display: flex;
            overflow-y: scroll;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default SOMyGames
