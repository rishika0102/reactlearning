import React, {Component} from 'react'

class HoverCounter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render(){
    return (
      <div>
        <p>Click Counter</p>
      </div>
    )
  }
}

export default HoverCounter
