import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <input type="button" value="-" className="button" onClick={()=>this.setState({count:this.state.count-1})}/>
          <input type="button" value="+" className="button" onClick={()=>this.setState({count:this.state.count+1})}/>
        </div>
        <div>
          <h1>{this.state.count}</h1>
        </div>
        
      </div>
    );
  }
}

export default App;
