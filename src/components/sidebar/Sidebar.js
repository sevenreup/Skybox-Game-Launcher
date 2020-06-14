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
  drawer: {
    background: '#000'
  },
  content: {

  }
});
class SideBar extends PureComponent {
  pinnedGames = [
    { name: 'one', img: 'image/image1.jpg', link: '1' },
    { name: 'two', img: 'image/image2.jpg', link: '2' },
    { name: 'three', img: 'image/image3.jpg', link: '3' },
    { name: 'four', img: 'image/image4.jpg', link: '4' }
  ]
  constructor() {
    super()
  }
  render() {
    const { classes } = this.props;
    return (
      <Drawer variant="permanent" className={`${classes.drawer} sidebar`} color="#000">
        <ToolBar />
        <div className={`drawer-contents ${classes.content}`}>
          <ListItem>
            <Link to="/">
              <Avatar>
                <FontAwesomeIcon icon={faHome} />
              </Avatar>
            </Link>
          </ListItem>
          <ListItem className="all">
            <Link to="/all">
              <Avatar>
                <FontAwesomeIcon icon={faGamepad} />
              </Avatar>
            </Link>
          </ListItem>
          <List className="pinned-games">
            {
              this.pinnedGames.map((game) => {
                return <ListItem key={game.name}>
                  <Link to={{pathname: `/game/${game.link}`, state: {game: game}}}>
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
