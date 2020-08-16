import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/Profile'
import Create from './components/Create'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/list" component={Landing} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
