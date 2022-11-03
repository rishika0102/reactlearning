import React, {useState} from 'react'

function Memo() {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 2)
  }

  return (
    <div>
      <p>Memo</p>
      <button onClick={incrementOne}>increment one {counterOne}</button>
      <button onClick={incrementTwo}>increment Two {counterTwo}</button>
    </div>
  )
}

export default Memo
