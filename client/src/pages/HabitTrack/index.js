import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { HabitContainer } from "../../components";

class HabitTrack extends Component {
  state = {
    rowList: [],
    habitFreq: 0,
  };

  // componentDidMount(){
  //     const token = localStorage.get("token")
  //     this.setState{token}
  //     const user = localStorage.get("user')
  //     this.setState{user}
  //     if(user)this.setState{isAuthenticated: true}
  // }
  freqCounter = (e) => {
    const checked = e.target.checked;
    checked
      ? this.setState({ habitFreq: this.state.habitFreq + 1 })
      : this.setState({ habitFreq: this.state.habitFreq - 1 });
  };

  // renderNewRow = e => {
  //     this.setState({rowList: this.state.rowList.push(<NewHabitRow key={rowList.length}
  //                                                                  increaseFreqCount={this.freqCounter}
  //                                                                  weekTotal={this.state.habitFreq}
  //                                                                  />)});
  //}

  logoutSession = (e) => {
    console.log("localStorage")
    localStorage.clear()
    location.reload()
  };


  render() {
    return (
        <>
            <HabitContainer />
            <Button onClick={this.logoutSession} >Log out</Button>
        </>
            );
  }
}

export default HabitTrack;
