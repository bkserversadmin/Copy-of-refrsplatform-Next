import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'

const SOWithoutPairedAssignor = (props) => {
  return (
    <>
      <div className="s-without-paired-assignor-container">
        <Head>
          <title>SOWithoutPairedAssignor - exported project</title>
          <meta
            property="og:title"
            content="SOWithoutPairedAssignor - exported project"
          />
        </Head>
        <div className="s-without-paired-assignor-withoutpairedassignor">
          <NavBar rootClassName="nav-bar-root-class-name7"></NavBar>
          <div className="s-without-paired-assignor-content-container">
            <div className="s-without-paired-assignor-top-container">
              <div className="s-without-paired-assignor-header-container">
                <span className="s-without-paired-assignor-pair-a-new-assignor Headine1">
                  <span>Pair a new assignor</span>
                </span>
                <span className="s-without-paired-assignor-subtitle Caption">
                  <span>
                    Search and pair an assignor with your sport organization
                  </span>
                </span>
              </div>
              <div className="s-without-paired-assignor-search">
                <span className="s-without-paired-assignor-text2 OverlineL">
                  <span>search assignors</span>
                </span>
                <div className="s-without-paired-assignor-search-fields">
                  <div className="s-without-paired-assignor-search-bar">
                    <img
                      alt="IconI481"
                      src="/external/iconi481-3g1i.svg"
                      className="s-without-paired-assignor-icon"
                    />
                    <input
                      type="text"
                      placeholder="Search"
                      className="s-without-paired-assignor-textinput input"
                    />
                  </div>
                  <select className="s-without-paired-assignor-select">
                    <option value="Sport" selected>
                      Sport
                    </option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  <select className="s-without-paired-assignor-select1">
                    <option value="Location" selected>
                      Location
                    </option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="s-without-paired-assignor-placeholder-container">
              <div className="s-without-paired-assignor-placeholder-text">
                <span className="s-without-paired-assignor-text4 Headine2">
                  <span>You don’t have any paired assignor yet</span>
                </span>
                <span className="s-without-paired-assignor-text6 Subtitle1">
                  <span>Search an assignor to be paired</span>
                </span>
              </div>
              <img
                alt="image14811"
                src="/emptypairing-600w.png"
                className="s-without-paired-assignor-image1"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .s-without-paired-assignor-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .s-without-paired-assignor-withoutpairedassignor {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 1024px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-grey-grey200);
          }
          .s-without-paired-assignor-content-container {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 980px;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-without-paired-assignor-top-container {
            gap: 40px;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-without-paired-assignor-header-container {
            gap: 16px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-without-paired-assignor-pair-a-new-assignor {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-assignor-subtitle {
            color: var(--dl-color-grey-grey700);
            height: auto;
            opacity: 0.5;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-assignor-search {
            gap: 12px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-without-paired-assignor-text2 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-assignor-search-fields {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .s-without-paired-assignor-search-bar {
            gap: 16px;
            height: 44px;
            display: flex;
            padding: 15px 16px 15px 12px;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 1);
          }
          .s-without-paired-assignor-icon {
            width: 16px;
            height: 16px;
          }
          .s-without-paired-assignor-textinput {
            color: #a3a3a3;
            width: 100%;
            height: 44px;
            font-size: 14px;
            padding-top: 10px;
            border-width: 0px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 10px;
          }
          .s-without-paired-assignor-select {
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
          .s-without-paired-assignor-select1 {
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
          .s-without-paired-assignor-placeholder-container {
            width: 100%;
            height: 367px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 1;
            padding-left: 32px;
            border-radius: 24px;
            background-color: rgba(255, 255, 255, 1);
          }
          .s-without-paired-assignor-placeholder-text {
            gap: 24px;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-without-paired-assignor-text4 {
            color: var(--dl-color-grey-grey800);
            width: 444px;
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-assignor-text6 {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-assignor-image1 {
            top: 0px;
            right: 0px;
            width: 551px;
            height: 368px;
            position: absolute;
            border-radius: 0 24px 24px 0;
          }
        `}
      </style>
    </>
  )
}

export default SOWithoutPairedAssignor
