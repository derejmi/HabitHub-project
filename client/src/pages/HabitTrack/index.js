import React, { Component } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import { HabitContainer } from "../../components";
import {withRouter} from 'react-router-dom'

class HabitTrack extends Component {
  state = {
    rowList: [],
    habitFreq: 0,
  };

  freqCounter = (e) => {
    const checked = e.target.checked;
    checked
      ? this.setState({ habitFreq: this.state.habitFreq + 1 })
      : this.setState({ habitFreq: this.state.habitFreq - 1 });
  };

  logoutSession = (e) => {
    localStorage.removeItem("jwtToken")
    this.props.history.push('/')
    
  };


  render() {
    return (
          <>  
              <Button id="logOutBtn" className="genButtons" variant="info" onClick={this.logoutSession} >Log out</Button>
              <HabitContainer />
              
          </>
        )
  }
}

export default withRouter(HabitTrack);
