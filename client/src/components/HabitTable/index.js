import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NewHabitRow from '../NewHabitRow';

class HabitTable extends Component {

    state = {
        habitFreq: 0,
    };

    freqCounter = e => {       
        const checked = e.target.checked;
        checked ? this.setState({habitFreq: this.state.habitFreq+1}) : this.setState({habitFreq: this.state.habitFreq-1})
    }
    

    render() {
        return (
            <>
                <div className="habit-table">
                    <p>Hello Tom here your can find you progress.</p>
                    <p>Please set the habits you want to track from the table below</p>
                    <h3>Habit tracking table</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Habit Name</th>
                                <th>Mon</th>
                                <th>Tue</th>
                                <th>Wed</th>
                                <th>Thu</th>
                                <th>Fri</th>
                                <th>Sat</th>
                                <th>Sun</th>
                                <th>Week total</th>
                            </tr>
                        </thead>
                        <NewHabitRow increaseFreqCount={this.freqCounter} weekTotal={this.state.habitFreq}/>
                    </Table>
                </div>
            </>
        );
    }
}

export default HabitTable;