import React, {useState} from 'react'

function MouseContainer() {

  const [display, setdisplay] = useState(true)

  return (
    <div>
      <button onClick={ () => setdisplay(!display) }>Dispaly</button>
    </div>
  )
}

export default MouseContainer
