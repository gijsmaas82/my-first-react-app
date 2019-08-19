import React, { Component } from 'react'

export default class ClockSeconds extends Component {
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
      
      const secondsStyle = {
        color:'red'
      }
      return <h1 style={secondsStyle}>:{ this.state.time.getSeconds() }</h1>

    }
}