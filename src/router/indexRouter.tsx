import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../view/Home";

import Kines from "../view/Kines";


class indexRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Kines" component={Kines} />
          <Redirect from="/" to="/Home" />
        </Switch>
      </Router>
    );
  }
}

export default indexRouter;
