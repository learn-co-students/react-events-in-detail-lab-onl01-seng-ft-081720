// Code CoordinatesButton Component Here
import React from 'react'



export default class DelayedButton extends React.Component{

    slowed = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)
        })
    }
   
    render(){
        return(
           <button onClick={this.slowed}></button>
        )
    }
}
