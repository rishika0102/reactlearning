import React, {useState} from 'react'

function HookCounterThree() {

  const [name, setName] = useState({firstName:'', lastName:''})

  return (
    <form>
      <br/>
      <label>First Name</label>
      <input type="text" value={name.firstName} onChange={ e => setName({...name, firstName: e.target.value})}/>
      <br/>
      <label>Last Name</label>
      <input type="text" value={name.lastName} onChange={ e => setName({...name, lastName: e.target.value})}/>
      <h4>Your Fisrt Name :--{name.firstName}</h4>
      <h4>Your Last Name :--{name.lastName}</h4>
      <h4>{JSON.stringify(name)}</h4>
    </form>
  )
}

export default HookCounterThree
