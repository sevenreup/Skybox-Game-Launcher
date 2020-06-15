import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { Home, All, Single, Settings } from "./pages";
import { NavigationBar } from "./components/appbar/appbar";
import { SideBar } from "./components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Router>
          <SideBar />
          <Footer />
          <div className="content">
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/all" component={All} />
              <Route exact path="/game/:id" component={Single} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
