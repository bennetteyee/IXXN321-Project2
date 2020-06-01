import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from './pages/js/About.js';
import Tips from "./pages/js/Tips.js";
import Community from "./pages/js/Community.js";
import {NoMatch} from "./pages/js/NoMatch.js";

import {NavigationBar} from "./components/js/NavigationBar.js";
import{Layout} from "./components/js/Layout.js";


function App() {
  return (
     <React.Fragment>
       <NavigationBar/>
       <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tips" component={Tips} />
            <Route exact path="/community" component={Community} />
            <Route component={NoMatch}/>
          </Switch>
        </Router>
       </Layout>
    </React.Fragment>
  );
}

export default App;
