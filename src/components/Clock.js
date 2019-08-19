import React, { Component } from 'react'
import ClockSeconds from './ClockSeconds'
import ClockMinutes from './ClockMinutes'
import ClockHours from './ClockHours'

export default class Clock extends Component {

  render() {

    const clockStyle = {
      display: 'flex'
    }
    return <div>
      <h1 style={clockStyle}>It is: <ClockHours /><ClockMinutes /><ClockSeconds /></h1>
    </div>
  }

}