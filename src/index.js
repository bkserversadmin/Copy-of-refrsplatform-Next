import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Forgot from './views/forgot'
import Welcome from './views/welcome'
import CalendarView from './views/calendar-view'
import SOWithoutPairedAssignor from './views/s-without-paired-assignor'
import SOMyGames from './views/s-my-games'
import LogIn from './views/log-in'
import MyGames from './views/my-games'
import SOProfile from './views/s-profile'
import SODashboard from './views/s-dashboard'
import SOPaymentInformation from './views/s-payment-information'
import SOWithoutPairedResults from './views/s-without-paired-results'
import SOAssignors from './views/s-assignors'
import Enriquepage from './views/enriquepage'
import Profile from './views/profile'
import Earnings from './views/earnings'
import Register from './views/register'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Forgot} exact path="/forgot" />
        <Route component={Welcome} exact path="/welcome" />
        <Route component={CalendarView} exact path="/calendar-view" />
        <Route
          component={SOWithoutPairedAssignor}
          exact
          path="/s-without-paired-assignor"
        />
        <Route component={SOMyGames} exact path="/s-my-games" />
        <Route component={LogIn} exact path="/" />
        <Route component={MyGames} exact path="/my-games" />
        <Route component={SOProfile} exact path="/s-profile" />
        <Route component={SODashboard} exact path="/s-dashboard" />
        <Route
          component={SOPaymentInformation}
          exact
          path="/s-payment-information"
        />
        <Route
          component={SOWithoutPairedResults}
          exact
          path="/s-without-paired-results"
        />
        <Route component={SOAssignors} exact path="/s-assignors" />
        <Route component={Enriquepage} exact path="/enriquepage" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Earnings} exact path="/earnings" />
        <Route component={Register} exact path="/register" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
