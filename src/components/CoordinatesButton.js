// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

    render() {
        return (
            <button onClick={(e) => console.log(this.props.onReceiveCoordinates([e.clientX, e.clientY]))} >
                Button!
            </button>
        )
    }
}