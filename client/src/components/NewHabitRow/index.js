import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

class NewHabitRow extends Component {
  state = { weekTotal: this.props.details.week_total };

  freqCounter = (e) => {
    const checked = e.target.checked;
    checked
      ? this.setState({ weekTotal: this.state.weekTotal + 1 })
      : this.setState({ weekTotal: this.state.weekTotal - 1 });
  };

  componentDidMount() {
    // setCheckboxes = () => {

    let checkboxValues =
      JSON.parse(localStorage.getItem("checkboxValues")) || {};
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    console.log(checkboxes);

    for (let i = 0; i < checkboxes.length; i++) {
      let currentCheckbox = checkboxes[i];
      currentCheckbox.addEventListener("change", (event) => {
        console.log(event);
        const id = event.target.id;
        const isChecked = event.target.checked;
        console.log(id, "id");
        console.log(isChecked, "isChecked");
        checkboxValues[id] = isChecked;

        console.log(checkboxValues, "checkboxValues");
        const stringify = JSON.stringify(checkboxValues);
        console.log(stringify, "stringify");

        localStorage.setItem("checkboxValues", stringify);
      });
    }

    if (checkboxValues) {
      for (let checkboxId in checkboxValues) {
        document.getElementById(checkboxId).checked =
          checkboxValues[checkboxId];
      }
    }
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.habitName}</td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Mon`}
              onClick={this.freqCounter}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Tues`}
              onClick={this.freqCounter}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Wed`}
              onClick={this.freqCounter}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Thurs`}
              onClick={this.freqCounter}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Fri`}
              onClick={this.freqCounter}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Sat`}
              onClick={this.freqCounter}
            />
          </td>
          <td>
            <input
              type="checkbox"
              id={`${this.props.habitName}Sun`}
              onClick={this.freqCounter}
            />
          </td>
          <td>{this.state.weekTotal}</td>
          <td> {this.props.streak}</td>
          <td>
            <button
              onClick={() =>
                this.props.updateStreak(
                  this.props.details.id,
                  this.props.details.updated_date,
                  this.props.details.streak,
                  this.state.weekTotal
                )
              }
            >
              Update
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.deleteHabits(this.props.details.id)}
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default NewHabitRow;
