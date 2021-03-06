import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props); ///super
    
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  }
  state = {
    count:this.props.count
  }
  increment(){
    let number = 10;
    this.setState({
      count:this.state.count+1,
    })

  }

  componentWillReceiveProps(nextProps, nextState){
    console.log('componentWillReceiveProps is called !')
    console.log(nextProps, nextState);
  }

  decrement(){
    this.setState((prevState) => ({
      count: prevState.count-1
    }));
    // this.setState({
    //   count:this.state.count-1,
    // })
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
          <h1>{this.props.count}</h1>
        </div>
        <div>
        <button onClick={this.props.countChnage}>change props</button>
        </div>
      </div>
    );
  }
}

export default App;
