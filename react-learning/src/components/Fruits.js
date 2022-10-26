import React from 'react'

function Fruits({fruit}) {
  return (
   <div>
    <h2>
        This is fruit {fruit.name} and color {fruit.color}
    </h2>
   </div>
  )
}

export default Fruits
