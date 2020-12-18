// Code DelayedButton Component Here

import React from 'react'
// import { defaultConfig } from 'sinon'

export default class DelayedButton extends React.Component {


    handleDelayedClick = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

       
    render() {
        console.log(this.props)
        return <button onClick={this.handleDelayedClick}></button>
    }
}