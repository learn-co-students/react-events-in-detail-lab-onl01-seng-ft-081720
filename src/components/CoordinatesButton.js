// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    array = (event) => {
        const coordinates = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return(
            <button onClick={this.array}></button>
        )
    }
}

export default CoordinatesButton;