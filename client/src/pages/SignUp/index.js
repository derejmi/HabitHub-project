import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

  formIncomplete = () =>
    Object.values(this.state).some((v) => !v) ||
    this.state.password !== this.state.password2;

  // formIncompleteResult = this.formIncomplete();

  signup = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
      };
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      //check server route
      const r = await fetch(`http://localhost:3000/users/register`, options);
      const data = await r.json();
      const errorP = document.querySelector("#err");
      const successP = document.querySelector("#success");
      errorP.textContent = "";
      successP.textContent = "";
      if (data.email) {
        errorP.textContent = data.email;
        throw Error(data);
      }
      if (data["msg"]) {
        successP.textContent = data.msg;
      }
      // this.props.login(userData);
      this.props.history.push("/login");
    } catch (err) {
      console.warn(err);
      this.setState({
        username: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      username: "",
      email: "",
      password: "",
      password2: "",
    });

    this.props.history.push("/");
  };

  render() {
    return (
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome to HabitHub</h1>

        <p> Create a new user:</p>
        <Form onSubmit={this.signup}>
          <label for="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
            placeholder="username"
          />
          <br />
          <label for="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
            placeholder="password"
          />
          <br />
          <label for="password">Confirm password:</label>
          <input
            id="password2"
            type="password"
            name="password2"
            value={this.state.password2}
            onChange={this.handleInput}
            placeholder="Confirm your password"
          />
          <br />
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
            placeholder="email"
          />
          <br />

          <Button
            id="registerBtn"
            variant="info"
            type="submit"
            className={
              (this.formIncomplete() ? "disabled" : "enabled", "genButtons")
            }
            disabled={this.formIncomplete()}
          >
            Submit details
          </Button>
          {/* <Button className="genButtons" variant="info" type="submit" >Submit details</Button>  */}
        </Form>
        <Button className="genButtons" variant="info" onClick={this.resetForm}>
          Quit
        </Button>
        <p id="err"></p>
        <p id="success"></p>
      </Jumbotron>
    );
  }
}

export default withRouter(SignUp);
