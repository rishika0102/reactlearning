import React from 'react'

export const Greeting = (props) => {
  console.log("props...", props)
   return (
    <div>
      <h1>
        Greeting from the arrow functional component {props.name}
      </h1>
      {props.children}
    </div>
  )
}


