import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Login extends Component {

  state = {

  };

  render(){
    return(
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome back to HabitHub</h1>
        
        <p> Please log in with your credentials:</p>
        <Form action="">
            <label for="username">Username:</label>
            <input type="text" name="credentials" id="username"/><br/>
            <label for="password">Password:</label>
            <input type="text" name="credentials" id="password"/><br/>
            <Button variant="primary" type="submit">Submit</Button>            
        </Form>
      </Jumbotron>
    );
  };

};

export default Login;
