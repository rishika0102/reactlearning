import React, { useState } from 'react';
import useInput from '../Hooks/useInput';

function UserForm() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setlastName] = useState('')

  const [firstName, bindFirstName, resetFirstName]=useInput('');
  const [lastName, bindlastName, resetlastName]=useInput('');
  const submitHandler = e => {
    e.preventDefault()
    alert(`User details ${firstName} ${lastName}`)
  }

  return (
    <div>
      <br/>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input value={firstName} {...bindFirstName} type = 'text'/>
        </div>
        <div>
          <label>last Name</label>
          <input value={lastName} {...bindlastName} type = 'text'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
