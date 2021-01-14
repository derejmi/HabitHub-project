import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'



class TableButtons extends Component {
   //set new habit
   state = {
            name:'',
            frequency:''
        }   
        
    
    handleSelectHabit = (event)=>{
        this.setState({name: event.target.value});
      }
    
    handleSelectFreq = (event)=>{
        this.setState({frequency: event.target.value});
      }

    renderNewRaw = () => {
        console.log('I have been clicked ' + 'name: ' + this.state.name + 'frequency: ' + this.state.frequency);
        }

    render() {
        return (
            <>
                <Form className="table-buttons habit-table">
                <Form.Group controlId="habit">
                    <Form.Label>Select Habit</Form.Label>
                    <Form.Control as="select" custom onChange={this.handleSelectHabit.bind(this)}>
                        <option value="Exercise" >Exercise</option>
                        <option value="Balanced nutrition">Balanced nutrition</option>
                        <option value="Mindfulness">Mindfulness</option>
                        <option value="Smoking">Smoking</option>
                        <option value="Drinking">Drinking</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="frequency">
                    <Form.Label>Select Frequency</Form.Label>
                    <Form.Control as="select" custom onChange={this.handleSelectHabit.bind(this)}>
                        <option value="Weekly" >Weekly</option>
                        <option value="Daily">Daily</option>
                    </Form.Control>
                </Form.Group>
                        <Button className="genButtons" variant="info" onClick={this.renderNewRaw}>Add new habit</Button>{' '}
                </Form>
            </>
            )
        }
};

export default TableButtons;