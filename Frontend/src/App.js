import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';
//import { Route } from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Calculator</h1>
          <Calculator /><br></br>
        </header>
        {/* Render Different Component based on Route
        <Route path="/" component={Calculator} /> */}
      </div>

    );
  }


}

export default App;
