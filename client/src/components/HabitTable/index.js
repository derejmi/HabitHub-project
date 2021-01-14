import React, { Component } from "react";
import Table from "react-bootstrap/Table";
const moment = require("moment");

class HabitTable extends Component {
  render() {
    return (
      <>
        <div className="habit-table">
          <p>Hello Tom here your can find you progress.</p>
          <p>Please set the habits you want to track from the table below</p>
          <h3>Habit tracking table</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Habit Name</th>
                <th>{moment().format("dddd").slice(0, 3)}</th>
                <th>
                  {(moment().add(1, "days").format("dddd") + 1).slice(0, 3)}
                </th>
                <th>
                  {(moment().add(2, "days").format("dddd") + 1).slice(0, 3)}
                </th>
                <th>
                  {(moment().add(3, "days").format("dddd") + 1).slice(0, 3)}
                </th>
                <th>
                  {(moment().add(4, "days").format("dddd") + 1).slice(0, 3)}
                </th>
                <th>
                  {(moment().add(5, "days").format("dddd") + 1).slice(0, 3)}
                </th>
                <th>
                  {(moment().add(6, "days").format("dddd") + 1).slice(0, 3)}
                </th>
                <th>Week total</th>
              </tr>
            </thead>
            {this.props.rowList.map((row, index) => row)}
          </Table>
        </div>
      </>
    );
  }
}

export default HabitTable;
