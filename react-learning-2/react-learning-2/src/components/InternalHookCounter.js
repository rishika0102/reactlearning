import React, {useState, useEffect} from 'react';

function InternalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <br/>
      {count}
    </div>
  )
}

export default InternalHookCounter
