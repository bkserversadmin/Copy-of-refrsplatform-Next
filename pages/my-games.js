import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import GamesListItem from '../components/games-list-item'

const MyGames = (props) => {
  return (
    <>
      <div className="my-games-container">
        <Head>
          <title>My-games - exported project</title>
          <meta property="og:title" content="My-games - exported project" />
        </Head>
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
              <Link href="/calendar-view">
                <a className="my-games-link">
                  <img
                    alt="IconI294"
                    src="/external/iconi294-mfo.svg"
                    className="my-games-icon"
                  />
                  <span className="my-games-text01 ButtonL">
                    <span>Calendar view</span>
                  </span>
                </a>
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
                    <GamesListItem GameName="knfjslkgnerlge"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name1"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name2"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name3"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name4"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name5"></GamesListItem>
                    <GamesListItem rootClassName="games-list-item-root-class-name6"></GamesListItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-games-container4"></div>
      </div>
      <style jsx>
        {`
          .my-games-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .my-games-mygames-assigned-games-listview {
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
          .my-games-container1 {
            gap: 40px;
            top: 48px;
            left: 0px;
            right: 0px;
            width: 1170px;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .my-games-container2 {
            flex: initial;
            width: 100%;
            height: 44px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .my-games-frame5988 {
            gap: 24px;
            width: 432px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .my-games-text {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-container3 {
            flex: 0 0 auto;
            width: 240px;
            height: auto;
            display: flex;
            flex-direction: column;
          }
          .my-games-select {
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
          .my-games-link {
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
          .my-games-link:hover {
            background-color: var(--dl-color-yellow-yellow300);
          }
          .my-games-icon {
            width: 16px;
            height: 16px;
          }
          .my-games-text01 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
          .my-games-search {
            gap: 12px;
            width: 1170px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .my-games-text03 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-search-fields {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .my-games-textinput {
            color: #a3a3a3;
            height: 44px;
            font-size: 14px;
            padding-top: 10px;
            border-width: 0px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .my-games-select1 {
            color: #a3a3a3;
            width: 170px;
            height: 44px;
            font-size: 14px;
            font-weight: 400;
            padding-top: 10px;
            padding-left: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .my-games-select2 {
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
          .my-games-select3 {
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
          .my-games-select4 {
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
          .my-games-compensation-range {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .my-games-text05 {
            color: rgba(100, 100, 100, 1);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-range-tracker {
            width: 265px;
            height: 29px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .my-games-tracker-line {
            gap: 3px;
            top: 0px;
            left: 0px;
            width: 265px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .my-games-text07 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            opacity: 0.6;
            text-align: left;
            line-height: normal;
          }
          .my-games-group10 {
            width: 255px;
            height: 0.3125px;
            display: flex;
            z-index: 1;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
          }
          .my-games-group101 {
            width: 255px;
            height: 0.3125px;
            display: flex;
            z-index: 1;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: #f6c513;
            border-style: solid;
            border-width: 2px;
          }
          .my-games-text08 {
            top: 17px;
            left: 108.42950439453125px;
            color: var(--dl-color-grey-grey700);
            height: auto;
            position: absolute;
            font-size: 10px;
            font-style: Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .my-games-frame6020 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .my-games-text10 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame6019 {
            gap: 8px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .my-games-games-list-header {
            width: 1170px;
            display: flex;
            padding: 0 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
          }
          .my-games-frame115 {
            gap: 10px;
            display: flex;
            padding: 8px 0;
            flex-grow: 1;
            align-items: center;
          }
          .my-games-text12 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame116 {
            gap: 10px;
            display: flex;
            padding: 8px 56px;
            align-items: center;
            justify-content: center;
          }
          .my-games-text14 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame121 {
            gap: 10px;
            display: flex;
            padding: 8px 60px;
            align-items: center;
            justify-content: center;
          }
          .my-games-text16 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame117 {
            gap: 10px;
            display: flex;
            padding: 8px 56px;
            align-items: center;
            justify-content: center;
          }
          .my-games-text18 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame40 {
            gap: 8px;
            display: flex;
            padding: 8px 12px;
            align-items: center;
            justify-content: center;
          }
          .my-games-text20 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame118 {
            gap: 10px;
            display: flex;
            padding: 8px 40px;
            align-items: flex-start;
            justify-content: center;
          }
          .my-games-text22 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-frame120 {
            gap: 10px;
            display: flex;
            padding: 8px 20px;
            align-items: center;
            border-radius: 4px;
            justify-content: center;
          }
          .my-games-text24 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .my-games-games-list {
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
          .my-games-games-list-inner {
            gap: 8px;
            width: 100%;
            height: 550px;
            display: flex;
            overflow-y: scroll;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .my-games-container4 {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default MyGames
