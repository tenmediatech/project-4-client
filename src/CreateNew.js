import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'

class CreateNew extends React.Component {
  state = {
    profile:{
      name: '',
      location: ''
    },
    flashMessage: ''
  }

  handleChange = (event) => {
    const newProfile = { ...this.state.profile, [event.target.name]: event.target.value }
    this.setState({
      profile: newProfile
    })
  }

  createProfile = (event, user) => {
    event.preventDefault()
    const profile = this.state.profile

    return fetch(apiUrl + '/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      },
      body: JSON.stringify({
        profile: {
          name: profile.name,
          location: profile.location
        }
      })
    }).then(()=>{
      this.props.history.push('/weatherapp')
    })
  }
  render() {
    const user = this.props.user
    return (
      <React.Fragment>
        <h1>Add or Edit Profile</h1>
        <p> {this.state.flashMessage}</p>
        <form>
          <input name='name' type="text" value={this.state.profile.name} onChange={this.handleChange} placeholder='Name' style={{border:'solid 1px #000', width:'240px', marginLeft:'20px'}}/>
          <input name='location' type="text" value={this.state.profile.location} onChange={this.handleChange} placeholder='Location' style={{border:'solid 1px #000', width:'240px', marginLeft:'20px'}}/>
          <button type='submit' onClick={(event) => this.createProfile(event, user)}>Create</button>
        </form>
        <Link to="/home">Go back to Home</Link>
      </React.Fragment>
    )
    this.props.history.push('/profileindex')
  }
}

export default CreateNew
