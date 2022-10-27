import React, { Component } from 'react'
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Pure component'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Memo component'
      })
    })
  }

  render() {
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
