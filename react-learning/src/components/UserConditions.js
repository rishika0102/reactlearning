import React, {Component} from 'react';


class UserConditions extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    if(this.state.isLoggedIn) {
      return (
        <div>User LoggedIN Conditions</div>
      )
    } else {
      return <div>User LoggedOff</div>
    }
  }
}

export default UserConditions
