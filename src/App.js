import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'


import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

// My Component
import WeatherApp from './auth/components/WeatherApp'
import ProfileIndex from './ProfileIndex'
import CreateNew from './CreateNew'
import Profile from './Profile'
import ProfileUpdate from './ProfileUpdate'
import Hometext from './auth/components/Hometext'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path="/weatherapp" component={WeatherApp}/>
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
        </main>

        <Route exact path="/profileindex/:id/updateprofile" render={()=>(
          <ProfileUpdate user={user}/>
        )} />

        <Route exact path="/createNew" render={()=>(
          <CreateNew user={user}/>
        )} />

        <AuthenticatedRoute user={user} path='/profileindex' render={() => (
          <ProfileIndex user={user} />
        )} />

        <Route exact path="/profileindex/:id" render={()=>(
          <Profile user={user}/>
        )} />

      </React.Fragment>
    )
  }
}

export default App
