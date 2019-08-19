import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  
  
  render() {
    const users = ["Gijs", "Marloes", "Max"].map(user => {
      return <User name={user} />
    })
    return <div>
      <h1>User Board</h1>
      {users}
    </div>
  }
}