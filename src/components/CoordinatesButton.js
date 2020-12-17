import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleButtonClick = (e) => {
        const x = e.clientX
        const y = e.clientY
        const coordinates = [x, y]
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render() {
        return (
           
              <button onClick={this.handleButtonClick}>Click</button>
            
        );
    }
}

export default CoordinatesButton;