import React, { Component } from 'react';

class DelayedButton extends Component {

    handleClick = (e) => {
        e.persist()
        window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

export default DelayedButton;