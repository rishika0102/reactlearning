import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      Topic: 'react'
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicsChange = event => {
    this.setState({
      Topic: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.Topic}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label><br/>
          <input type="text" value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label><br/>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}/>
        </div>
        <div>
          <label>Topic</label><br/>
          <select value={this.state.Topic} onChange={this.handleTopicsChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
