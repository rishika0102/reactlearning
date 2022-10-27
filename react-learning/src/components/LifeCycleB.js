import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Life Cycle'
    }
    console.log("Life cycle B from constructor")
  }

  static getDerivedStateGFromProps(props, state) {
    console.log("life cycle B from derived state")
    return null
  }

  componentDidMount() {
    console.log("life cycle B from component did mount")
  }

  shouldComponentUpdate() {
    console.log("should component update B")
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("get snapshot B")
    return null
  }

  componentDidUpdate() {
    console.log("component did update B")
  }

  render() {
    console.log("life cycle from render")
    return (
      <div>
        <p>Life cycle B Methods</p>
      </div>
    )
  }
}

export default LifeCycleB
