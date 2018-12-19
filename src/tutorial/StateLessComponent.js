import React, { Component } from 'react';


const StateLessComponent = ({
    type, 
    onCnageComponent, 
    onClickEvent, 
    name,
    value
}) => {
    return(
        <div>
            <input 
                type={type} 
                onChange={onCnageComponent} 
                name={name}
                onClick={onClickEvent}//()=>{}
                value={type==='button'?value:undefined}
            />
        </div>
    )
}

export default StateLessComponent;