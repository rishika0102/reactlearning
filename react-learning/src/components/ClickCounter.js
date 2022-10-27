import React, {Component} from 'react'

class ClickCounter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState( preState => {
      return { count: preState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <h1 onMouseOver={this.incrementCount}>Click {count} Counter</h1>
    )
  }
}

export default ClickCounter
