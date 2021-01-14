import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });
  formIncomplete = () => Object.values(this.state).some(v => !v)

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome back to HabitHub</h1>

        <p> Please log in with your credentials:</p>
        <Form onSubmit={this.login}>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            placeholder="your email"
          />
          <br />
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
            placeholder="password"
          />
          <br />
          <Button className="genButtons" variant="info" type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()}>Log in</Button>
        </Form>
        <p id="login"></p>
      </Jumbotron>
    );
  }
}

export default Login;
