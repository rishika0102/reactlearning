import React, {Component} from 'react';
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }
  clickHandler = () => {
    debugger
    this.componentRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <p>Refs into child component from the parent component</p>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}
export default FocusInput
