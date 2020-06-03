import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./sidebar.scss";
import { Drawer, ToolBar, Divider } from "../../util/material";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Avatar, List, ListItem, withStyles } from "@material-ui/core";

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

class SideBar extends PureComponent {
  pinnedGames = [
    { name: 'one', img: '', link: '' },
    { name: 'two', img: '', link: '' }
  ]
  constructor() {
    super()
  }
  render() {
    const { classes } = this.props;
    return (
      <Drawer variant="permanent" className="sidebar">
        <ToolBar />
        <div className="drawer-contents">
          <ListItem>
            <Link to="/">
              <Avatar>
                <FontAwesomeIcon icon={faHome} />
              </Avatar>
            </Link>
          </ListItem>
          <Divider />
          <List className="pinned-games">
            {
              this.pinnedGames.map((game) => {
                return <ListItem key={game.name}>
                  <Link to={game.link}>
                  <Avatar src="logo512.png" />
                  </Link>
                </ListItem>
              })
            }
          </List>
          <ListItem className="settings">
            <Link to="/settings">
              <Avatar>
                <FontAwesomeIcon icon={faHome} />
              </Avatar>
            </Link>
          </ListItem>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true})(SideBar);
