import React, { useState } from 'react'

import PropTypes from 'prop-types'

const NotificationItem = (props) => {
  const [isNewCashout, setIsNewCashout] = useState(false)
  const [isNewAssignorDeclined, setIsNewAssignorDeclined] = useState(false)
  const [isInstantCashout, setIsInstantCashout] = useState(false)
  const [isNewAssignorPair, setIsNewAssignorPair] = useState(false)
  const [isNewRefereeDropped, setIsNewRefereeDropped] = useState(false)
  const [isGameCancelled, setIsGameCancelled] = useState(false)
  const [isGameStillNeedReferees, setIsGameStillNeedReferees] = useState(false)
  const [isAssignorRequestingPair, setIsAssignorRequestingPair] =
    useState(false)
  const [isAssignorDeclinedPairing, setIsAssignorDeclinedPairing] =
    useState(false)
  const [isRefereeDroppedGame, setIsRefereeDroppedGame] = useState(false)
  const [isPaymentInitiated, setIsPaymentInitiated] = useState(false)
  const [isSportOrgPairing, setIsSportOrgPairing] = useState(false)
  const [isNewPayment, setIsNewPayment] = useState(false)
  const [isGameAssigned, setIsGameAssigned] = useState(false)
  const [isGameMissingRefAlert, setIsGameMissingRefAlert] = useState(false)
  const [isNewOneDayLeft, setIsNewOneDayLeft] = useState(false)
  const [isJoinPoolRequest, setIsJoinPoolRequest] = useState(false)
  const [isNewSportOrgDeclained, setIsNewSportOrgDeclained] = useState(false)
  const [isNewGameMissing, setIsNewGameMissing] = useState(false)
  const [isGameNoPublishedYet, setIsGameNoPublishedYet] = useState(false)
  const [isAutoPaymentInit, setIsAutoPaymentInit] = useState(false)
  const [isNewAutoPaymentInit, setIsNewAutoPaymentInit] = useState(false)
  const [isNewAssignedGame, setIsNewAssignedGame] = useState(false)
  const [isNewGameWAllReferees, setIsNewGameWAllReferees] = useState(false)
  const [isJoinNew, setIsJoinNew] = useState(false)
  const [isSportOrgInviteDeclined, setIsSportOrgInviteDeclined] =
    useState(false)
  const [isOpenGame, setIsOpenGame] = useState(false)
  const [isNewRefInvitationDeclained, setIsNewRefInvitationDeclained] =
    useState(false)
  const [isRefereePickedUpGame, setIsRefereePickedUpGame] = useState(false)
  const [isRefereeRequest, setIsRefereeRequest] = useState(false)
  const [isNewStillNeedReferees, setIsNewStillNeedReferees] = useState(false)
  const [isNewOpenGame, setIsNewOpenGame] = useState(false)
  const [isNewAssignorInvitation, setIsNewAssignorInvitation] = useState(false)
  const [isNewRefRequest, setIsNewRefRequest] = useState(false)
  const [isGameWAllReferees, setIsGameWAllReferees] = useState(false)
  const [isGameOneDayLeft, setIsGameOneDayLeft] = useState(false)
  const [isNewGameCancelled, setIsNewGameCancelled] = useState(false)
  const [isNewPickedUp, setIsNewPickedUp] = useState(false)
  const [isNewNoPublished, setIsNewNoPublished] = useState(false)
  const [isRefereePoolDeclained, setIsRefereePoolDeclained] = useState(false)
  const [isAssignorInvitation, setIsAssignorInvitation] = useState(false)
  const [isJoinPoolRejected, setIsJoinPoolRejected] = useState(false)
  const [isNewSportOrgPairing, setIsNewSportOrgPairing] = useState(false)
  const [isNewPoolRejected, setIsNewPoolRejected] = useState(false)
  return (
    <>
      <div className="notification-item-container">
        {isPaymentInitiated && (
          <div className="notification-item-payment-initiated">
            {isNewPayment && (
              <div className="notification-item-payment-new">
                <div className="notification-item-left-container">
                  <div className="notification-item-icon-container">
                    <img
                      alt="IconI256"
                      src={props.paymentIcon}
                      className="notification-item-notification-icon"
                    />
                  </div>
                  <div className="notification-item-message-and-time">
                    <div className="notification-item-notification-message">
                      <span className="notification-item-payment-initiated-for">
                        Payment initiated for
                      </span>
                      <span className="notification-item-amount-value">
                        {props.paymentAmountValue}
                      </span>
                      <span className="notification-item-amount">amount.</span>
                    </div>
                    <span className="notification-item-notification-time Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator"></div>
              </div>
            )}
            {!isNewPayment && (
              <div className="notification-item-payment-old">
                <div className="notification-item-left-container01">
                  <div className="notification-item-icon-container01">
                    <img
                      alt="IconI256"
                      src={props.paymentIcon}
                      className="notification-item-notification-icon01"
                    />
                  </div>
                  <div className="notification-item-message-and-time01">
                    <div className="notification-item-notification-message01">
                      <span className="notification-item-payment-initiated-for01">
                        Payment initiated for
                      </span>
                      <span className="notification-item-amount-value1">
                        {props.paymentAmountValue}
                      </span>
                      <span className="notification-item-amount1">amount.</span>
                    </div>
                    <span className="notification-item-notification-time01 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isAutoPaymentInit && (
          <div className="notification-item-auto-payment-init">
            {isNewAutoPaymentInit && (
              <div className="notification-item-payment-new1">
                <div className="notification-item-left-container02">
                  <div className="notification-item-icon-container02">
                    <img
                      alt="IconI256"
                      src={props.paymentIcon}
                      className="notification-item-notification-icon02"
                    />
                  </div>
                  <div className="notification-item-message-and-time02">
                    <div className="notification-item-notification-message02">
                      <span className="notification-item-payment-initiated-for02">
                        An auto payment was initiated for
                      </span>
                      <span className="notification-item-amount-value2">
                        {props.paymentAmountValue}
                      </span>
                      <span className="notification-item-amount2">amount.</span>
                    </div>
                    <span className="notification-item-notification-time02 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator01"></div>
              </div>
            )}
            {!isNewAutoPaymentInit && (
              <div className="notification-item-payment-old1">
                <div className="notification-item-left-container03">
                  <div className="notification-item-icon-container03">
                    <img
                      alt="IconI256"
                      src={props.paymentIcon}
                      className="notification-item-notification-icon03"
                    />
                  </div>
                  <div className="notification-item-message-and-time03">
                    <div className="notification-item-notification-message03">
                      <span className="notification-item-payment-initiated-for03">
                        An auto payment was initiated for
                      </span>
                      <span className="notification-item-amount-value3">
                        {props.paymentAmountValue}
                      </span>
                      <span className="notification-item-amount3">amount.</span>
                    </div>
                    <span className="notification-item-notification-time03 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isInstantCashout && (
          <div className="notification-item-instant-cashout">
            {isNewCashout && (
              <div className="notification-item-cashout-new">
                <div className="notification-item-left-container04">
                  <div className="notification-item-icon-container04">
                    <img
                      alt="IconI256"
                      src={props.paymentIcon}
                      className="notification-item-notification-icon04"
                    />
                  </div>
                  <div className="notification-item-message-and-time04">
                    <div className="notification-item-notification-message04">
                      <span className="notification-item-funds-for-instant-cashout-have-been-sent">
                        Funds for instant cashout have been sent.
                      </span>
                    </div>
                    <span className="notification-item-notification-time04 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator02"></div>
              </div>
            )}
            {!isNewCashout && (
              <div className="notification-item-cashout-old">
                <div className="notification-item-left-container05">
                  <div className="notification-item-icon-container05">
                    <img
                      alt="IconI256"
                      src={props.paymentIcon}
                      className="notification-item-notification-icon05"
                    />
                  </div>
                  <div className="notification-item-message-and-time05">
                    <div className="notification-item-notification-message05">
                      <span className="notification-item-funds-for-instant-cashout-have-been-sent1">
                        Funds for instant cashout have been sent.
                      </span>
                    </div>
                    <span className="notification-item-notification-time05 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isGameAssigned && (
          <div className="notification-item-game-assigned">
            {isNewAssignedGame && (
              <div className="notification-item-assigned-new">
                <div className="notification-item-left-container06">
                  <div className="notification-item-icon-container06">
                    <img
                      alt="IconI256"
                      src={props.gameIcon}
                      className="notification-item-notification-icon06"
                    />
                  </div>
                  <div className="notification-item-message-and-time06">
                    <div className="notification-item-notification-message06">
                      <span className="notification-item-payment-initiated-for04">
                        You&apos;ve been assigned a new game.
                      </span>
                    </div>
                    <span className="notification-item-notification-time06 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator03"></div>
              </div>
            )}
            {!isNewAssignedGame && (
              <div className="notification-item-assigned-old">
                <div className="notification-item-left-container07">
                  <div className="notification-item-icon-container07">
                    <img
                      alt="IconI256"
                      src={props.gameIcon}
                      className="notification-item-notification-icon07"
                    />
                  </div>
                  <div className="notification-item-message-and-time07">
                    <div className="notification-item-notification-message07">
                      <span className="notification-item-payment-initiated-for05">
                        You&apos;ve been assigned a new game.
                      </span>
                    </div>
                    <span className="notification-item-notification-time07 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isRefereePickedUpGame && (
          <div className="notification-item-referee-picked-up-game">
            {isNewPickedUp && (
              <div className="notification-item-new">
                <div className="notification-item-left-container08">
                  <div className="notification-item-icon-container08">
                    <img
                      alt="IconI256"
                      src={props.gameIcon}
                      className="notification-item-notification-icon08"
                    />
                  </div>
                  <div className="notification-item-message-and-time08">
                    <div className="notification-item-notification-message08">
                      <span className="notification-item-a-referee-has-picked-up-the">
                        A referee has picked up the
                      </span>
                      <span className="notification-item-a-referee-has-picked-up-the1">
                        {props.gameName}
                      </span>
                      <span className="notification-item-a-referee-has-picked-up-the2">
                        game.
                      </span>
                    </div>
                    <span className="notification-item-notification-time08 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator04"></div>
              </div>
            )}
            {!isNewPickedUp && (
              <div className="notification-item-old">
                <div className="notification-item-left-container09">
                  <div className="notification-item-icon-container09">
                    <img
                      alt="IconI256"
                      src={props.gameIcon}
                      className="notification-item-notification-icon09"
                    />
                  </div>
                  <div className="notification-item-message-and-time09">
                    <div className="notification-item-notification-message09">
                      <span className="notification-item-a-referee-has-picked-up-the3">
                        A referee has picked up the
                      </span>
                      <span className="notification-item-a-referee-has-picked-up-the4">
                        [Game name]
                      </span>
                      <span className="notification-item-a-referee-has-picked-up-the5">
                        game.
                      </span>
                    </div>
                    <span className="notification-item-notification-time09 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isSportOrgPairing && (
          <div className="notification-item-sport-organization-pairing">
            {isNewSportOrgPairing && (
              <div className="notification-item-request-new">
                <div className="notification-item-left-container10">
                  <div className="notification-item-icon-container10">
                    <img
                      alt="IconI256"
                      src={props.sportOrgIcon}
                      className="notification-item-notification-icon10"
                    />
                  </div>
                  <div className="notification-item-message-and-time10">
                    <div className="notification-item-notification-message10">
                      <span className="notification-item-payment-initiated-for06">
                        A sports organization has requested to pair with you.
                      </span>
                    </div>
                    <span className="notification-item-notification-time10 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator05"></div>
              </div>
            )}
            {!isNewSportOrgPairing && (
              <div className="notification-item-request-old">
                <div className="notification-item-left-container11">
                  <div className="notification-item-icon-container11">
                    <img
                      alt="IconI256"
                      src={props.sportOrgIcon}
                      className="notification-item-notification-icon11"
                    />
                  </div>
                  <div className="notification-item-message-and-time11">
                    <div className="notification-item-notification-message11">
                      <span className="notification-item-payment-initiated-for07">
                        A sports organization has requested to pair with you.
                      </span>
                    </div>
                    <span className="notification-item-notification-time11 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isAssignorInvitation && (
          <div className="notification-item-assignor-invitation">
            {isNewAssignorInvitation && (
              <div className="notification-item-invitation-new">
                <div className="notification-item-left-container12">
                  <div className="notification-item-icon-container12">
                    <img
                      alt="IconI256"
                      src={props.assignorIcon}
                      className="notification-item-notification-icon12"
                    />
                  </div>
                  <div className="notification-item-message-and-time12">
                    <div className="notification-item-notification-message12">
                      <span className="notification-item-payment-initiated-for08">
                        Assignor wants you to join their referee pool.
                      </span>
                    </div>
                    <span className="notification-item-notification-time12 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator06"></div>
              </div>
            )}
            {!isNewAssignorInvitation && (
              <div className="notification-item-invitation-old">
                <div className="notification-item-left-container13">
                  <div className="notification-item-icon-container13">
                    <img
                      alt="IconI256"
                      src={props.assignorIcon}
                      className="notification-item-notification-icon13"
                    />
                  </div>
                  <div className="notification-item-message-and-time13">
                    <div className="notification-item-notification-message13">
                      <span className="notification-item-payment-initiated-for09">
                        Assignor wants you to join their referee pool.
                      </span>
                    </div>
                    <span className="notification-item-notification-time13 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isGameWAllReferees && (
          <div className="notification-item-game--all-referees">
            {isNewGameWAllReferees && (
              <div className="notification-item-new1">
                <div className="notification-item-left-container14">
                  <div className="notification-item-icon-container14">
                    <img
                      alt="IconI256"
                      src={props.assignorIcon}
                      className="notification-item-notification-icon14"
                    />
                  </div>
                  <div className="notification-item-message-and-time14">
                    <div className="notification-item-notification-message14">
                      <span className="notification-item-game-name">
                        [Game name]
                      </span>
                      <span className="notification-item-payment-initiated-for10">
                        game in 24 hours has all the needed referees.
                      </span>
                    </div>
                    <span className="notification-item-notification-time14 Caption">
                      1 day ago
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator07"></div>
              </div>
            )}
            {!isNewGameWAllReferees && (
              <div className="notification-item-old1">
                <div className="notification-item-left-container15">
                  <div className="notification-item-icon-container15">
                    <img
                      alt="IconI256"
                      src={props.assignorIcon}
                      className="notification-item-notification-icon15"
                    />
                  </div>
                  <div className="notification-item-message-and-time15">
                    <div className="notification-item-notification-message15">
                      <span className="notification-item-game-name1">
                        [Game name]
                      </span>
                      <span className="notification-item-payment-initiated-for11">
                        game in 24 hours has all the needed referees.
                      </span>
                    </div>
                    <span className="notification-item-notification-time15 Caption">
                      1 day ago
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isJoinPoolRequest && (
          <div className="notification-item-join-pool-request">
            {isJoinNew && (
              <div className="notification-item-request-new1">
                <div className="notification-item-left-container16">
                  <div className="notification-item-icon-container16">
                    <img
                      alt="IconI256"
                      src={props.assignorIcon}
                      className="notification-item-notification-icon16"
                    />
                  </div>
                  <div className="notification-item-message-and-time16">
                    <div className="notification-item-notification-message16">
                      <span className="notification-item-payment-initiated-for12">
                        Your request to join the referee pool has been accepted.
                      </span>
                    </div>
                    <span className="notification-item-notification-time16 Caption">
                      1 day ago
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator08"></div>
              </div>
            )}
            {!isJoinNew && (
              <div className="notification-item-request-old1">
                <div className="notification-item-left-container17">
                  <div className="notification-item-icon-container17">
                    <img
                      alt="IconI256"
                      src={props.assignorIcon}
                      className="notification-item-notification-icon17"
                    />
                  </div>
                  <div className="notification-item-message-and-time17">
                    <div className="notification-item-notification-message17">
                      <span className="notification-item-payment-initiated-for13">
                        Your request to join the referee pool has been accepted.
                      </span>
                    </div>
                    <span className="notification-item-notification-time17 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isRefereeRequest && (
          <div className="notification-item-referee-request-join-pool">
            {isNewRefRequest && (
              <div className="notification-item-request-new2">
                <div className="notification-item-left-container18">
                  <div className="notification-item-icon-container18">
                    <img
                      alt="IconI256"
                      src={props.refereeIcon}
                      className="notification-item-notification-icon18"
                    />
                  </div>
                  <div className="notification-item-message-and-time18">
                    <div className="notification-item-notification-message18">
                      <span className="notification-item-payment-initiated-for14">
                        A referee has requested to join your pool.
                      </span>
                    </div>
                    <span className="notification-item-notification-time18 Caption">
                      1 day ago
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator09"></div>
              </div>
            )}
            {!isNewRefRequest && (
              <div className="notification-item-request-old2">
                <div className="notification-item-left-container19">
                  <div className="notification-item-icon-container19">
                    <img
                      alt="IconI256"
                      src={props.refereeIcon}
                      className="notification-item-notification-icon19"
                    />
                  </div>
                  <div className="notification-item-message-and-time19">
                    <div className="notification-item-notification-message19">
                      <span className="notification-item-payment-initiated-for15">
                        A referee has requested to join your pool.
                      </span>
                    </div>
                    <span className="notification-item-notification-time19 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isJoinPoolRejected && (
          <div className="notification-item-join-pool-rejected">
            {isNewPoolRejected && (
              <div className="notification-item-rejected-new">
                <div className="notification-item-left-container20">
                  <div className="notification-item-icon-container20">
                    <img
                      alt={props.declinedAssignorAlt}
                      src={props.declinedAssignor}
                      className="notification-item-notification-icon20"
                    />
                  </div>
                  <div className="notification-item-message-and-time20">
                    <div className="notification-item-notification-message20">
                      <span className="notification-item-your-request-to-join">
                        Your request to join the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="notification-item-assignor-name">
                        {props.assignorName}
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined">
                        referee pool has been declined.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="notification-item-notification-time20 Caption">
                      1 day ago
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon"
                />
              </div>
            )}
            {!isNewPoolRejected && (
              <div className="notification-item-rejected-old">
                <div className="notification-item-left-container21">
                  <div className="notification-item-icon-container21">
                    <img
                      alt={props.declinedAssignorAlt}
                      src={props.declinedAssignor}
                      className="notification-item-notification-icon21"
                    />
                  </div>
                  <div className="notification-item-message-and-time21">
                    <div className="notification-item-notification-message21">
                      <span className="notification-item-your-request-to-join1">
                        Your request to join the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="notification-item-assignor-name1">
                        [assignor name]
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined01">
                        referee pool has been declined.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                    <span className="notification-item-notification-time21 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon01"
                />
              </div>
            )}
          </div>
        )}
        {isGameStillNeedReferees && (
          <div className="notification-item-game-still-need-referees">
            {isNewStillNeedReferees && (
              <div className="notification-item-new2">
                <div className="notification-item-left-container22">
                  <div className="notification-item-icon-container22">
                    <img
                      alt="Assignor decline"
                      src={props.refereeCancelledIcon}
                      className="notification-item-notification-icon22"
                    />
                  </div>
                  <div className="notification-item-message-and-time22">
                    <div className="notification-item-notification-message22">
                      <span className="notification-item-assignor-name2">
                        {props.gameName}
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined02">
                        game in 24 hours
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined03">
                        does not have all the needed referees.
                      </span>
                    </div>
                    <span className="notification-item-notification-time22 Caption">
                      1 day ago
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon02"
                />
              </div>
            )}
            {!isNewStillNeedReferees && (
              <div className="notification-item-old2">
                <div className="notification-item-left-container23">
                  <div className="notification-item-icon-container23">
                    <img
                      alt="Assignor decline"
                      src={props.refereeCancelledIcon}
                      className="notification-item-notification-icon23"
                    />
                  </div>
                  <div className="notification-item-message-and-time23">
                    <div className="notification-item-notification-message23">
                      <span className="notification-item-assignor-name3">
                        [Game name]
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined04">
                        game in 24 hours
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined05">
                        does not have all the needed referees.
                      </span>
                    </div>
                    <span className="notification-item-notification-time23 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon03"
                />
              </div>
            )}
          </div>
        )}
        {isSportOrgInviteDeclined && (
          <div className="notification-item-sport-org-invite-declained">
            {isNewSportOrgDeclained && (
              <div className="notification-item-invite-new">
                <div className="notification-item-left-container24">
                  <div className="notification-item-icon-container24">
                    <img
                      alt="Assignor decline"
                      src={props.sportOrgDeclained}
                      className="notification-item-notification-icon24"
                    />
                  </div>
                  <div className="notification-item-message-and-time24">
                    <div className="notification-item-notification-message24">
                      <span className="notification-item-assignor-name4">
                        {props.sportOrgName}
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined06">
                        has declined your
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined07">
                        invitation to pair with you.
                      </span>
                    </div>
                    <span className="notification-item-notification-time24 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon04"
                />
              </div>
            )}
            {!isNewSportOrgDeclained && (
              <div className="notification-item-invite-old">
                <div className="notification-item-left-container25">
                  <div className="notification-item-icon-container25">
                    <img
                      alt="Assignor decline"
                      src={props.sportOrgDeclained}
                      className="notification-item-notification-icon25"
                    />
                  </div>
                  <div className="notification-item-message-and-time25">
                    <div className="notification-item-notification-message25">
                      <span className="notification-item-assignor-name5">
                        [assignor name]
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined08">
                        has declined your
                      </span>
                      <span className="notification-item-referee-pool-has-been-declined09">
                        invitation to pair with you.
                      </span>
                    </div>
                    <span className="notification-item-notification-time25 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon05"
                />
              </div>
            )}
          </div>
        )}
        {isOpenGame && (
          <div className="notification-item-open-game">
            {isNewOpenGame && (
              <div className="notification-item-open-game-new">
                <div className="notification-item-left-container26">
                  <div className="notification-item-icon-container26">
                    <img
                      alt="IconI256"
                      src={props.gameIcon}
                      className="notification-item-notification-icon26"
                    />
                  </div>
                  <div className="notification-item-message-and-time26">
                    <div className="notification-item-notification-message26">
                      <span className="notification-item-payment-initiated-for16">
                        A new open game is available. Join now!
                      </span>
                    </div>
                    <span className="notification-item-notification-time26 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator10"></div>
              </div>
            )}
            {!isNewOpenGame && (
              <div className="notification-item-open-game-old">
                <div className="notification-item-left-container27">
                  <div className="notification-item-icon-container27">
                    <img
                      alt="IconI256"
                      src={props.gameIcon}
                      className="notification-item-notification-icon27"
                    />
                  </div>
                  <div className="notification-item-message-and-time27">
                    <div className="notification-item-notification-message27">
                      <span className="notification-item-payment-initiated-for17">
                        A new open game is available. Join now!
                      </span>
                    </div>
                    <span className="notification-item-notification-time27 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isAssignorRequestingPair && (
          <div className="notification-item-assignor-requesting-pair">
            {isNewAssignorPair && (
              <div className="notification-item-new3">
                <div className="notification-item-left-container28">
                  <div className="notification-item-icon-container28">
                    <img
                      alt="IconI256"
                      src={props.userPlusIcon}
                      className="notification-item-notification-icon28"
                    />
                  </div>
                  <div className="notification-item-message-and-time28">
                    <div className="notification-item-notification-message28">
                      <span className="notification-item-payment-initiated-for18">
                        An assignor is requesting to pair with you.
                      </span>
                    </div>
                    <span className="notification-item-notification-time28 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <div className="notification-item-new-indicator11"></div>
              </div>
            )}
            {!isNewAssignorPair && (
              <div className="notification-item-old3">
                <div className="notification-item-left-container29">
                  <div className="notification-item-icon-container29">
                    <img
                      alt="IconI256"
                      src={props.userPlusIcon}
                      className="notification-item-notification-icon29"
                    />
                  </div>
                  <div className="notification-item-message-and-time29">
                    <div className="notification-item-notification-message29">
                      <span className="notification-item-payment-initiated-for19">
                        An assignor is requesting to pair with you.
                      </span>
                    </div>
                    <span className="notification-item-notification-time29 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {isAssignorDeclinedPairing && (
          <div className="notification-item-assignor-declined-pairing">
            {isNewAssignorDeclined && (
              <div className="notification-item-new4">
                <div className="notification-item-left-container30">
                  <div className="notification-item-icon-container30">
                    <img
                      alt="IconI256"
                      src={props.redUserPlus}
                      className="notification-item-notification-icon30"
                    />
                  </div>
                  <div className="notification-item-message-and-time30">
                    <div className="notification-item-notification-message30">
                      <span className="notification-item-payment-initiated-for20">
                        An assignor declined your request to pair.
                      </span>
                    </div>
                    <span className="notification-item-notification-time30 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon06"
                />
              </div>
            )}
            {!isNewAssignorDeclined && (
              <div className="notification-item-old4">
                <div className="notification-item-left-container31">
                  <div className="notification-item-icon-container31">
                    <img
                      alt="IconI256"
                      src={props.redUserPlus}
                      className="notification-item-notification-icon31"
                    />
                  </div>
                  <div className="notification-item-message-and-time31">
                    <div className="notification-item-notification-message31">
                      <span className="notification-item-payment-initiated-for21">
                        An assignor declined your request to pair.
                      </span>
                    </div>
                    <span className="notification-item-notification-time31 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/redalert.svg"
                  className="notification-item-error-icon07"
                />
              </div>
            )}
          </div>
        )}
        {isGameCancelled && (
          <div className="notification-item-game-cancelled">
            {isNewGameCancelled && (
              <div className="notification-item-cancelled-new">
                <div className="notification-item-left-container32">
                  <div className="notification-item-icon-container32">
                    <img
                      alt="IconI256"
                      src={props.gameCancelledIcon}
                      className="notification-item-notification-icon32"
                    />
                  </div>
                  <div className="notification-item-message-and-time32">
                    <div className="notification-item-notification-message32">
                      <span className="notification-item-sorry-the-game">
                        Sorry, the game
                      </span>
                      <span className="notification-item-game-name">
                        {props.gameCancelledName}
                      </span>
                      <span className="notification-item-has-been">
                        has been
                      </span>
                      <span className="notification-item-cancelled-or-deleted">
                        cancelled or deleted.
                      </span>
                    </div>
                    <span className="notification-item-notification-time32 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon08"
                />
              </div>
            )}
            {!isNewGameCancelled && (
              <div className="notification-item-cancelled-old">
                <div className="notification-item-left-container33">
                  <div className="notification-item-icon-container33">
                    <img
                      alt="IconI256"
                      src={props.gameCancelledIcon}
                      className="notification-item-notification-icon33"
                    />
                  </div>
                  <div className="notification-item-message-and-time33">
                    <div className="notification-item-notification-message33">
                      <span className="notification-item-sorry-the-game01">
                        Sorry, the game
                      </span>
                      <span className="notification-item-game-name1">
                        {props.gameCancelledName}
                      </span>
                      <span className="notification-item-has-been1">
                        has been
                      </span>
                      <span className="notification-item-cancelled-or-deleted1">
                        cancelled or deleted.
                      </span>
                    </div>
                    <span className="notification-item-notification-time33 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon09"
                />
              </div>
            )}
          </div>
        )}
        {isGameOneDayLeft && (
          <div className="notification-item-game-one-day-alert">
            {isNewOneDayLeft && (
              <div className="notification-item-one-day-new">
                <div className="notification-item-left-container34">
                  <div className="notification-item-icon-container34">
                    <img
                      alt="IconI256"
                      src={props.gameCancelledIcon}
                      className="notification-item-notification-icon34"
                    />
                  </div>
                  <div className="notification-item-message-and-time34">
                    <div className="notification-item-notification-message34">
                      <span className="notification-item-sorry-the-game02">
                        There is a game scheduled in 1 day that hasn&apos;t been
                        published yet.
                      </span>
                    </div>
                    <span className="notification-item-notification-time34 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon10"
                />
              </div>
            )}
            {!isNewOneDayLeft && (
              <div className="notification-item-one-day-old">
                <div className="notification-item-left-container35">
                  <div className="notification-item-icon-container35">
                    <img
                      alt="IconI256"
                      src={props.gameCancelledIcon}
                      className="notification-item-notification-icon35"
                    />
                  </div>
                  <div className="notification-item-message-and-time35">
                    <div className="notification-item-notification-message35">
                      <span className="notification-item-sorry-the-game03">
                        There is a game scheduled in 1 day that hasn&apos;t been
                        published yet.
                      </span>
                    </div>
                    <span className="notification-item-notification-time35 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon11"
                />
              </div>
            )}
          </div>
        )}
        {isRefereePoolDeclained && (
          <div className="notification-item-referee-invitation-declained">
            {isNewRefInvitationDeclained && (
              <div className="notification-item-declained-new">
                <div className="notification-item-left-container36">
                  <div className="notification-item-icon-container36">
                    <img
                      alt="IconI256"
                      src={props.refereeCancelledIcon}
                      className="notification-item-notification-icon36"
                    />
                  </div>
                  <div className="notification-item-message-and-time36">
                    <div className="notification-item-notification-message36">
                      <span className="notification-item-sorry-the-game04">
                        The referee
                      </span>
                      <span className="notification-item-game-name2">
                        {props.refereeName}
                      </span>
                      <span className="notification-item-has-been2">
                        has declined
                      </span>
                      <span className="notification-item-cancelled-or-deleted2">
                        your invitation to join your pool.
                      </span>
                    </div>
                    <span className="notification-item-notification-time36 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon12"
                />
              </div>
            )}
            {!isNewRefInvitationDeclained && (
              <div className="notification-item-declained-old">
                <div className="notification-item-left-container37">
                  <div className="notification-item-icon-container37">
                    <img
                      alt="IconI256"
                      src={props.refereeCancelledIcon}
                      className="notification-item-notification-icon37"
                    />
                  </div>
                  <div className="notification-item-message-and-time37">
                    <div className="notification-item-notification-message37">
                      <span className="notification-item-sorry-the-game05">
                        The referee
                      </span>
                      <span className="notification-item-game-name3">
                        {props.refereeName}
                      </span>
                      <span className="notification-item-has-been3">
                        has declined
                      </span>
                      <span className="notification-item-cancelled-or-deleted3">
                        your invitation to join your pool.
                      </span>
                    </div>
                    <span className="notification-item-notification-time37 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon13"
                />
              </div>
            )}
          </div>
        )}
        {isRefereeDroppedGame && (
          <div className="notification-item-referee-dropped-game">
            {isNewRefereeDropped && (
              <div className="notification-item-new5">
                <div className="notification-item-left-container38">
                  <div className="notification-item-icon-container38">
                    <img
                      alt="IconI256"
                      src={props.gameCancelledIcon}
                      className="notification-item-notification-icon38"
                    />
                  </div>
                  <div className="notification-item-message-and-time38">
                    <div className="notification-item-notification-message38">
                      <span className="notification-item-sorry-the-game06">
                        Unfortunately, a referee has dropped the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="notification-item-game-name4">
                        {props.gameName}
                      </span>
                      <span className="notification-item-has-been4">game.</span>
                    </div>
                    <span className="notification-item-notification-time38 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon14"
                />
              </div>
            )}
            {!isNewRefereeDropped && (
              <div className="notification-item-old5">
                <div className="notification-item-left-container39">
                  <div className="notification-item-icon-container39">
                    <img
                      alt="IconI256"
                      src={props.gameCancelledIcon}
                      className="notification-item-notification-icon39"
                    />
                  </div>
                  <div className="notification-item-message-and-time39">
                    <div className="notification-item-notification-message39">
                      <span className="notification-item-sorry-the-game07">
                        Unfortunately, a referee has dropped the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="notification-item-game-name5">
                        {props.gameName}
                      </span>
                      <span className="notification-item-has-been5">game.</span>
                    </div>
                    <span className="notification-item-notification-time39 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/error.svg"
                  className="notification-item-error-icon15"
                />
              </div>
            )}
          </div>
        )}
        {isGameMissingRefAlert && (
          <div className="notification-item-game-missing-ref-alert">
            {isNewGameMissing && (
              <div className="notification-item-missing-new">
                <div className="notification-item-left-container40">
                  <div className="notification-item-icon-container40">
                    <img
                      alt="IconI256"
                      src={props.gameYellowAlertIcon}
                      className="notification-item-notification-icon40"
                    />
                  </div>
                  <div className="notification-item-message-and-time40">
                    <div className="notification-item-notification-message40">
                      <span className="notification-item-sorry-the-game08">
                        A game scheduled in 24 hours is still missing a referee.
                      </span>
                    </div>
                    <span className="notification-item-notification-time40 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/yellowalert.svg"
                  className="notification-item-error-icon16"
                />
              </div>
            )}
            {!isNewGameMissing && (
              <div className="notification-item-missing-old">
                <div className="notification-item-left-container41">
                  <div className="notification-item-icon-container41">
                    <img
                      alt="IconI256"
                      src={props.gameYellowAlertIcon}
                      className="notification-item-notification-icon41"
                    />
                  </div>
                  <div className="notification-item-message-and-time41">
                    <div className="notification-item-notification-message41">
                      <span className="notification-item-sorry-the-game09">
                        A game scheduled in 24 hours is still missing a referee.
                      </span>
                    </div>
                    <span className="notification-item-notification-time41 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/yellowalert.svg"
                  className="notification-item-error-icon17"
                />
              </div>
            )}
          </div>
        )}
        {isGameNoPublishedYet && (
          <div className="notification-item-game-no-published-alert">
            {isNewNoPublished && (
              <div className="notification-item-no-published-new">
                <div className="notification-item-left-container42">
                  <div className="notification-item-icon-container42">
                    <img
                      alt="IconI256"
                      src={props.gameYellowAlertIcon}
                      className="notification-item-notification-icon42"
                    />
                  </div>
                  <div className="notification-item-message-and-time42">
                    <div className="notification-item-notification-message42">
                      <span className="notification-item-sorry-the-game10">
                        There is a game scheduled in 7 days that
                        hasn&apos;t been published yet.
                      </span>
                    </div>
                    <span className="notification-item-notification-time42 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/yellowalert.svg"
                  className="notification-item-error-icon18"
                />
              </div>
            )}
            {!isNewNoPublished && (
              <div className="notification-item-no-published-old">
                <div className="notification-item-left-container43">
                  <div className="notification-item-icon-container43">
                    <img
                      alt="IconI256"
                      src={props.gameYellowAlertIcon}
                      className="notification-item-notification-icon43"
                    />
                  </div>
                  <div className="notification-item-message-and-time43">
                    <div className="notification-item-notification-message43">
                      <span className="notification-item-sorry-the-game11">
                        There is a game scheduled in 7 days that
                        hasn&apos;t been published yet.
                      </span>
                    </div>
                    <span className="notification-item-notification-time43 Caption">
                      {props.notificationTime}
                    </span>
                  </div>
                </div>
                <img
                  alt="image"
                  src="/Notifications/yellowalert.svg"
                  className="notification-item-error-icon19"
                />
              </div>
            )}
          </div>
        )}
      </div>
      <style jsx>
        {`
          .notification-item-container {
            width: 500px;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-payment-initiated {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-payment-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-amount-value {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-amount {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-payment-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .notification-item-left-container01 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container01 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon01 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time01 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message01 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for01 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-amount-value1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-amount1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time01 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-auto-payment-init {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-payment-new1 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container02 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container02 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon02 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time02 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message02 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for02 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-amount-value2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-amount2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time02 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator01 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-payment-old1 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .notification-item-left-container03 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container03 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon03 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time03 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message03 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for03 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-amount-value3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-amount3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time03 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-instant-cashout {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-cashout-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container04 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container04 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon04 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time04 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message04 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-funds-for-instant-cashout-have-been-sent {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time04 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator02 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-cashout-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-default-white);
          }
          .notification-item-left-container05 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container05 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon05 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time05 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message05 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-funds-for-instant-cashout-have-been-sent1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time05 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-game-assigned {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-assigned-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container06 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container06 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon06 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time06 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message06 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for04 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time06 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator03 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-assigned-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container07 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container07 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon07 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time07 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message07 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for05 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time07 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-referee-picked-up-game {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container08 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container08 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon08 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time08 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message08 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-a-referee-has-picked-up-the {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-a-referee-has-picked-up-the1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-a-referee-has-picked-up-the2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time08 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator04 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container09 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container09 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon09 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time09 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message09 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-a-referee-has-picked-up-the3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-a-referee-has-picked-up-the4 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-a-referee-has-picked-up-the5 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time09 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-sport-organization-pairing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-request-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container10 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container10 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon10 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time10 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message10 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for06 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time10 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator05 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-request-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container11 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container11 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon11 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time11 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message11 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for07 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time11 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-assignor-invitation {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-invitation-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container12 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container12 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon12 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time12 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message12 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for08 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time12 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator06 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-invitation-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container13 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container13 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon13 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time13 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message13 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for09 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time13 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-game--all-referees {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-new1 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container14 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container14 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon14 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time14 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message14 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-game-name {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-payment-initiated-for10 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time14 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator07 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-old1 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container15 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container15 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon15 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time15 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message15 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-game-name1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-payment-initiated-for11 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time15 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-join-pool-request {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-request-new1 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container16 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container16 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon16 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time16 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message16 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for12 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time16 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator08 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-request-old1 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container17 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container17 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon17 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time17 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message17 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for13 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time17 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-referee-request-join-pool {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-request-new2 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container18 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container18 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon18 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time18 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message18 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for14 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time18 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator09 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-request-old2 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container19 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container19 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon19 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time19 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message19 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for15 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time19 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-join-pool-rejected {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-rejected-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-right: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container20 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container20 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon20 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time20 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message20 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-your-request-to-join {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-assignor-name {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time20 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-rejected-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container21 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container21 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon21 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time21 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message21 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-your-request-to-join1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-assignor-name1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined01 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time21 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon01 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-game-still-need-referees {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-new2 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-right: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container22 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container22 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon22 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time22 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message22 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-assignor-name2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined02 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined03 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time22 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon02 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-old2 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container23 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container23 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon23 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time23 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message23 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-assignor-name3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined04 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined05 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time23 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon03 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-sport-org-invite-declained {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-invite-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-right: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container24 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container24 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon24 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time24 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message24 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-assignor-name4 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined06 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined07 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time24 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon04 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-invite-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container25 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container25 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon25 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time25 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message25 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-assignor-name5 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined08 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-referee-pool-has-been-declined09 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time25 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon05 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-open-game {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-open-game-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container26 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container26 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon26 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time26 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message26 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for16 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time26 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator10 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-open-game-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container27 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container27 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon27 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time27 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message27 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for17 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time27 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-assignor-requesting-pair {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-new3 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-bluegreen-bluegreen50);
          }
          .notification-item-left-container28 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container28 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon28 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time28 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message28 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for18 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time28 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-new-indicator11 {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-bluegreen-bluegreen600);
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
          }
          .notification-item-old3 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container29 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container29 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-bluegreen-bluegreen100);
          }
          .notification-item-notification-icon29 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time29 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message29 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for19 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time29 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-assignor-declined-pairing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-new4 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: #fff6f4;
          }
          .notification-item-left-container30 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container30 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon30 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time30 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message30 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for20 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time30 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon06 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-old4 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container31 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container31 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon31 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time31 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message31 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
          }
          .notification-item-payment-initiated-for21 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time31 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon07 {
            width: 20px;
            object-fit: cover;
          }
          .notification-item-game-cancelled {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-cancelled-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container32 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container32 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon32 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time32 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message32 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-game-name {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-has-been {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-cancelled-or-deleted {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time32 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon08 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-cancelled-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container33 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container33 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon33 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time33 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message33 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game01 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-game-name1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-has-been1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-cancelled-or-deleted1 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time33 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon09 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-game-one-day-alert {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-one-day-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container34 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container34 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon34 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time34 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message34 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game02 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time34 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon10 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-one-day-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container35 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container35 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon35 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time35 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message35 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game03 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time35 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon11 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-referee-invitation-declained {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-declained-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container36 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container36 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon36 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time36 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message36 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game04 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-game-name2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-has-been2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-cancelled-or-deleted2 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time36 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon12 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-declained-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container37 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container37 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon37 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time37 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message37 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game05 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-game-name3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-has-been3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-cancelled-or-deleted3 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time37 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon13 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-referee-dropped-game {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-new5 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: #fff6f4;
          }
          .notification-item-left-container38 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container38 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon38 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time38 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message38 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game06 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-game-name4 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-has-been4 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time38 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon14 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-old5 {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container39 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container39 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-system-error200);
          }
          .notification-item-notification-icon39 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time39 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message39 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game07 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-game-name5 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            font-style: normal;
            text-align: left;
            font-weight: 600;
            line-height: 14px;
          }
          .notification-item-has-been5 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time39 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon15 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-game-missing-ref-alert {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-missing-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-yellow-yellow100);
          }
          .notification-item-left-container40 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container40 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-yellow-yellow200);
          }
          .notification-item-notification-icon40 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time40 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message40 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game08 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time40 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon16 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-missing-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container41 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container41 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-yellow-yellow200);
          }
          .notification-item-notification-icon41 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time41 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message41 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game09 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time41 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon17 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-game-no-published-alert {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-no-published-new {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-yellow-yellow100);
          }
          .notification-item-left-container42 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container42 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-bottom: 8px;
            background-color: var(--dl-color-yellow-yellow200);
          }
          .notification-item-notification-icon42 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time42 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message42 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game10 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time42 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon18 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
          .notification-item-no-published-old {
            width: 100%;
            display: flex;
            padding: 16px;
            align-items: center;
            flex-shrink: 0;
            padding-left: 16px;
            background-color: var(--dl-color-gray-white);
          }
          .notification-item-left-container43 {
            gap: 8px;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .notification-item-icon-container43 {
            gap: 10px;
            display: flex;
            padding: 8px;
            align-items: flex-start;
            border-radius: 100px;
            padding-right: 8px;
            padding-bottom: 8px;
            background-color: var(--dl-color-yellow-yellow200);
          }
          .notification-item-notification-icon43 {
            width: 24px;
            height: 24px;
          }
          .notification-item-message-and-time43 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .notification-item-notification-message43 {
            gap: 4px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
          .notification-item-sorry-the-game11 {
            color: var(--dl-color-grey-grey800);
            height: auto;
            font-size: 14px;
            text-align: left;
            line-height: 14px;
          }
          .notification-item-notification-time43 {
            color: var(--dl-color-grey-grey500);
            height: auto;
            text-align: left;
            line-height: normal;
          }
          .notification-item-error-icon19 {
            width: 20px;
            height: 20px;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

NotificationItem.defaultProps = {
  refereeIcon: 'd523dbed-4954-4680-aee4-3b0c2cede43d',
  userPlusIcon: '/Notifications/userplus.svg',
  declinedAssignorAlt: 'Assignor decline',
  gameIcon: '/Notifications/game.svg',
  sportOrgName: '[Sport organization name]',
  paymentIcon: '/external/iconi256-mdzs.svg',
  gameYellowAlertIcon: '/Notifications/gamealert.svg',
  redUserPlus: '/Notifications/reduserplus.svg',
  assignorName: '[assignor name]',
  gameCancelledName: 'Knicks vs Heat',
  gameCancelledIcon: '/Notifications/gamecancelled.svg',
  paymentAmountValue: '[amountValue]',
  sportOrgDeclained: '/Notifications/sportorgdeclained.svg',
  notificationTime: '1 day ago',
  gameName: '[Game name]',
  declinedAssignor: '/Notifications/assignorcancelled.svg',
  assignorIcon: '/Notifications/assignor.svg',
  refereeCancelledIcon: '/Notifications/refereedeclined.svg',
  sportOrgIcon: '/Notifications/sportorg.svg',
  refereeName: '[Referee full name]',
}

NotificationItem.propTypes = {
  refereeIcon: PropTypes.string,
  userPlusIcon: PropTypes.string,
  declinedAssignorAlt: PropTypes.string,
  gameIcon: PropTypes.string,
  sportOrgName: PropTypes.string,
  paymentIcon: PropTypes.string,
  gameYellowAlertIcon: PropTypes.string,
  redUserPlus: PropTypes.string,
  assignorName: PropTypes.string,
  gameCancelledName: PropTypes.string,
  gameCancelledIcon: PropTypes.string,
  paymentAmountValue: PropTypes.string,
  sportOrgDeclained: PropTypes.string,
  notificationTime: PropTypes.string,
  gameName: PropTypes.string,
  declinedAssignor: PropTypes.string,
  assignorIcon: PropTypes.string,
  refereeCancelledIcon: PropTypes.string,
  sportOrgIcon: PropTypes.string,
  refereeName: PropTypes.string,
}

export default NotificationItem
