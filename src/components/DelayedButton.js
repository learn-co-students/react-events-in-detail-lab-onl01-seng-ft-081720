
import React, { Component } from 'react';

class DelayedButton extends Component {

    handleDelayedClick = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }
    render() {
        return (
            
             <button onClick={this.handleDelayedClick}>Click Me</button>
           
        );
    }
}

export default DelayedButton;