import React from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <Result /><br></br>
        <div ><Keypad /></div>
      </header>
    </div>

  );
}

export default App;
