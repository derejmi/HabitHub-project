import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class HabitTable extends Component {

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
                        {this.props.rowList.map( (row, index) => row )}                        
                    </Table>
                </div>
            </>
        );
    }
}

export default HabitTable;