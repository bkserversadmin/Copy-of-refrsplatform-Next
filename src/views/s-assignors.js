import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import ButtonGrey from '../components/button-grey'
import AssignorItem from '../components/assignor-item'
import './s-assignors.css'

const SOAssignors = (props) => {
  return (
    <div className="s-assignors-container">
      <Helmet>
        <title>SOAssignors - exported project</title>
        <meta property="og:title" content="SOAssignors - exported project" />
      </Helmet>
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
        </div>
      </div>
    </div>
  )
}

export default SOAssignors
