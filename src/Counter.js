import React from 'react'
import SubCounter from "./SubCounter";

export default class Counter extends React.Component {
  static defaultProps = {
    name: 'sss',
    age: 23
  }
  constructor() {
    super()
    this.state = {number: 0}
  }
  componentWillMount() {
    console.log('3.父组件挂载之前')
  }
  componentDidMount() {
    console.log('5.父组件挂载完成')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('6.父组件是否需要更新')
    if (newState.number < 15) return true
    return false
  }

  componentWillUpdate() {
    console.log('7.父组件将要更新')
  }

  componentDidUpdate() {
    console.log('8.父组件更新完成')
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    console.log('4.render(父组件挂载)')
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.handleClick}>+</button>
        {this.state.number < 10 ? <SubCounter number={this.state.number}/> : null}
      </div>
    )
  }


}