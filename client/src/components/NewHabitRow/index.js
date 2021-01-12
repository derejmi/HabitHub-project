import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class NewHabitRow extends Component {
    render() {
        return (
                <tbody>
                        <tr>
                            <td>Exercise</td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td><input type="checkbox" onClick={this.props.increaseFreqCount}/></td>
                            <td>Total:</td>
                        </tr>                 
                </tbody>
        );
    }
}

export default NewHabitRow;