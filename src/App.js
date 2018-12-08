import React, { Component } from 'react';

import Count from './tutorial/Count'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Count />
        <Count />
      </div>
    );
  }
}

export default App;