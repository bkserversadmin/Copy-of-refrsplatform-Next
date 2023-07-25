import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import SOAssignorResultItem from '../components/s-assignor-result-item'
import ButtonPrimary from '../components/button-primary'

const SOWithoutPairedResults = (props) => {
  return (
    <>
      <div className="s-without-paired-results-container">
        <Head>
          <title>SOWithoutPairedResults - exported project</title>
          <meta
            property="og:title"
            content="SOWithoutPairedResults - exported project"
          />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name6"></NavBar>
        <div className="s-without-paired-results-withoutpairedassignor">
          <div className="s-without-paired-results-content-container">
            <div className="s-without-paired-results-top-container">
              <div className="s-without-paired-results-header-container">
                <span className="s-without-paired-results-pair-a-new-assignor Headine1">
                  Pair with a referee assignor
                </span>
                <span className="s-without-paired-results-subtitle Caption">
                  <span>
                    Search and pair an assignor with your sport organization
                  </span>
                </span>
              </div>
              <div className="s-without-paired-results-search">
                <span className="s-without-paired-results-text1">
                  <span>search assignors</span>
                </span>
                <div className="s-without-paired-results-search-fields">
                  <div className="s-without-paired-results-search-bar">
                    <img
                      alt="IconI481"
                      src="/external/iconi481-3g1i.svg"
                      className="s-without-paired-results-icon"
                    />
                    <input
                      type="text"
                      placeholder="Search"
                      className="s-without-paired-results-textinput input"
                    />
                  </div>
                  <select className="s-without-paired-results-select">
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
                  <select className="s-without-paired-results-select1">
                    <option value="Location" selected>
                      Location
                    </option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="s-without-paired-results-list-item">
              <div className="s-without-paired-results-container1">
                <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name"></SOAssignorResultItem>
                <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name4"></SOAssignorResultItem>
                <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name3"></SOAssignorResultItem>
                <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name5"></SOAssignorResultItem>
                <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name2"></SOAssignorResultItem>
                <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name1"></SOAssignorResultItem>
              </div>
            </div>
            <div className="s-without-paired-results-container2">
              <ButtonPrimary
                primaryText="Send Pairing Request"
                rootClassName="button-primary-root-class-name5"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .s-without-paired-results-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .s-without-paired-results-withoutpairedassignor {
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
          .s-without-paired-results-content-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 980px;
            margin-top: 50px;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-without-paired-results-top-container {
            gap: 40px;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-without-paired-results-header-container {
            gap: 16px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-without-paired-results-pair-a-new-assignor {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-results-subtitle {
            color: var(--dl-color-grey-grey700);
            height: auto;
            opacity: 0.5;
            text-align: left;
            line-height: normal;
          }
          .s-without-paired-results-search {
            gap: 12px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-without-paired-results-text1 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            font-size: 12px;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 400px;
            line-height: normal;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .s-without-paired-results-search-fields {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .s-without-paired-results-search-bar {
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
          .s-without-paired-results-icon {
            width: 16px;
            height: 16px;
          }
          .s-without-paired-results-textinput {
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
          .s-without-paired-results-select {
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
          .s-without-paired-results-select1 {
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
          .s-without-paired-results-list-item {
            gap: 10px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 16px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .s-without-paired-results-container1 {
            gap: 10px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow-y: scroll;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-without-paired-results-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  )
}

export default SOWithoutPairedResults
