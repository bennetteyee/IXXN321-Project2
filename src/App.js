import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/js/About";
import Tips from "./pages/js/Tips";
import Community from "./pages/js/Community.js";
function App() {
  return (
      <div className="App">
          <Router>
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/tips" component={Tips} />
          <Route exact path="/team" component={Community} />
          </Switch>
          </Router>
        </div>
  );
}

export default App;
