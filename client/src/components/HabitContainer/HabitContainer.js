//import react

//want to combine Habit Table and New Habit Row - lets call this Habit 

// so in we do reshuffle habit track a bit we move the form to table rows (for adding new habits)

//the component structure of HabitTrack should be
             //Habit Track
//       ----> Habit Container  (maps out Habit Components using habit data from fetch) - use dummy data in state for habits we will change after 
//       ----> Table Rows

//In Habit Container we send a fetch to localhost:3000/habits with the auth token and we save all the habit info to state
//Then in the render function we return a map of these habits all into this "Habit" components defined above for each of these components we pass down the data as a prop from state
//This bit should be similar to the Github repo code challenge


import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { TableButtons, NewHabitRow } from '..';

class HabitContainer extends Component {

    state = {
        currentUser: '',
        habitContainer: []
    };

    componentDidMount(){  
        fetch('http://localhost:3000/habits')
            .then(r => r.json())
            .then(data => '...' )
            .then(data => this.setState({ currentUser: data.currentUser, habitContainer: data.habitContainer }))
            .catch(err => {console.warn(`Sorry but...${err}`)});
    }

    render() {
        return (
            <>
                <div className="habit-table">
                    <p>Hello {this.state.currentUser.username} here your can find you progress.</p>
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
                        {this.state.habitContainer.map( (habit, idx) => <NewHabitRow key={idx} 
                                                                                     habitName={this.state.habitContainer[idx].name}
                                                                                     freq={this.state.habitContainer[idx].frequency}
                                                                                     streak={this.state.habitContaier[idx].streak}
                                                                                     />)}                                            
                    </Table>
                    <Form>
                        <TableButtons renderNewRow={this.props.renderNewRow}/>
                    </Form>
                </div>
            </>
        );
    }
}

export default HabitContainer;
