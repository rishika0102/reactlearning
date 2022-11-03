import React, {useContext} from 'react'
import {countContext} from '../App'

function ContextReducerB() {
  const CountContext = useContext(countContext)
  return (
    <div>
      Context Reducer b
      <button onClick={()=>CountContext.countDispatch('increment')}>Increment</button>
      <p>Context reducer {CountContext.countState}</p>
    </div>
  )
}

export default ContextReducerB
