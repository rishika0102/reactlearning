import React, {useState} from 'react'

function HookCounterTwo() {

  const intialCount = 0;
  const [count, setCount] = useState(intialCount)

  return (
    <div>
      <p></p>
      Count: {count}
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo
