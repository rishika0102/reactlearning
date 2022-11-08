import {useState, useEffect} from 'react'

function useHookCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCount(1)
  }

  return [count, increment, decrement, reset]
}

export default useHookCounter
