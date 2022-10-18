import React , { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import { Greeting } from './components/Greeting'

function App() {
  return (
    <div>
      <p>Learn React</p>
      <Greet/>
      <Greeting />
    </div>
  );
}

export default App;
