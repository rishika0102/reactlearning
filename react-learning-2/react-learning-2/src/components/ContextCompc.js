import React from 'react'
import {UserContext, ChannelContext} from '../App';

function ContextCompc() {

  return(
    <div>
      Context Component C
      <UserContext.Consumer>
      {
        user => {
          return (
            <ChannelContext.Consumer>
            {
              channel => {
                return (
                  <div>
                    User context value {user} and Channel Context value {channel}
                  </div>
                )
              }
            }
            </ChannelContext.Consumer>
          )
        }
      }
      </UserContext.Consumer>
    </div>
  )
}

export default ContextCompc
