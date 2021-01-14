import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

class NewHabitRow extends Component {
  state = { weekTotal: 0 };

  freqCounter = (e) => {
    const checked = e.target.checked;
    checked
      ? this.setState({ weekTotal: this.state.weekTotal + 1 })
      : this.setState({ weekTotal: this.state.weekTotal - 1 });
  };

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
                  this.props.details.streak
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
