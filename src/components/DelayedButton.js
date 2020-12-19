import React from 'react';

export default class DelayedButton extends React.Component {
    
    handleClick = (e) => {
        e.persist()
        this.props.onDelayedClick(e)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}