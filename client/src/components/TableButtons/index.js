import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"

class TableButtons extends Component {
      //set new habit
      state = {
        name: "",
        frequency: "",
      };

      handleSelectHabit = (e) => {
        this.setState({ name: e.target.value });
      };

      handleSelectFreq = (e) => {
        this.setState({ frequency: e.target.value });

      };

      sendRowData = async (e) => {
          e.preventDefault();
          console.log("the event", e)
          
          const token = localStorage.getItem("jwtToken");

          try {
                const newHabitData = {
                  name: this.state.name,
                  updated_date: new Date(),
                  streak: 0
                };

            const options = {
              method: "POST",
              headers: { 
                "Content-Type": "application/json" ,
                Authorization: token,
              },
              body: JSON.stringify(newHabitData),
            };
            const r = await fetch(`http://localhost:3000/habits`, options)
                  .then((response) => response.json())
                  .then((json) => {
                    this.setState({ habits: json });
                    this.props.fetchHabits()
                  });
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


    

  

  render() {
    return (
      <>
         <Form className="table-buttons habit-table" onSubmit={this.sendRowData}>
                <Form.Group controlId="habit" className="formGroup">
                    <Form.Label>Select Habit:</Form.Label>
                    <Form.Control as="select" custom onChange={this.handleSelectHabit.bind(this)}>
                      {/* onChange={this.handleSelectHabit.bind(this)} */}
                        <option value="Exercise" >Exercise</option>
                        <option value="Balanced nutrition">Balanced nutrition</option>
                        <option value="Mindfulness">Mindfulness</option>
                        <option value="Smoking">Smoking</option>
                        <option value="Drinking">Drinking</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="frequency" className="formGroup">
                    <Form.Label> and Frequency:</Form.Label>
                    <Form.Control as="select" custom onChange={this.handleSelectFreq.bind(this)}>
                   {/* onChange={this.handleSelectFreq.bind(this)}> */}
                        <option value="Weekly" >Weekly</option>
                        <option value="Daily" >Daily</option>
                    </Form.Control>
                </Form.Group>
                        <input type="submit" className="genButtons" variant="info" value="Add new habit"/>
              </Form>
 

      </>
    );
  }
}

export default TableButtons;
