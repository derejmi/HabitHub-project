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
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>
            <input type="checkbox" onClick={this.freqCounter} />
          </td>
          <td>Total: {this.state.weekTotal}</td>
          <td>Streak: {this.props.streak}</td>
          <td>
            <button
              onClick={() =>
                this.props.updateStreak(
                  this.props.details.id,
                  this.props.details.updated_date
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
