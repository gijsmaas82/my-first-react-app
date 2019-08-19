import React, { Component } from 'react'


export default class Clock extends Component {
  state = {
    time: new Date()
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    setInterval(this.setState({
      time: new Date()
    }), 1000)
  }
  render() {
    const hoursStyle = {
      color:'green'
    }
    let h = this.state.time.getHours()
    
    const minutesStyle = {
      color:'blue'
    }
    let m = this.state.time.getMinutes()
    m = (m < 10 ? "0" : "") + m
    const secondsStyle = {
      color:'orange'
    }
    let s = this.state.time.getSeconds()
    s = (s < 10 ? "0" : "" ) + s
    const clockStyle = {
      display: 'flex',
      justifyContent: 'center'
    }
    return <div>
      <h1 style={clockStyle}>
        <div style={hoursStyle}> {h}:</div>
        <div style={minutesStyle}>{m}:</div>
        <div style={secondsStyle}>{s}</div>
      </h1>
    </div>
  }

}