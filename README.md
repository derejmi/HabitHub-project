# HabitHub-project

[![License: MIT](https://img.shields.io/badge/Licence-MIT-green.svg)](https://opensource.org/licenses/MIT)

Insert Screen record here

HabitHub is a platform where users can sign up, create a table with different habits and track the frequency and streak of their habits.

## Installation

* Clone and download this repo.

### Client 

* `cd` into client folder.
* run `npm install`.
* run `npm start`.

### Server

* `cd` into server folder.
* run `docker-compose up --detach` (the `--detach` flag is optional).

## Usage 

* Go to the welcome page and click the 'Sign Up' button.

* Enter your details and press 'Submit'. You will be redirected to the 'Login' page.

* Type in the email and password you used to sign up.

* Through the User Interface add new habits to your tracking table. Mark the days you completed a habit with a tick and leave the ones when you skipped the habit empty. The app will calculate your weekly total and your streak.


## Technologies

* Figma
* HTML
* CSS
* JavaScript
* Express
* PostgreSQL
* Docker
* Babel
* Webpack
* React
* React Bootstrap
* Jest/Enzyme
* Netlify
* Heroku


## Process

The project started with the analysis of the platform requirements based on which a rough design and plan was sketched using Figma. We then allocated a time frame for each task outlined and logged our progress and remaining tasks.

After the planning and designing step, we split into two groups, one working on the client side, one on the server side. Upon setting up the two main parts of the project, we worked together by mob programming to try and connect them. We used the remaining time to implement testing for both sides and correct bugs and add fixes.

Everytime a new functioning feature was completed, its branch was merged to the Development branch and pushed to the main git repository. At the end all final changes were merged with the master branch.

## Code Snippets

Method of fetching user data from the SQL database and providing users with a token to be able to access the app.

```JavaScript
login = async (userData) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      };
      const r = await fetch(`http://localhost:3000/users/login`, options);
      const data = await r.json();
      const loginP = document.querySelector("#login");
      loginP.textContent = "";
      if (!data.token) {
        loginP.textContent = data.msg;
        throw Error(data.err);
      }
      const { token } = data;
      console.log(token, "token");
      localStorage.setItem("jwtToken", token);
      const user = jwt_decode(token);
      console.log(user);
      localStorage.setItem("user", user);

      this.setState({ isLoggedIn: true, currentUser: data.user });
      this.props.history.push("/habitTrack");
    } catch (err) {
      console.warn(`Error: ${err}`);
    }
  };
```

## Wins & Challenges

Wins | Challenges
------------ | -------------
Improved understanding of designing apps with React. | The React client was challenging to implement as the features were often giving errors.
Successfully set up a database with PostgreSQL and ran it on a server with Docker. | Fetching data from the database and passing it around components without the help of Redux.
Used `jwt` to authenticate users on the platform. | Implementing the streak functionality of the habit tracking table.
Inserted a background video on the welcome page. | Achieving a high coverage with the jest/enzyme testing.

## Bugs

* The "Add Habit" button doesn't function properly.
* Many tests still failing on the client side.

## Features

* Ability to sign up and login to the platform.
* Ability to store your data with an encrypted password to an external SQL database.
* Ability to add new habits to your table, record their frequency, total and streak during a week.

## Future Features

* A more visually-appealing styling.
* Responsive design for mobile users.
* Having mutiple options for the habit frequency.
* Sorting the habits based on streak or frequency.
* Adapting the CSS for all different browsers.
* Adding a badge to the repo.
* Deploying the client and server sides.

## Licence

* [MIT Licence](https://opensource.org/licenses/mit-license.php)

To visit the site click click this link (coming soon).