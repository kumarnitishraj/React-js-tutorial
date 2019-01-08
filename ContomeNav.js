import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

class NavLinkImage extends Component {
    state = {
        active:false
    }
    handleActiveState = () => {
        if(!this.state.active){
            this.setState({
                active:true
            })
        }
    }
    handleInActiveState = () => {
        if(this.state.active){
            this.setState({
                active:false
            })
        }
    }
    render(){
        const { active } = this.state;
        const { to, exact, activeStyle, isActive } = this.props;
        return(
            <NavLink 
                to={to} 
                exact={exact} 
                activeStyle={{ color:'green' }}
                isActive={(match) => match!==null?this.handleActiveState():this.handleInActiveState()}
            >
                {active?'Active':'Inactive'}
            </NavLink>
        )
    }
}

export default NavLinkImage;
