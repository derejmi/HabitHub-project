import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class SignUp extends Component {
  state = {
      username: "",
      email: "",
      password: "",
      confPassword: ""
  };

  handleInput = e => this.setState({ [e.target.name]: e.target.value})
  // formIncomplete = () => Object.values(this.state).some(v => !v) || this.state.password !== this.state.passwordConfirmation


  signup = async (e) => {
    e.preventDefault();
    try {
        const userData = { 
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const options = {
            method: 'POST',
            //check header settings with Daré
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
        //check server route
        const r = await fetch(`http://localhost:3000/signup/registration`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        this.props.login(userData);
        //this.props.history.push('./feed')
    } catch (err) {
        console.warn(err);
        this.setState({
            username: "",
            email: "",
            password: "",
            confPassword: ""
        })
    }
  };



  render(){
    return(
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome to HabitHub</h1>
        
        <p> Create a new user:</p>
        <Form onSubmit={this.signup}>
            <label for="username">Username:</label>
            <input id="username" type="text" name="username" value={this.state.username}  onChange={this.handleInput} placeholder="username" /><br/>
            <label for="password">Password:</label>
            <input id="password"  type="text" name="password" value={this.state.password} onChange={this.handleInput} placeholder="password" /><br/>
            <label for="password">Confirm password:</label>
            <input id="confPassword"  type="text" name="confPassword" value={this.state.confPassword} onChange={this.handleInput} placeholder="Confirm password" /><br/>
            <label for="email">Email:</label>
            <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="email" /><br/>
            
            {/* <Button variant="primary" type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()} >Submit details</Button>             */}
          <Button className="genButtons" variant="info" type="submit" >Submit details</Button> 
        </Form>
      </Jumbotron>
    );
  };

};

export default SignUp;