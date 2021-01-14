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

import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { TableButtons, NewHabitRow } from "..";
import jwt_decode from "jwt-decode";
const moment = require("moment");

class HabitContainer extends Component {
  state = {
    user: "",
    habits: [],
    token: "",
  };

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    this.setState({ token: token });
    const user = jwt_decode(token);
    console.log(user);
    this.setState({ user: user });

    fetch("http://localhost:3000/habits", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ habits: json });
      })
      .catch((err) => {
        console.warn(`Sorry but...${err}`);
      });
  }

  fetchHabits = () => {
    fetch("http://localhost:3000/habits", {
      method: "GET",
      headers: {
        Authorization: this.state.token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ habits: json });
      })
      .catch((err) => {
        console.warn(`Sorry but...${err}`);
      });
  };

  deleteHabits = (id) => {
    console.log("deleting");
    fetch(`http://localhost:3000/habits/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: this.state.token,
      },
    }).then(this.fetchHabits);
  };

  updateHabits = (id, streak) => {
    console.log("updating");

    const userData = {
      streak,
    };
    fetch(`http://localhost:3000/habits/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: this.state.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(this.fetchHabits);
  };

  updateStreak = (id, date, streak) => {
    console.log(id, "id");
    const today = new Date();
    const lastUpdated = new Date(date);
    const diff = today.getDate() - lastUpdated.getDate();
    console.log(today, "today");
    console.log(lastUpdated, "lastUpdated");
    if (diff > 1) {
      const streak = 0;
      this.updateHabits(id, streak);
    }
    if (diff === 1) {
      let updatedStreak = streak + 1;
      this.updateHabits(id, updatedStreak);
    }

    // updateHabits = (id, streak) => {};

    console.log(diff);

    console.log(today);
    console.log(lastUpdated);
  };

  render() {
    return (
      <>
        <div className="habit-table">
          <p>
            Hello {this.state.user.username} here your can find you progress.
          </p>
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
                <th>Streak total</th>
                <th>Update Streak</th>
                <th>Delete Habit</th>
              </tr>
            </thead>
            {this.state.habits.map((habit, idx) => (
              <NewHabitRow
                key={idx}
                habitName={this.state.habits[idx].name}
                streak={this.state.habits[idx].streak}
                details={this.state.habits[idx]}
                user={this.state.user}
                deleteHabits={this.deleteHabits}
                fetchHabits={this.fetchHabits}
                updateStreak={this.updateStreak}
              />
            ))}
          </Table>
          <Form>
            <TableButtons renderNewRow={this.props.renderNewRow} />
          </Form>
        </div>
      </>
    );
  }
}

export default HabitContainer;
