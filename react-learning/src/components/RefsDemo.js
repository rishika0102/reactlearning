import React, {Component} from 'react';
class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.inputRef)
  }

  clickHandler = (event) => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <p>Refs</p>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
export default RefsDemo
