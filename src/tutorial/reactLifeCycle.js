import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props); ///super
    
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
  }
  state = {
    count:this.props.initial||0,
  }

  componentWillMount(){
      console.log('componentWillMount get called !');
  }

  componentDidMount(){
    console.log('componentDidMount get called !');
}

  increment(){
    this.setState({
      count:this.state.count+1,
    })
  }

  decrement(){
    this.setState((prevState) => ({
      count: prevState.count-1
    }));
  }

  // componentWillReceiveProps(nextProps, nextState){
  //   console.log(nextProps, nextState);
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState);
    return false;
  }

  componentWillUpdate(nextProps, nextState){
    // this will get called before re-render only 
    console.log('componentWillUpdate is called');
    console.log(nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('componentDidUpdate is called');
  }


  render() {
    console.log(' Rendiring the component with count == ',this.state.count)
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
        </div>
        
      </div>
    );
  }
}

export default App;
