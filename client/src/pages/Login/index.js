import React, { Component } from 'react';
import { Greeting, ReaderCount, Headlines, FeaturedArticle } from '../../components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Login extends Component {

  state = {
    stories: [
      { id: 2503, headline: 'Disaster Strikes', snippet: 'It was a dark and stormy night...'},
      { id: 1322, headline: 'Sunny Days Ahead', snippet: 'Even in the UK, beach days are still upon us.'},
      { id: 5541, headline: 'Beware the Frumious Bandersnatch', snippet: 'Twas brillig, and the slithy toves did gyre and gimble in the wabe.'}
    ]
  };

  handleStorySelect = storyId => {
    const chosenStory = this.state.stories.find(st => st.id === storyId);
    this.setState({ chosenStory });
  };

  render(){
    return(
      <Jumbotron>
        <h1 className="titleHabitHub">Welcome back to HabitHub</h1>
        
        <p> Please log in with your credentials:</p>
        <Form action="">
            <label for="username">Username:</label>
            <input type="text" name="credentials" id="username"/><br/>
            <label for="password">Password:</label>
            <input type="text" name="credentials" id="password"/><br/>
            <Button variant="primary" type="submit">Submit</Button>            
        </Form>
        <p></p>
      </Jumbotron>
    );
  };

};

export default Login;
