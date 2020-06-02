import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <main className="App">
      <div className="obe"></div>
      
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
