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
          <div className="pairFirstRow">
            <div className="headerContainer">
              <span className="s-without-paired-results-pair-a-new-assignor Headine1 page-title">
                <span>Pair a new assignor</span>
              </span>
              <span className="s-without-paired-results-subtitle Caption Subtitle1 subtitle-1">
                <span>
                  Search and pair an assignor with your sport organization
                </span>
              </span>
            </div>
            <div className="searchFieldsContainer">
              <span className="s-without-paired-results-text2 OverlineL overlineL">
                <span>search assignors</span>
              </span>
              <div className="s-without-paired-results-search-fields searchFields">
                <div className="s-without-paired-results-search-bar searchBar">
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
                <select className="s-without-paired-results-select sportFilter">
                  <option value="Sport" selected>
                    Sport
                  </option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 3">Option 3</option>
                </select>
                <select className="locationFilter">
                  <option value="Location" selected>
                    Location
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
                </select>
              </div>
            </div>
          </div>
          <div className="s-without-paired-results-list-item list-item">
            <div className="s-without-paired-results-container1 gameList-inner">
              <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name"></SOAssignorResultItem>
              <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name4"></SOAssignorResultItem>
              <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name3"></SOAssignorResultItem>
              <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name5"></SOAssignorResultItem>
              <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name2"></SOAssignorResultItem>
              <SOAssignorResultItem rootClassName="s-assignor-result-item-root-class-name1"></SOAssignorResultItem>
            </div>
          </div>
          <div className="s-without-paired-results-btn-container btnContainer">
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
