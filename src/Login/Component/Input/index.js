import React, { Component } from "react";


class Input extends Component{
    render(){
        return(
            <div>
                <input type="email"  value="abc@ca.com"    name="username" required placeholder="Enter Your Email"/>
            </div>
        )
    }
}