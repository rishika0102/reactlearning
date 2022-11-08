import React, {useState, useMemo} from 'react'

function Memo() {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 2)
  }

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 20000) i++
    return counterOne %2 === 0
  }, [counterOne])

  return (
    <div>
      <p>Memo</p>
      <button onClick={incrementOne}>increment one {counterOne}</button>
      <button onClick={incrementTwo}>increment Two {counterTwo}</button>
      <span>{isEven ? 'Even' : 'odd'}</span>
    </div>
  )
}

export default Memo
