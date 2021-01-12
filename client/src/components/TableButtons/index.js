import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class TableButtons extends Component {
    

    render() {
        return (
            <>
                <div className="table-buttons habit-table">
                        <DropdownButton variant="light" title="Select New Habit">
                            <Dropdown.Item value="Exercise">Exercise</Dropdown.Item>
                            <Dropdown.Item value="Balanced nutrition">Balanced nutrition</Dropdown.Item>
                            <Dropdown.Item value="Mindfulness">Mindfulness</Dropdown.Item>
                            <Dropdown.Item value="Smoking">Smoking</Dropdown.Item>
                            <Dropdown.Item value="Drinking">Drinking</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="light" title="Choose tracking frequency">
                            <Dropdown.Item value="Daily">Daily</Dropdown.Item>
                            <Dropdown.Item value="Weekly">Weekly</Dropdown.Item>
                            <Dropdown.Item value="Monthly">Monthly</Dropdown.Item>
                        </DropdownButton>
                        <Button variant="info">Add new habit</Button>{' '}
                </div>
                <div className="submit-buttons habit-table">
                        <Button variant="secondary" type="submit">Submit</Button>{' '}              
                        <Button variant="secondary">Quit</Button>{' '}
                </div>
            </>
        );
    }
}

export default TableButtons;