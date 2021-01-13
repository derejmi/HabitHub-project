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


    render() {
        return (
            <>
                <div className="table-buttons habit-table">
                        <DropdownButton variant="light" title="" onSelect={this.handleSelectHabit}>
                            <Dropdown.Item eventKey="Exercise">Exercise</Dropdown.Item>
                            <Dropdown.Item eventKey="Balanced nutrition" >Balanced nutrition</Dropdown.Item>
                            <Dropdown.Item eventKey="Mindfulness" >Mindfulness</Dropdown.Item>
                            <Dropdown.Item eventKey="Smoking">Smoking</Dropdown.Item>
                            <Dropdown.Item eventKey="Drinking">Drinking</Dropdown.Item>
                        </DropdownButton>

                        
                        <DropdownButton variant="light" title="Choose tracking frequency"onSelect={this.handleSelectFreq}>
                            <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
                        </DropdownButton>
                        <Button className="genButtons" variant="info" onClick={this.props.renderNewRow}>Add new habit</Button>{' '}
                </div>
      renderNewRaw = () => {
        console.log('I have been clicked ' + 'name: ' + this.state.name + 'frequency: ' + this.state.frequency);
    }


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
                            <td>Total: {this.props.weekTotal}</td>
                        </tr>                 
                </tbody>



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