import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "regenerator-runtime/runtime";
import { Login, SignUp, HabitTrack, Welcome } from "./pages";
import { Header, Footer } from "./layout";
import { PrivateRoute, LoggedOutRoute } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import jwt_decode from "jwt-decode";

class App extends Component {
  state = {
    isLoggedIn: false,

    currentUser: {
      id: 0,
      username: " ",
      email: " ",
      password: " ",
    },

    habitContainer: [
      {
        habit1: {
          id: 0,
          name: " ",
          updatedDate: "date",
          frequency: 0,
          dueDate: " ",
          streak: 0,
          userId: " ",
        },

        habit2: {
          id: 0,
          name: " ",
          updatedDate: "date",
          frequency: 0,
          dueDate: " ",
          streak: 0,
          userId: " ",
        },
      },
    ],
  };

  componentDidMount() {
    if (localStorage.getItem("jwtToken")) {
      this.setState({ isLoggedIn: true });
    }
  }

  login = async (userData) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      const r = await fetch(`http://localhost:3000/users/login`, options);
      const data = await r.json();
      const loginP = document.querySelector("#login");
      loginP.textContent = "";
      if (!data.token) {
        loginP.textContent = data.msg;
        throw Error(data.err);
      }
      const { token } = data;
      console.log(token, "token");
      localStorage.setItem("jwtToken", token);
      const user = jwt_decode(token);
      console.log(user);
      localStorage.setItem("user", user);

      this.setState({ isLoggedIn: true, currentUser: data.user });
      this.props.history.push("/habitTrack");
    } catch (err) {
      console.warn(`Error: ${err}`);
    }
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <PrivateRoute
            path="/habitTrack"
            isLoggedIn={this.state.isLoggedIn}
            component={HabitTrack}
          />
          <LoggedOutRoute
            path="/login"
            isLoggedIn={this.state.isLoggedIn}
            login={this.login}
            component={Login}
          />
          
          <LoggedOutRoute
            path="/signup"
            isLoggedIn={this.state.isLoggedIn}
            component={SignUp}
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
