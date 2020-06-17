import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { Home, All, Single, Settings } from "./pages";
import { NavigationBar } from "./components/appbar/appbar";
import { SideBar } from "./components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global-theme";
import { connect } from "react-redux";

function App(props) {
  const {theme} = props.color;
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
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
        </>
      </ThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProp = state => { return { color: state.color } }

export default connect(mapStateToProp, null)(App);
