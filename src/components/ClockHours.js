import React, { Component } from 'react'

export default class ClockHours extends Component {
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
      return <h1 style={hoursStyle}>{ this.state.time.getHours() }</h1>

    }
}