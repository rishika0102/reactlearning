import React from 'react'

export const DestructProps = (props) => {
  const {name, name1} = props
   return (
    <div>
      <h1>
        Destrucutring props from the arrow functional component {name} and {name1}
      </h1>
    </div>
  )
}
