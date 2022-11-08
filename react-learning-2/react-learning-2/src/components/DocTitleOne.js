import React, {useState, useEffect} from 'react';
import useCustomHook from '../Hooks/useCustomHook';

function DocTitleOne() {
  const [count, setCount ] = useState(0)

  useCustomHook(count)

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default DocTitleOne
