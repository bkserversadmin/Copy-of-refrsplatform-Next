import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import './s-without-paired-assignor.css'

const SOWithoutPairedAssignor = (props) => {
  return (
    <div className="s-without-paired-assignor-container">
      <Helmet>
        <title>SOWithoutPairedAssignor - exported project</title>
        <meta
          property="og:title"
          content="SOWithoutPairedAssignor - exported project"
        />
      </Helmet>
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
  )
}

export default SOWithoutPairedAssignor
