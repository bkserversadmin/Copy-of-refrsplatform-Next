import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import EarningsIndicators from '../components/earnings-indicators'
import WeeksResumeListItem from '../components/weeks-resume-list-item'
import './s-payment-information.css'

const SOPaymentInformation = (props) => {
  return (
    <div className="s-payment-information-container">
      <Helmet>
        <title>SOPaymentInformation - exported project</title>
        <meta
          property="og:title"
          content="SOPaymentInformation - exported project"
        />
      </Helmet>
      <div className="s-payment-information-payments">
        <NavBar rootClassName="nav-bar-root-class-name14"></NavBar>
        <div className="s-payment-information-content-container">
          <div className="s-payment-information-inner-container">
            <span className="s-payment-information-text Headine1 page-title">
              Payments
            </span>
            <div className="s-payment-information-first-row paymentsRow">
              <div className="s-payment-information-balance-container balanceContainer">
                <span className="s-payment-information-text1 OverlineL overlineL">
                  Payments balance
                </span>
                <EarningsIndicators></EarningsIndicators>
              </div>
              <div className="monthBalance">
                <span className="s-payment-information-text2 OverlineL overlineL">
                  May balance
                </span>
                <div className="earningsChart"></div>
              </div>
            </div>
            <div className="s-payment-information-second-row paymentsRow">
              <div className="s-payment-information-week-payments-details paymentsDetailsContainer">
                <span className="s-payment-information-text3 OverlineL overlineL">
                  Weeks payments details
                </span>
                <div className="pamentsList">
                  <WeeksResumeListItem></WeeksResumeListItem>
                  <WeeksResumeListItem></WeeksResumeListItem>
                  <WeeksResumeListItem></WeeksResumeListItem>
                </div>
              </div>
              <div className="s-payment-information-forecasted-weeks">
                <span className="s-payment-information-text4 OverlineL overlineL">
                  Forecasted weeks spendings
                </span>
                <div className="forecastedCharts"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SOPaymentInformation
