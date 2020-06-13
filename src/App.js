import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";
import "./App.scss";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import GameSingle from "./pages/GameSingle";
import AllGames from "./pages/AllGames";
import Sidebar from "./components/sidebar/Sidebar";
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    marginLeft: 55,
    marginBottom: 100
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: '100%',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  }
}))

function App() {
  const classes = useStyle()
  return (
    <React.Fragment>
      <div className="launcher-container">
        <Router>
          <NavigationBar />
          <Sidebar />
          <main className="content" className={classes.content}>
            <div className={classes.toolbar} />
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
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
