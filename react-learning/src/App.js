import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Greeting } from './components/Greeting';
import MeetJsx from './components/MeetJsx';
import Welcome from './components/Welcome';
import Message from './components/Message';
import { DestructProps } from './components/DestructProps';
import { FunctionClick } from './components/FunctionClick';
import Counter from './components/Counter';
import UserConditions from './components/UserConditions';
import ShortCricuit from './components/ShortCricuit';
import ListRendering from './components/ListRendering';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="My-app">
      <p>Learn React</p>
      <Greet/>
      <Greeting name="Props 1">
        <p>This is children props of Greeting</p>
      </Greeting>
      <Greeting name="Props 2"/>
      <Welcome name="Class"/>
      <MeetJsx/>
      <Message/>
      <FunctionClick/>
      <DestructProps name="params" name1="params1"/>
      <Counter/>
      <UserConditions/>
      <ShortCricuit/>
      <ListRendering/>
      <EventBind/>
    </div>
  );
}

export default App;
