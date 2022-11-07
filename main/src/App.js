import React from "react";
import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./page/Login";
import { ThemeContext, themes } from "./api/Theme";
import { Component } from "react";
import Author from "./page/author";

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={themes.light}>
        <>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/author" component={Author} />
            </Switch>
          </Router>
        </>
      </ThemeContext.Provider>
    );
  }
}

export default App;
