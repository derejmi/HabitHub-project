import React, { Component } from 'react';
import {Button, Form} from 'react-bootstrap';
import {TableButtons, HabitTable} from '../../components'

class HabitTrack extends Component {

    state = {};

    componentDidMount(){
        const token = localStorage.get("token")
        this.setState{token}
        const user = localStorage.get("user')
        this.setState{user}
        if(user)this.setState{isAuthenticated: true}
    }    

    renderNewRow = () => {
        console.log('I have been clicked');
    }

    render() {
        return (
            <Form>
                <HabitTable renderNewRow={this.renderNewRow}/>
                <TableButtons renderNewRow={this.renderNewRow}/>
                <div className="submit-buttons habit-table">
                        <Button className="genButtons" variant="info" type="submit">Submit</Button>{' '}
                </div> 
            </Form>
        );
    }
}

export default HabitTrack;
