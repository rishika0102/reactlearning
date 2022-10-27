import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Life Cycle'
    }
    console.log("Life cycle from constructor")
  }

  static getDerivedStateGFromProps(props, state) {
    console.log("life cycle from derived state")
    return null
  }

  componentDidMount() {
    console.log("life cycle from component did mount")
  }

  shouldComponentUpdate() {
    console.log("should component update")
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("get snapshot")
    return null
  }

  componentDidUpdate() {
    console.log("component did update")
  }

  changeState = () => {
    this.setState({
      name: 'Code Volution'
    })
  }

  render() {
    console.log("life cycle from render")
    return (
      <div>
        <p>Life cycle Methods</p>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA
