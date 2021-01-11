import React, { Component } from 'react';

class FaveButton extends Component {
    state = { faved: false }

    handleFave = e => {
        e.stopPropagation()
        this.setState(prevState => ({ faved: !prevState.faved }))
    }

    render() {
        return (
            <span onClick={this.handleFave} style={{ color: this.state.faved ? 'gold' : 'grey' }}>★</span>
        );
    }
}

export default FaveButton;
