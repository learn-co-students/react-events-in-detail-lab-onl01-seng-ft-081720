// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
    startDelay = (event) => {
        event.persist();
        setTimeout(() => 
            this.props.onDelayedClick(event), 
            this.props.delay
        )
    }

    render(){
        return (
            <button onClick={this.startDelay}></button>
        )
    }
}

export default DelayedButton;