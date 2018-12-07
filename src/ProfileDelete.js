import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig.js'


class ProfileDelete extends React.Component{
    handleDelete = event => {
      event.preventDefault()
      const { id } = this.props
      const user = this.props.user

      return fetch(apiUrl + `/profiles/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        }
      }).then(()=>{
        this.props.history.push('/weatherapp')
      })
    }
    render(){
      return (
        <React.Fragment>
          <form onSubmit={this.handleDelete}>
            <button type="submit">Delete</button>
          </form>
        </React.Fragment>
      )
    }
}

export default withRouter(ProfileDelete)
