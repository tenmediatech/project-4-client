import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../src/apiConfig.js'
import ProfileDelete from './ProfileDelete'
import ProfileUpdate from './ProfileUpdate'

class ProfileIndex extends React.Component {
    state = {
      profiles: []
    }

    async componentDidMount() {
      const response = await axios.get('http://localhost:4741/profiles')
      this.setState({profiles:response.data.profiles})
    }

    render() {
      const profiles_rows = this.state.profiles.map(profile => {
        const {id, name, location} = profile
        const { user } = this.props
        return (
          <tr key={id}>
            <td>
              <Link to={`/profileindex/${id}`}>{ name }</Link>
            </td>
            <td>{ location }</td>
            <td>
              <ProfileDelete id={id} user={user} component={ProfileDelete}/>
            </td>
          </tr>
        )
      })

      return (
        <React.Fragment>
          <h1>Profiles</h1>
          <h3 style={{display: 'inline-block'}}>
            <Link to="/createNew">Add Profile</Link>
          </h3>
          <table>
            <tbody>
              {profiles_rows}
            </tbody>
          </table>
        </React.Fragment>
      )
    }
}

export default ProfileIndex
