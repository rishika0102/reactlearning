import React from 'react'
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterArray from './components/HookCounterArray';
import MouseContainer from './components/MouseContainer';
import InternalHookCounter from './components/InternalHookCounter';
import DataFetching from './components/DataFetching';

function App() {
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
    </div>
  );
}

export default App;
