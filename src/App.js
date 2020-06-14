import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";
import "./App.scss";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import GameSingle from "./pages/GameSingle"
import AllGames from "./pages/AllGames";
import Sidebar from "./components/sidebar/Sidebar";
import { makeStyles, Container, Typography, ThemeProvider } from "@material-ui/core";
import {dark} from './theme';

const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    paddingLeft: 55,
    paddingBottom: 100,
    minHeight: '100vh'
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: '100%',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.bgColor,
    color: 'white'
  }
}))


function App() {
  const classes = useStyle()
  return (
    <React.Fragment>
      <ThemeProvider theme={dark}>
        <div className="launcher-container">
          <Router>
            <NavigationBar />
            <Sidebar />
            <main className={`launcher-content ${classes.content}`}>
              {/* <div className={classes.toolbar} /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/all" component={AllGames} />
                <Route exact path="/game/:id" component={GameSingle} />
                <Route exact path="/settings" component={Settings} />
              </Switch>
            </main>
            <footer className={classes.footer}>
              <Container>
                <Typography variant="body1">Completly Gaming footer</Typography>
              </Container>
            </footer>
            <div className="background" style={{ background: `url(image/image5.jpg) no-repeat` }}>
              <div className="bg-filter" />
              <div className="bg-noise" />
            </div>

          </Router>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
