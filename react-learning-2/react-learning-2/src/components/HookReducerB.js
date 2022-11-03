import React, {useReducer} from 'react';

const intialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
    return {...state, firstCounter: state.firstCounter + action.value}
    case 'Drecrement':
    return {...state, firstCounter: state.firstCounter - action.value}
    case 'increment 10':
    return {...state, secondCounter: state.secondCounter + action.value}
    case 'Drecrement 10':
    return {...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
    return intialState
    default:
    return state
  }
}

function HookReducerB() {
  const [count, dispatch] = useReducer(reducer, intialState)
  return(
    <div>
      <br/>
      <p>by hook reducer first counter objects {count.firstCounter}</p>
      <p>by hook reducer second counter objects {count.secondCounter}</p>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <br/>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'Drecrement', value: 1})}>Drecrement</button>
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment by five</button>
      <button onClick={() => dispatch({type: 'Drecrement', value: 5})}>Drecrement by five</button>
      <p>Second counter</p>
      <button onClick={() => dispatch({type: 'increment 10', value: 1})}>Increment second counter</button>
      <button onClick={() => dispatch({type: 'Drecrement 10', value: 1})}>Drecrement second counter</button>
    </div>
  )
}

export default HookReducerB
