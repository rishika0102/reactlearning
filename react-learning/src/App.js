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
import LifeCycleA from './components/LifeCycleA';
import EventBind from './components/EventBind';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Form from './components/Form';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import PortalDemo from './components/PortalDemo';
import ErrorBound from './components/ErrorBound';
import FocusInput from './components/FocusInput';
import ClickCounter from './components/ClickCounter';

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
      <LifeCycleA/>
      <FragmentDemo/>
      <PureComp/>
      <Table/>
      <Form/>
      <FocusInput/>
      <RefsDemo/>
      <PortalDemo/>
      <ParentComp/>
      <ClickCounter/>
      <ErrorBound name="Boundaries"></ErrorBound>
      <EventBind/>
    </div>
  );
}

export default App;
