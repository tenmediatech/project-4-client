import React from 'react'
import { BrowserRouter as Router, withRouter, Route, Link } from 'react-router-dom'
import axios from 'axios'
import ProfileUpdate from './ProfileUpdate'

class Profile extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      user: props.user,
      profile:{
        name: '',
        location: ''
      }
    }
  }

  async componentDidMount(){
    const id = this.props.match.params.id
    const response = await axios.get(`http://localhost:4741/profiles/${id}`)
    const profile = response.data.profile

    this.setState({
      profile: profile
    })
  }

  render() {
    const {name, location} = this.state
    const id = this.props.match.params.id
    const { user } = this.props

    return (
      <React.Fragment>
        <h4>Profile:</h4>
        <p>Name: {this.state.profile.name}</p>
        <p>Location: {this.state.profile.location}</p>
        <h2>Edit Profile</h2>
        <ProfileUpdate id={id} user={user} component={ProfileUpdate}/>
      </React.Fragment>
    )
  }
}

export default withRouter(Profile)
