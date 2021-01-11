import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
                <div className="table-buttons">
                    <DropdownButton variant="light" title="Select New Habit">
                        <Dropdown.Item href="#/action-1">Exercise</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Balanced nutrition</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mindfulness</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Smoking</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Drinking</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton variant="light" title="Choose tracking frequency">
                        <Dropdown.Item href="#/action-1">Daily</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="info">Add new habit</Button>{' '}
                </div>
            </>
        );
    }
}

export default HabitTrack;
