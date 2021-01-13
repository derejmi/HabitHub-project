import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

class NewHabitRow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.habitName}</td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>
            <input type="checkbox" onClick={this.props.increaseFreqCount} />
          </td>
          <td>Total: {this.props.freq}</td>
          <td>Streak: {this.props.streak}</td>
          <td>
            <button>Update</button>
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
