import React from 'react';

export function FunctionClick() {
  function clickHandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <p>Event handling</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
