import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {TableButtons} from '../../components'

class HabitTrack extends Component {
    render() {
        return (
            <>
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
                    <tbody>
                        <tr>
                            <td>Exercise</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td>Total:</td>
                        </tr>                 
                    </tbody>
                </Table>
                <TableButtons />
                <div className="submit-buttons habit-table">
                        <Button className="genButtons" variant="info" type="submit">Submit</Button>{' '}              
                        <Button className="genButtons" variant="info" onClick={this.resetForm}>Quit</Button>{' '}
                </div> 
            </>
        );
    }
}

export default HabitTrack;
