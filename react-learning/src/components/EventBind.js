import React, {useState} from 'react'

function EventBind() {
  const [name, setName] = useState('EventHandler');

   return (
    <div>
      <h1>Event Bind {name}</h1>
      <button onClick={ ()=> setName("Goodbye")}> Event Click</button>
    </div>
  )
}

export default EventBind
