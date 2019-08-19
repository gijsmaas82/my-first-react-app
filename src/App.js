import React from 'react';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/Lightswitch'
import Clock from './components/Clock'
import UserBoard from './components/UserBoard'

function App() {
  return (
    <div className="App">
      <main>
        <Clock />
        <UserBoard />
        <Title content="Some Simple Title" />
        <LightSwitch />
      </main>
    </div>
  );
}

export default App;
