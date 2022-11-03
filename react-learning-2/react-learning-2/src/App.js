import React, {useReducer} from 'react'
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterArray from './components/HookCounterArray';
import MouseContainer from './components/MouseContainer';
import InternalHookCounter from './components/InternalHookCounter';
import DataFetching from './components/DataFetching';
import ContextComp from './components/ContextComp';
import HookReducer from './components/HookReducer';
import HookReducerB from './components/HookReducerB';
import HookReducerC from './components/HookReducerC';
import ContextReducer from './components/ContextReducer';
import ContextReducerC from './components/ContextReducerC';
import CallBack from './components/CallBack';
import Memo from './components/Memo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const countContext = React.createContext()

const intialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
    return state + 1
    case 'Drecrement':
    return state - 1
    case 'reset':
    return intialState
    default:
    return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, intialState)
  return (
    <div className="App">
      Learn React
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterArray/>
      <MouseContainer/>
      <InternalHookCounter/>
      <DataFetching/>
      <UserContext.Provider value={'usercontext'}>
        <ChannelContext.Provider value={'channelcontext'}>
          <ContextComp/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <HookReducer/>
      <HookReducerB/>
      <countContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ContextReducer/>
        <ContextReducerC/>
      </countContext.Provider>
      <CallBack/>
      <Memo/>
    </div>
  );
}

export default App;
