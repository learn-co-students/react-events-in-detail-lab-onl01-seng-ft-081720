import React, { Component } from 'react';

class CoordinatesButton extends Component {

    mouseCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
        return (
            <button onClick={this.mouseCoordinates}>

            </button>
        );
    }
}

export default CoordinatesButton