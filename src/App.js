import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <main className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
