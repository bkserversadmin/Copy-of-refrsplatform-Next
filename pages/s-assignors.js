import React from 'react'
import Head from 'next/head'

import NavBar from '../components/nav-bar'
import ButtonGrey from '../components/button-grey'
import AssignorItem from '../components/assignor-item'
import ButtonPrimary from '../components/button-primary'

const SOAssignors = (props) => {
  return (
    <>
      <div className="s-assignors-container">
        <Head>
          <title>SOAssignors - exported project</title>
          <meta property="og:title" content="SOAssignors - exported project" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name12"></NavBar>
        <div className="s-assignors-withoutpairedassignor">
          <div className="s-assignors-content-container">
            <div className="s-assignors-top-container">
              <div className="s-assignors-header-container">
                <span className="s-assignors-pair-a-new-assignor Headine1">
                  Assignors
                </span>
                <ButtonGrey
                  primaryText="Change assignor"
                  rootClassName="button-grey-root-class-name"
                ></ButtonGrey>
              </div>
              <div className="s-assignors-search">
                <span className="s-assignors-text">
                  <span>search assignors</span>
                </span>
                <div className="s-assignors-search-fields">
                  <div className="s-assignors-search-bar">
                    <img
                      alt="IconI481"
                      src="/external/iconi481-3g1i.svg"
                      className="s-assignors-icon"
                    />
                    <input
                      type="text"
                      placeholder="Search by location, sport and compensation"
                      className="s-assignors-textinput input"
                    />
                  </div>
                  <select className="s-assignors-select">
                    <option value="State" selected>
                      State
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
                  <select className="s-assignors-select1">
                    <option value="Location" selected>
                      Location
                    </option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 1">Option 1</option>
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
                  <select className="s-assignors-select2">
                    <option value="Sport" selected>
                      Sport
                    </option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="s-assignors-list-item">
              <div className="s-assignors-container1">
                <div className="s-assignors-container2">
                  <span className="s-assignors-text2">
                    <span>your paired assignor</span>
                    <br></br>
                  </span>
                  <div className="s-assignors-container3">
                    <AssignorItem rootClassName="assignor-item-root-class-name"></AssignorItem>
                  </div>
                </div>
                <div className="s-assignors-container4">
                  <span className="s-assignors-text5">
                    <span>your paired assignor</span>
                    <br></br>
                  </span>
                  <div className="s-assignors-container5">
                    <AssignorItem rootClassName="assignor-item-root-class-name1"></AssignorItem>
                    <AssignorItem rootClassName="assignor-item-root-class-name2"></AssignorItem>
                    <AssignorItem rootClassName="assignor-item-root-class-name5"></AssignorItem>
                    <AssignorItem rootClassName="assignor-item-root-class-name4"></AssignorItem>
                    <AssignorItem rootClassName="assignor-item-root-class-name3"></AssignorItem>
                  </div>
                </div>
              </div>
            </div>
            <div className="s-assignors-container6">
              <ButtonPrimary
                primaryText="Send Pairing Request"
                rootClassName="button-primary-root-class-name6"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .s-assignors-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .s-assignors-withoutpairedassignor {
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
          .s-assignors-content-container {
            gap: var(--dl-space-space-twounits);
            width: 1204px;
            display: flex;
            max-width: 980px;
            margin-top: 50px;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-assignors-top-container {
            gap: 40px;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .s-assignors-header-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: row;
            justify-content: space-between;
          }
          .s-assignors-pair-a-new-assignor {
            color: var(--dl-color-grey-grey800);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .s-assignors-search {
            gap: 12px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-assignors-text {
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
          .s-assignors-search-fields {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .s-assignors-search-bar {
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
          .s-assignors-icon {
            width: 16px;
            height: 16px;
          }
          .s-assignors-textinput {
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
          .s-assignors-select {
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
          .s-assignors-select1 {
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
          .s-assignors-select2 {
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
          .s-assignors-list-item {
            gap: 10px;
            width: 100%;
            height: 588px;
            display: flex;
            padding: 16px;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .s-assignors-container1 {
            gap: 10px;
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            overflow-y: scroll;
            align-items: flex-start;
            flex-direction: column;
          }
          .s-assignors-container2 {
            gap: 16px;
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .s-assignors-text2 {
            color: var(--dl-color-grey-grey800);
            font-size: 12px;
            font-style: normal;
            font-family: Inter;
            font-weight: 400px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .s-assignors-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .s-assignors-container4 {
            gap: 16px;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .s-assignors-text5 {
            color: var(--dl-color-grey-grey800);
            font-size: 12px;
            font-style: normal;
            font-family: Inter;
            font-weight: 400px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          .s-assignors-container5 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .s-assignors-container6 {
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

export default SOAssignors
