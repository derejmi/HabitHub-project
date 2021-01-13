import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'regenerator-runtime/runtime'
import { Login, SignUp, HabitTrack, Welcome } from './pages';
import { Header, Footer } from './layout';
// import { BackButton } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  
    // state = {

    //     user: {
    //       id: 0,
    //       username: ' ', 
    //       email: ' ',
    //       password:' '
    //     },

    //     habitContainer: [
    //       {
    //       habit1 : {
    //         id: 0 ,
    //         name: " ",
    //         updatedDate: "date",
    //         frequency: 0,
    //         dueDate: ' ' ,
    //         streak: 0,
    //         userId: " " 
    //       },

    //       habit2 : {
    //         id: 0 ,
    //         name: " ",
    //         updatedDate: "date",
    //         frequency: 0,
    //         dueDate: ' ' ,
    //         streak: 0,
    //         userId: " " 
    //       },
    //   }]
    // };



  render(){
    return(
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/habitTrack" component={HabitTrack} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </>
    );
  };

};

export default App;
