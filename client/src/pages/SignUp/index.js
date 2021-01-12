import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SignUp extends Component {

  state = {

  };

  handleSignUpForm = e => {
    e.preventDefault();
    this.props.history.push('/habittrack')
  }

  render(){
    return(
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome to HabitHub</h1>
        
        <p> Create a new user:</p>
        <Form onSubmit={this.handleSignUpForm}>
            <label for="username">Username:</label>
            <input type="text" name="credentials" id="username"/><br/>
            <label for="password">Password:</label>
            <input type="text" name="credentials" id="password"/><br/>
            <label for="email">Email:</label>
            <input type="email" name="credentials" id="email"/><br/>
            <Button variant="primary" type="submit">Submit details</Button>            
        </Form>
      </Jumbotron>
    );
  };

};

export default SignUp;