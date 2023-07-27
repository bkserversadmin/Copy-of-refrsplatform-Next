import React from 'react'

import './profile-payoutinfo.css'

const ProfilePayoutinfo = (props) => {
  return (
    <div className="profile-payoutinfo-container">
      <div className="profile-payoutinfo-frame5991">
        <div className="profile-payoutinfo-tabs-container">
          <div className="profile-payoutinfo-tab tabDefault">
            <span className="profile-payoutinfo-text Body2">
              <span>About me</span>
            </span>
          </div>
          <div className="profile-payoutinfo-tab1 tabActive">
            <span className="profile-payoutinfo-text02 Body2">
              <span>Payout Information</span>
            </span>
          </div>
        </div>
        <div className="profile-payoutinfo-payout-stripe">
          <div className="profile-payoutinfo-frame147">
            <span className="profile-payoutinfo-text04 BodyLeadText">
              <span>
                Refr Sports partners with Stripe for secure financial services
              </span>
            </span>
            <span className="profile-payoutinfo-text06 BodyMediumBaseText">
              <span>
                Add your bank to receive payouts. A payout is the transfer of
                founds from Stripe to your bank account. Link your account to
                seamlessly receive payouts.
              </span>
            </span>
          </div>
          <button className="profile-payoutinfo-button">
            <span className="profile-payoutinfo-text08 ButtonL">
              <span>Add payout option</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePayoutinfo
