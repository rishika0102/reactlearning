import React, {useContext} from 'react'
import ContextCompc from './ContextCompc';
import {UserContext, ChannelContext} from '../App'

function ContextCompB() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return(
    <div>
      inside context component b
      <br/>
      {user} and {channel}
      <ContextCompc/>
    </div>
  )
}

export default ContextCompB
