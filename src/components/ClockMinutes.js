import React, { Component } from 'react'

export default class ClockMinutes extends Component {
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
      
      const minutesStyle = {
        color:'blue'
      }
      return <h1 style={minutesStyle}>:{ this.state.time.getMinutes() }</h1>

    }
}