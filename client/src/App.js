import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, HabitTrack, Welcome } from './pages';
import { Header, Footer } from './layout';
import { BackButton } from './components';
import './App.css';

class App extends Component {

  render(){
    return(
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/habitTrack" component={HabitTrack} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </>
    );
  };

};

export default App;
