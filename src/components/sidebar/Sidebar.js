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
import { faHome,faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Avatar, List, ListItem, withStyles } from "@material-ui/core";

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

class SideBar extends PureComponent {
  pinnedGames = [
    { name: 'one', img: 'image/image1.jpg', link: '' },
    { name: 'two', img: 'image/image2.jpg', link: '' },
    { name: 'two', img: 'image/image3.jpg', link: '' },
    { name: 'two', img: 'image/image4.jpg', link: '' }
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
          <ListItem className="settings">
            <Link to="/settings">
              <Avatar>
                <FontAwesomeIcon icon={faGamepad} />
              </Avatar>
            </Link>
          </ListItem>
          <List className="pinned-games">
            {
              this.pinnedGames.map((game) => {
                return <ListItem key={game.name}>
                  <Link to={game.link}>
                    <Avatar src={game.img} />
                  </Link>
                </ListItem>
              })
            }
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideBar);
