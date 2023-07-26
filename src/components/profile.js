import React from 'react'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <div className="profile-frame5991">
        <div className="profile-tabs-container">
          <div className="profile-tab">
            <span className="profile-text Body2">
              <span>About me</span>
            </span>
          </div>
          <div className="profile-tab1">
            <span className="profile-text02 Body2">
              <span>Payout Information</span>
            </span>
          </div>
        </div>
        <div className="profile-payout-stripe">
          <div className="profile-frame147">
            <span className="profile-text04 BodyLeadText">
              <span>
                Refr Sports partners with Stripe for secure financial services
              </span>
            </span>
            <span className="profile-text06 BodyMediumBaseText">
              <span>
                Add your bank to receive payouts. A payout is the transfer of
                founds from Stripe to your bank account. Link your account to
                seamlessly receive payouts.
              </span>
            </span>
          </div>
          <button className="profile-button">
            <span className="profile-text08 ButtonL">
              <span>Add payout option</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
