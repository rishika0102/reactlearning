import React, { Component } from 'react'

class Message extends Component {
  constructor() {
    super()
    this.state = {
      message: 'This is state'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
  }

  render() {
    return(
      <div>
        <p>{this.state.message}</p>
        <button onClick={()=> this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message
