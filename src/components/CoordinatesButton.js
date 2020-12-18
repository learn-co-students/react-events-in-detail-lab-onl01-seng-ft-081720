import React, { Component } from 'react';

class CoordinatesButton extends Component {

handleClick = (e) => {
    const coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
}

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

export default CoordinatesButton;
