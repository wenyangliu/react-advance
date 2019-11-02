import React from 'react'

// 定时器
export default class Clock extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    console.log('Clock did mount')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    console.log('Clock will unmount')
    clearInterval(this.timerID)
  }

  componentDidUpdate() {
    console.log('Clock did update')
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h2>
          现在是： {this.state.date.toLocaleTimeString()}
        </h2>
      </div>
    )
  }
}