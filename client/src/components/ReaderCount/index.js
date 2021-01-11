import React, { Component } from 'react';

class ReaderCount extends Component {
    state = {
        readsCount: 0
    };

    increaseReadsCount = () => this.setState(prevState => ({ readsCount: ++prevState.readsCount}));

    render(){
        return (
            <>
            <p>There have been {this.state.readsCount} reader(s)!</p>

            <button onClick={this.increaseReadsCount}>I've read!</button>
            </>
        )
    }
}

export default ReaderCount;