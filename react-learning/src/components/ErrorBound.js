import React from 'react'

function ErrorBound({name}) {
  if(name==='Boundary') {
    throw new Error('not a error boundary')
  }

  return (
    <div>
     {name}
    </div>
  )
}

export default ErrorBound
