import React, {useState, useEffect} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    var updateCount  = {count};
    console.log("updated count..", updateCount);
  })
  return (
    <div>
      <button onClick={ () => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter
