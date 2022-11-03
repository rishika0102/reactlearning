import React, {useReducer} from 'react';

const intialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
    return state + 1
    case 'Drecrement':
    return state - 1
    case 'reset':
    return intialState
    default:
    return state
  }
}

function HookReducerC() {
  const [count, dispatch] = useReducer(reducer, intialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, intialState)
  return(
    <div>
      <br/>
      <p>by hook reducer count {count}</p>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('Drecrement')}>Drecrement</button>
      <br/>
      <p>Hook reducer count Two {countTwo}</p>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('Drecrement')}>Drecrement</button>
    </div>
  )
}

export default HookReducerC
