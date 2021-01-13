import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



class TableButtons extends Component {
   //set new habit
   state = {
            name:'',
            frequency:''
        }   
    
    handleSelectHabit = (e)=>{
        this.setState({name: e});
        console.log(this.state.name)
      }
    
      handleSelectFreq = (e)=>{
        const frequency = e;
        this.setState({frequency});
        console.log(this.state.frequency)
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
            </>
            )
        }
};

export default TableButtons;