import React, { Component } from 'react';
import './../App.css';

import Auth from './Component/Auth';



class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      purpose:'login'
    }
    this.authRef = React.createRef();
  }
  changeUi=(action)=>{
    
    this.setState({
      purpose:action
    })
  }

  render() {

    const { purpose } = this.state;
    
    return (
      <div className="App">
          <div>
            {purpose === 'login'?
              <button className="button" onClick={()=>this.changeUi('register')}>Register</button>:
              <button className="button" onClick={()=>this.changeUi('login')}>Login</button>
            }
          </div>
        <Auth 
            purpose={purpose}
            ref={this.authRef}
        />
        
      </div>
    );
  }
}
export default App;