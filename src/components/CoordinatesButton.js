// Code CoordinatesButton Component Here
import React from 'react'



export default class CoordinatesButton extends React.Component{
    whereIsThis = (event) => {
   this.props.onReceiveCoordinates([event.clientY, event.clientX])

    }
    render(){
        return(
            <button onClick={this.whereIsThis}></button>
        )
    }
}

