import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import SOAssignorResultItem from '../components/s-assignor-result-item'
import ButtonYellow from '../components/button-yellow'
import './s-without-paired-results.css'

const SOWithoutPairedResults = (props) => {
  return (
    <div className="s-without-paired-results-container">
      <Helmet>
        <title>SOWithoutPairedResults - exported project</title>
        <meta
          property="og:title"
          content="SOWithoutPairedResults - exported project"
        />
      </Helmet>
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
            <ButtonYellow
              primaryText="Send Pairing Request"
              rootClassName="button-yellow-root-class-name5"
            ></ButtonYellow>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SOWithoutPairedResults
