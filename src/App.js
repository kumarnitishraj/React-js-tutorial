import React, { Component } from 'react';
import './App.css';
import Count from './tutorial/Count'
import StateLessComponent from './tutorial/StateLessComponent';


const arryList=[
  {
    type:'text',
    name:'inputText'
  },
  {
    type:'password',
    name:'inputPassword'
  },
  {
    type:'button',
    name:'inputButton',
    value:'submit'
  }
]


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      count:0
    }
  }
  // static getDerivedStateFromProps(){
  //   console.log('called will')
  //   return {
  //     count:1
  //   }
  // }
  // componentDidMount(){
  //   console.log('called did')
  // }
  countChnage = () =>{
    this.setState({
      count:this.state.count+25
    })
  }
  render() {
    return (
      <div className="App">
  
        <Count 
          key={1}
          count={this.state.count}
          countChnage = {()=>this.countChnage()}
        />
        {
          arryList.map((data, index)=>{
            return(
              <StateLessComponent
              key={index}
                {...data}
                
              />
            )
          })
        }  
      </div>
    );
  }
}

export default App;