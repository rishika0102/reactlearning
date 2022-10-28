import React from 'react'

const WithCounter = OriginalComponent => {
  class NewComponent extends React.component {
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
      return (
        <OriginalComponent count={this.state.count} incrementCount = {this.incrementCount}/>
      )
    }
  }
  return NewComponent
}

export default WithCounter
