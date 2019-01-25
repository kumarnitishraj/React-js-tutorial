import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../home';
import About from '../about';
import Profile from '../profile';

const AuthMessage = (params) => {
  return ( <h1> Please Login before click on this ! </h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }


  loginClick = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn  
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
        <ul>
            <li>
                <NavLink to="/" exact activeStyle={
                { color:'green' }
                }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" exact activeStyle={
                { color:'green' }
                }>About</NavLink>
            </li>
            <li>
                <NavLink to="/profile" exact activeStyle={
                { color:'green' }
                }>Profile</NavLink>
            </li>
        </ul>
          

        <input type="button" value={this.state.loggedIn ? 'Log out': 'Log in'} onClick={()=>this.loginClick()}/>

            <Route path='/' exact strict component={Home}/>  
            <Route path='/about' component={About}/>
            <Route path='/profile' component={this.state.loggedIn?Profile:AuthMessage}/>
        </div>
      </Router>
    );
  }
}

export default App;
