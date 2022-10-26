import React, {Component} from 'react'


class ShortCricuit extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
   return this.state.isLoggedIn && <div>Users condition check by shortCricuit method</div>
  }
}

export default ShortCricuit
