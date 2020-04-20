import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Main from "./Main";
import HomePage from "./components/HomePage";

class App extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    password: "",
    error: ""
  };

  login = (email, password) => {
    axios
      .post("http://localhost:3001/api/login", {
        email: email,
        password: password
      })
      .then(res => {
        console.log("login na this");
        console.log(res.data, "login success");
      })
      .catch(err => {
        console.log(err, "login error, try again");
      });

    this.setState({
      email: "",
      password: ""
    });
  };

  signup = (fname, lname, contact, email, password) => {
    axios
      .post("http://localhost:3001/api/signup", {
        // id: idToBeAdded,
        firstname: fname,
        lastname: lname,
        contact: contact,
        email: email,
        password: password
      })
      .then(res => {
        console.log(res, "signup success");
      })
      .catch(err => {
        console.log(err, "signup error, try again");
      });

    this.setState({
      firstname: "",
      lastname: "",
      contact: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route
              exact
              path="/signup"
              render={() => <SignUp save={this.signup} />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login login={this.login} state={this.state} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
