import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    // this.state.count = this.state.count + 1;
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h3>Click on increment for counter</h3>
        <div>
          Count - {this.state.count}
        </div>
        <p>Counter implementation by setState</p>
        <button onClick={()=> this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
