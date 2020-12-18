// Code CoordinatesButton Component Here


import React from 'react'

export default class CoordinatesButton extends React.Component {

    // constructor(props) {
    //     console.log(props)
    //     super()
    //     this.onReceiveCoordinates = props.onReceiveCoordinates
    // }

    handleClick = (event) => {
        const x = event.clientX
        const y = event.clientY
        const coordinates = [x ,y]
        this.props.onReceiveCoordinates(coordinates)

    }

    render() {
        return (

            <button onClick={this.handleClick}></button>
            )
    }
}