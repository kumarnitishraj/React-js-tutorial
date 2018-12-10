import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props); ///super
    
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  }
  state = {
    count:0
  }
  increment(){
    this.setState({
      count:this.state.count+1,
    })
  }

  decrement(){
    this.setState({
      count:this.state.count-1,
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="button" value="-" 
            className="button" 
            onClick={this.decrement}/>
          <input type="button" value="+" 
            className="button" 
            onClick={this.increment}/>
        </div>
        <div>
          <h1>{this.state.count}</h1>
          <Button bsStyle="success" onClick={()=>alert('clicked')}>Bootstrap Button</Button>
        </div>
        
      </div>
    );
  }
}

export default App;
