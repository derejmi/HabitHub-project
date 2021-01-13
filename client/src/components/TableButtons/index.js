import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



class TableButtons extends Component {
   //set new habit
   state = {
            name:'work',
            frequency:'monthly'
        }   
    
    handleSelectHabit = (e)=>{
        const habit = this.setState({name: e});
        console.log(habit)
      }
    
      handleSelectFreq = (e)=>{
        const frequency = e;
        this.setState({frequency});
        console.log(this.state.frequency)
      }


      renderNewRaw = () => {
        console.log('I have been clicked');
    }

    render() {
        return (
            <>
                <div className="table-buttons habit-table">
                        <DropdownButton variant="light" title="Select New Habit" onSelect={this.handleSelectHabit}>
                            <Dropdown.Item eventKey="Exercise">Exercise</Dropdown.Item>
                            <Dropdown.Item eventKey="Balanced nutrition" >Balanced nutrition</Dropdown.Item>
                            <Dropdown.Item eventKey="Mindfulness" >Mindfulness</Dropdown.Item>
                            <Dropdown.Item eventKey="Smoking">Smoking</Dropdown.Item>
                            <Dropdown.Item eventKey="Drinking">Drinking</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="light" title="Choose tracking frequency"onSelect={this.handleSelectFreq}>
                            <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
                        </DropdownButton>
                        <Button className="genButtons" variant="info" onClick={this.renderNewRaw}>Add new habit</Button>{' '}
                </div>
            </>
            )
        }
};

export default TableButtons;