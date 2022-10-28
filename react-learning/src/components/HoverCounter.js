import React, {Component} from 'react'
import WithCounter from './WithCounter';

class HoverCounter extends Component {

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
        <p>Click Conter</p>
        <button onClick={incrementCount}>Click {count} Counter</button>
      </div>
    )
  }
}

export default WithCounter(HoverCounter)
