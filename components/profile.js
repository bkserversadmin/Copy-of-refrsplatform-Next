import React from 'react'

const Profile = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .profile-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .profile-frame5991 {
            gap: 48px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 32px;
            overflow: hidden;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: var(--dl-color-default-white);
          }
          .profile-tabs-container {
            gap: 16px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .profile-tab {
            gap: 10px;
            height: 48px;
            display: flex;
            padding: 17px 16px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            flex-direction: column;
            justify-content: center;
          }
          .profile-text {
            color: var(--dl-color-grey-grey600);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .profile-tab1 {
            gap: 10px;
            display: flex;
            padding: 17px 16px;
            align-items: center;
            border-radius: 8px;
            flex-direction: column;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .profile-text02 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 14px;
          }
          .profile-payout-stripe {
            gap: 200px;
            width: 100%;
            display: flex;
            padding: 32px;
            align-self: center;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(235, 235, 235, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            justify-content: flex-start;
            background-color: var(--dl-color-default-white);
          }
          .profile-frame147 {
            gap: 24px;
            width: 637px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .profile-text04 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 32px;
          }
          .profile-text06 {
            color: var(--dl-color-grey-grey700);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 18px;
          }
          .profile-button {
            gap: 12px;
            display: flex;
            padding: 14px 24px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-yellow-yellow400);
          }
          .profile-text08 {
            color: var(--dl-color-yellow-yellow900);
            height: auto;
            text-align: left;
            line-height: 16px;
          }
        `}
      </style>
    </>
  )
}

export default Profile
