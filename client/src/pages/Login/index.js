import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  handleInput = e => this.setState({[e.target.name]: e.target.value })
  //formIncomplete = () => Object.values(this.state).some(v => !v)

  login = e => {
  e.preventDefault()
  //this.props.login(this.state)
  //API Call to server
  console.log(this.state.username, this.state.password)
}

  render(){
    return(
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome back to HabitHub</h1>
        
        <p> Please log in with your credentials:</p>
        <Form onSubmit={this.login}>
            <label for="username">Username:</label>
            <input id="username"  type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="username" /><br/>
            <label for="password">Password:</label>
            <input id="password" type="text" name="password" value={this.state.password} onChange={this.handleInput} placeholder="password"/><br/>
          {/* <Button className="genButtons" variant="info" type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()}>Log in</Button>             */}
        <Button className="genButtons" variant="info" type="submit">Log in</Button>
        </Form>
      </Jumbotron>
    );
  };

};

export default Login;
