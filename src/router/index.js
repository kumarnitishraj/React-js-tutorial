import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Link, 
    NavLink, 
    Redirect, 
    Prompt,
    Switch
} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './home';
import About from './about';
import Profile from './profile';

export default class App extends Component{
    render(){
        return(
            <div>

                <Router>

                    <Switch>
                        <Route path='/' exact strict component={Home}/>  
                        <Route path='/about' exact strict component={About}/>
                        <Route path='/profile' exact strict component={Profile}/>
                        <Redirect to={'/'} /> 
                    </Switch>
                </Router>
            </div>
        )
    }
}