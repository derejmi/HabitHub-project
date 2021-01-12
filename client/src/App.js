import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, SignUp, HabitTrack, Welcome } from './pages';
import { Header, Footer } from './layout';
import { BackButton } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  
    state = {
        user:{
          id: 0,
          username: ' ', 
          email: ' ',
          password:' '
        },
        habits: [
          {          
            id: 1 ,
            name: "Exercise ",
            updated_date: '2021-21-20',
            frequency: 1,
            dueDate: '2020-01-22' ,
            streak: 2,
            user_id: "1" 
          },
        {
            id: 2 ,
            name: "Mindfulness",
            updated_date: '2021-21-20',
            frequency: 1,
            due_date: '2020-01-22',
            streak: 1,
            user_id: "1" 
        }
      ],
    };



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
