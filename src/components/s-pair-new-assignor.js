import React from 'react'

import './s-pair-new-assignor.css'

const SOPairNewAssignor = (props) => {
  return (
    <div className="s-pair-new-assignor-container">
      <div className="s-pair-new-assignor-pair-new-assignor">
        <div className="modalHeader">
          <div className="modalTitleRow">
            <span className="s-pair-new-assignor-pair-a-new-assignor Headine3">
              <span>Pair a new assignor</span>
            </span>
            <img
              alt="materialsymbolscloseI488"
              src="/external/materialsymbolsclosei488-klsg.svg"
              className="s-pair-new-assignor-materialsymbolsclose"
            />
          </div>
          <span className="s-pair-new-assignor-subtitle Body3 Subtitle1 subtitle-1">
            <span>
              Search and pair new assignors with your sport organization
            </span>
          </span>
        </div>
        <div className="modalBody">
          <div className="modalSearchAndFilters">
            <span className="s-pair-new-assignor-text2">
              <span>search assignors</span>
            </span>
            <div className="s-pair-new-assignor-search-bar">
              <img
                alt="IconI488"
                src="/external/iconi488-in3i.svg"
                className="s-pair-new-assignor-icon"
              />
              <input
                type="text"
                placeholder="Search"
                className="s-pair-new-assignor-textinput input"
              />
            </div>
            <div className="s-pair-new-assignor-filters">
              <span className="s-pair-new-assignor-filter-by">
                <span>Filter by:</span>
              </span>
              <div className="s-pair-new-assignor-sport-container">
                <select className="s-pair-new-assignor-sport">
                  <option value="Sport">Sport</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="s-pair-new-assignor-location-container">
                <select className="s-pair-new-assignor-location">
                  <option value="Location" selected>
                    Location
                  </option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modalAssignorResults">
            <div className="assignorResultSelected">
              <div className="resultInfoContainer">
                <div className="s-pair-new-assignor-avatar-name-role">
                  <div className="s-pair-new-assignor-avatar">
                    <img
                      alt="Ronald Richards"
                      src="/external/ellipse36i488-quhq-200h.png"
                      className="s-pair-new-assignor-user-avatar"
                    />
                  </div>
                  <div className="s-pair-new-assignor-name-and-role">
                    <span className="s-pair-new-assignor-name Subtitle1">
                      Ronald Richards
                    </span>
                    <span className="s-pair-new-assignor-role">
                      Hockey referee
                    </span>
                  </div>
                </div>
                <div className="s-pair-new-assignor-city">
                  <img
                    alt="image"
                    src="/mapicon.svg"
                    className="s-pair-new-assignor-icon1"
                  />
                  <span className="s-pair-new-assignor-city-name Subtitle2">
                    California
                  </span>
                </div>
              </div>
              <div className="resultCheck">
                <img
                  alt="IconI488"
                  src="/external/iconi488-bc1.svg"
                  className="s-pair-new-assignor-icon2"
                />
              </div>
            </div>
            <div className="assignorResultNormal">
              <div className="s-pair-new-assignor-result-info1 resultInfoContainer">
                <div className="s-pair-new-assignor-avatar-name-role1">
                  <div className="s-pair-new-assignor-avatar1">
                    <img
                      alt="Ronald Richards"
                      src="/external/ellipse36i488-quhq-200h.png"
                      className="s-pair-new-assignor-user-avatar1"
                    />
                  </div>
                  <div className="s-pair-new-assignor-name-and-role1">
                    <span className="s-pair-new-assignor-name1 Subtitle1">
                      Text
                    </span>
                    <span className="s-pair-new-assignor-role1">Text</span>
                  </div>
                </div>
                <div className="s-pair-new-assignor-city1">
                  <img
                    alt="image"
                    src="/mapicon.svg"
                    className="s-pair-new-assignor-icon3"
                  />
                  <span className="s-pair-new-assignor-city-name1 Subtitle2">
                    California
                  </span>
                </div>
              </div>
              <div className="s-pair-new-assignor-check1 resultCheck"></div>
            </div>
          </div>
        </div>
        <div className="modalFooter">
          <button className="s-pair-new-assignor-cancel-btn btnGreyText">
            <span className="s-pair-new-assignor-cancel ButtonL">
              <span>Cancel</span>
            </span>
          </button>
          <button className="s-pair-new-assignor-pair-btn btnPrimary">
            <span className="s-pair-new-assignor-pair-assignor ButtonL">
              <span>Pair assignor</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SOPairNewAssignor
