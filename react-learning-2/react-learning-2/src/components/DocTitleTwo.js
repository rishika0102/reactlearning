import React, {useState} from 'react';
import useHookCounter from '../Hooks/useHookCounter';

function DocTitleTwo() {
  const [count, increment, decrement, reset] = useHookCounter(0)
  return (
    <div>
      <h2>Custom Hook Counter {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Drecrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default DocTitleTwo
