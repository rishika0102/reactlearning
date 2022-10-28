import React, { Component } from 'react'
import WithCounter from './WithCounter';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h3>Click on increment for counter</h3>
        <div>
          Count - {this.state.count}
        </div>
        <p>Counter implementation by setState</p>
        <button onClick={()=> incrementCount()}>Increment</button>
      </div>
    )
  }
}

export default WithCounter(Counter)
