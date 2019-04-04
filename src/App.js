import React, { Component } from 'react';
import Test from  './Grains/Test/Test';
import TestFunctional from './Grains/TestFunctional/TestFunctional'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Test />
       <TestFunctional />
      </div>
    );
  }
}

export default App;
